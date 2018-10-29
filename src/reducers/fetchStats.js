import { RECEIVE_STATS, REQUEST_STATS } from '../constants';

export const stats = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_STATS:
      return action.payload;
    default:
      return state;
  }
};
