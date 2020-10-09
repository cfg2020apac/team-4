from flask import Flask, request, jsonify, g, send_file, session, send_from_directory, safe_join, abort
import mysql.connector
import json
import jwt
import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from functools import wraps


app = Flask(__name__, static_url_path='')
# The absolute path of the directory containing images for users to download
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

    sql = f"INSERT INTO user (username, user_password) VALUES (%s, %s)"

    g.cursor.execute(sql, [username, hashed_password])

    sql = f"SELECT id FROM user WHERE username = (%s)"

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

    sql = f"SELECT * FROM user WHERE email = (%s) LIMIT 1"

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


@app.route('/api/announcements', methods=['GET'])
@authentication_required
def announcements(current_user):
    """
    Input: NIL
    Output: list of annoucements
    """
    response = {}
    sql = f"SELECT title , content from announcement;"
    g.cursor.execute(sql)
    data = g.cursor.fetchall()
    response_msg = list()

    for row in data:
        response_msg_link = dict()
        response_msg_link["title"] = row[0]
        response_msg_link["content" ] = row[1]

        response_msg.append(response_msg_link)
    response = {
        "data": response_msg,
        "error": None
    }
    status_code = 200
    return json.dumps(response), status_code, {'Content-Type': 'json; charset=utf-8'}

@app.route('/api/new-event', methods=['POST'])
@authentication_required
def resources(current_user):
    """
    Input: form data for new event
    Output: NIL
    """
    uploaded_file = request.files['file']
    name = request.form.get('name')
    location = request.form.get('location')
    date = request.form.get('date')
    descriptions = request.form.get('descriptions')
    sql = f"INSERT INTO events(event_title, location, date, descriptions, url) VALUES(%s,%s,%s,%s,%s);"
    g.cursor.execute(sql, [name, location, date, descriptions, "localhost:5000/get-event-banner/" + uploaded_file.filename])
    if uploaded_file.filename != '':
            uploaded_file.save("./s3/" + uploaded_file.filename)
    response = {
        'data': "sucess",
        'error': None
    }
    status_code = 200
    return json.dumps(response), status_code, {'Content-Type': 'json; charset=utf-8'}


@app.route('/api/get-event-banner/<path>', methods=['GET'])
@authentication_required
def get_event_banner(current_user, path):
    """
    Input: NIL
    Output: url of pic from s3
    """
    return send_from_directory('s3', path)

@app.route('/api/events', methods=['GET'])
@authentication_required
def events(current_user):
    """
    Input: NIL
    Output: list of events
    """
    response = {}
    sql = f"SELECT event_id , location, date, descriptions, url from events;"
    g.cursor.execute(sql)
    data = g.cursor.fetchall()
    response_msg = list()

    for row in data:
        response_msg_link = dict()
        response_msg_link["name"] = row[0]
        response_msg_link["location"] = row[1]
        response_msg_link["date"] = row[2]
        response_msg_link["descriptipns"] = row[3]
        response_msg_link["bannerImageUrl"] = row[4]
        response_msg.append(response_msg_link)
    response = {
        "data": response_msg,
        "error": None
    }
    status_code = 200
    return json.dumps(response), status_code, {'Content-Type': 'json; charset=utf-8'}


@app.route('/api/pet', methods=['GET'])
@authentication_required
def pet(current_user):
    """
    Input: NIL
    Output: url of pic from s3
    """
    # TODO: Query DB for the s3 link
    # response = {
    #     'data': "url",
    #     'error': None
    # }
    # status_code = 200
    # return json.dumps(response), status_code, {'Content-Type': 'json; charset=utf-8'}
    return send_from_directory('s3', "star.jpg")


@app.route('/api/get-score', methods=['GET'])
@authentication_required
def get_score(current_user):
    """
    Input: NIL
    Output: score
    """
    # TODO: get the score from DB
    response = {
        'data': "score",
        'error': None
    }
    status_code = 200
    return json.dumps(response), status_code, {'Content-Type': 'json; charset=utf-8'}


@app.route('/api/add-score', methods=['POST'])
@authentication_required
def add_score(current_user):
    """
    Input: NIL
    Output: score
    """
    # TODO: add the score to DB 
    response = {
        'data': "score",
        'error': None
    }
    status_code = 200
    return json.dumps(response), status_code, {'Content-Type': 'json; charset=utf-8'}


@app.route('/api/leaderboard', methods=['GET'])
@authentication_required
def leaderboard(current_user):
    """
    Input: NIL
    Output: score
    """
    # TODO: obtain all data from leaderboard
    response = {
        'data': "score",
        'error': None
    }
    status_code = 200
    return json.dumps(response), status_code, {'Content-Type': 'json; charset=utf-8'}

