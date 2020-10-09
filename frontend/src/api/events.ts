import { ApiPromise } from 'src/types';
import { EventDetails } from 'src/types/EventDetails';
import { createFormData } from 'src/utils/formdata-helper';
import BaseAPI from './base';

export interface WithToken {
  csrf_token: string | null;
}

// export interface SessionData {
//   user: UserData;
//   csrf_token: string;
// }

class EventsAPI extends BaseAPI {
  // TODO: pending backend integration
  public createEvent(event: EventDetails): ApiPromise<{ data: string; error: string }> {
    const fd = new FormData();
    createFormData(fd, 'event', event);
    return this.post('/events/new', fd, true);
  }

  //   public updateUser(user: UserData): ApiPromise<{ user: UserData }> {
  //     const fd = new FormData();
  //     createFormData(fd, 'user', user);
  //     return this.post('/update', fd, true);
  //   }

  //   public signIn(username: string, password: string): ApiPromise<SessionData> {
  //     return this.extractCsrfToken(this.post('/signin', { username, password }));
  //   }

  //   public signOut(): ApiPromise<{}> {
  //     return this.extractCsrfToken(this.post('/signout'));
  //   }

  private extractCsrfToken<D extends WithToken>(promise: ApiPromise<D>): ApiPromise<D> {
    return promise.then((response) => {
      if (response.data.csrf_token) {
        this.setCsrfToken(response.data.csrf_token);
      }
      return response;
    });
  }
}

export default EventsAPI;
