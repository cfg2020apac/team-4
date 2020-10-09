import UsersAPI from './users';
import EventsAPI from './events';

const api = {
  users: new UsersAPI(),
  events: new EventsAPI()
};

Object.freeze(api);

export default api;
