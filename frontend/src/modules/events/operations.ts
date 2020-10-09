import api from 'src/api';
import { ApiResponse, Operation } from 'src/types';
import { EventDetails } from 'src/types/EventDetails';

export function createEvent(event: EventDetails): Operation<ApiResponse<{ data: string; error: string }>> {
  return async (dispatch) => {
    const response = await api.events.createEvent(event);
    return { ...response };
  };
}
