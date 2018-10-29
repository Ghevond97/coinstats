import { REQUEST_STATS, RECEIVE_STATS } from '../constants';

const requestStats = () => {
  return {
    type: REQUEST_STATS
  };
};

const receivedStats = json => {
  return {
    type: RECEIVE_STATS,
    payload: json
  };
};

export const getStats = () => {
  return dispatch => {
    dispatch(requestStats());
    return fetch(`https://api.coinmarketcap.com/v2/ticker/`)
      .then(response => response.json())
      .then(json => dispatch(receivedStats(json.data)))
      .catch(e => {
        console.log(e);
      });
  };
};
