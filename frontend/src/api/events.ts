import { ApiPromise } from 'src/types';
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
}

export default EventsAPI;
