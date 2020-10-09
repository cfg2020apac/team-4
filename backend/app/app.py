from flask import Flask, request, jsonify, g, send_file, session
import mysql.connector
import json
import jwt
import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from functools import wraps


app = Flask(__name__)
app.config.from_json('config.json')

@app.before_request
def connect_to_db():
    """
    Connects to the database server if a connection is not found. 
    Executes before every request is processed.
    
    autocommit set to True. Revert to False if Transactions required.
    """
    if not hasattr(g, 'db_connection'):
        g.db_connection = mysql.connector.connect(**app.config['DATABASE'])
        g.cursor = g.db_connection.cursor()
        g.db_connection.autocommit = True
        

@app.teardown_appcontext
def close_db(error):
    """
    Gracefully disconnects from the database server when application context
    is torn (Internal error, server manually disconnected).
    """
    db = g.pop('db_connection', None)
    cursor = g.pop('cursor', None)
    if db is not None:
        db.close()
    if cursor is not None:
        cursor.close()

def authentication_required(f):
    """ Decorator function to execute authentication checks """
    @wraps(f)
    def auth_checks(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            return 'Token is missing! Please add token in your header with key x-access-token', 401

        current_user = None
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
            current_user = {
                "user_id": data['id'],
                "username": data['username']
                }
        except:
            return 'Invalid token', 401

        return f(current_user, *args, **kwargs)   
    return auth_checks

@app.route('/', methods=['GET'])
def hello_world():
    return "hello world"

@app.route('/signup', methods=['POST'])
def signup():
    """
    Input: username, password, name
    Output: user_id, name
    """
    data = request.get_json()
    username = data["username"]
    pw = data["password"]

    status_code = 201

    hashed_password = generate_password_hash(pw, method='sha256')

    sql = f"INSERT INTO users (username, user_password) VALUES (%s, %s)"

    g.cursor.execute(sql, [username, hashed_password])

    sql = f"SELECT id FROM users WHERE username = (%s)"

    g.cursor.execute(sql, [username])
    fetched = g.cursor.fetchone()
  
    response = {'id': fetched[0] }

    return json.dumps(response), status_code, {'Content-Type': 'json; charset=utf-8'}


@app.route('/login', methods=['POST'])
def login():
    """
    Input: username, password
    Output: user_id, name
    """
    data = request.get_json()
    username = data["username"]
    pw = data["password"]

    sql = f"SELECT * FROM users WHERE username = (%s) LIMIT 1"

    g.cursor.execute(sql, [username])

    fetched = g.cursor.fetchone()
    response = {}
    status_code = 200
    if fetched == None:
        status_code = 404
        response = {'error': "Invalid username or password" }

    elif check_password_hash(fetched[2], pw):
        
        token = jwt.encode({'id' : fetched[0], 'username': fetched[1], 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])

        response = {
            'id': fetched[0],
            'username': fetched[1],
            'token': token.decode('UTF-8')
            }

    return json.dumps(response), status_code, {'Content-Type': 'json; charset=utf-8'}

@app.route('/logout')
@authentication_required
def logout(current_user):
    # remove the username from the session if it's there
    response = {'id' : current_user['user_id'], 'message': 'Successfully logged out'}
    status_code = 200
    return json.dumps(response), status_code, {'Content-Type': 'json; charset=utf-8'}

