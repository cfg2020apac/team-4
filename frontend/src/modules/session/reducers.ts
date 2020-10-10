import produce from 'immer';
import * as types from './types';

const initialState: types.SessionState = {
  user: localStorage.getItem('username')
    ? {
        name: localStorage.getItem('username'),
        profile: localStorage.getItem('profile'),
        fullname: localStorage.getItem('fullname'),
        date_of_birth: localStorage.getItem('date_of_birth'),
        gender: localStorage.getItem('gender'),
        race: localStorage.getItem('race'),
        nationality: localStorage.getItem('nationality'),
        address_streetname: localStorage.getItem('address_streetname'),
        address_postal_code: localStorage.getItem('address_postal_code'),
        address_unit_number: localStorage.getItem('address_unit_number'),
        spoken_languages: localStorage.getItem('spoken_languages'),
        written_languages: localStorage.getItem('written_languages'),
        interests: localStorage.getItem('interests'),
        help: localStorage.getItem('help'),
        current_occupation: localStorage.getItem('current_occupation')
      }
    : null
};

const sessionReducer = produce((draft: types.SessionState, action: types.SessionActionTypes) => {
  switch (action.type) {
    case types.SET_CURRENT_USER: {
      draft.user = action.user;
      return;
    }
  }
}, initialState);

export default sessionReducer;
