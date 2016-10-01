import { combineReducers } from 'redux';
import hostEvents from '../data/hostEvents';

import {
  REQUEST_EVENTS, ADD_EVENT
} from '../actions/index.jsx';

const hostEventsList = (state = [], action) => {
  switch (action.type) {
    case REQUEST_EVENTS:
      return state.concat(action.payload);
    case 'ADD_EVENT':
      return [...state, {
        numAttendees: action.numAttendees,
        attendeesPaid: action.attendeesPaid,
        quota: action.quota,
        price: action.price,
        eventName: action.eventName,
        eventCreateDateTime: action.eventCreateDateTime,
        eventStartDateTime: action.eventStartDateTime,
        eventEndDateTime: action.eventEndDateTime,
      }];
    default:
      return state;
  }
};

const hostEventsReducer = combineReducers({
  hostEventsList,
});

export default hostEventsReducer;
