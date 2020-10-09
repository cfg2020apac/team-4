import { ApiPromise, ApiResponse } from 'src/types';
import { EventDetails } from 'src/types/EventDetails';
import { createFormData } from 'src/utils/formdata-helper';
import BaseAPI from './base';

class EventsAPI extends BaseAPI {
  // TODO: pending backend integration
  public createEvent(event: EventDetails): ApiPromise<{ data: string; error: string }> {
    const fd = new FormData();
    createFormData(fd, 'event', event);
    return this.post('/events/new', fd, true);
  }

  public async getEvents(): ApiPromise<EventDetails[]> {
    const mock: ApiResponse<EventDetails[], {}> = {
      code: 200,
      messages: [],
      data: [
        {
          name: 'test',
          address: '1233',
          bannerImage: 'https://place-hold.it/300x500/',
          date: '1998-09-09',
          descriptions: 'lorem ipsum'
        },
        {
          name: 'test',
          address: '1233',
          bannerImage: 'https://place-hold.it/300x500/',
          date: '1998-09-09',
          descriptions: 'lorem ipsum'
        }
      ]
    };

    return mock;
  }

  // public getEvents(): ApiPromise<[EventDetails]> {
  //   return this.get('/events');
  // }
}

export default EventsAPI;
