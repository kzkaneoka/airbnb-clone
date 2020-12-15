import React, { useReducer } from 'react';
import axios from 'axios';
import AirbnbContext from './airbnbContext';
import AirbnbReducer from './airbnbReducer';
import { GET_AIRBNBS } from '../types';

const AirbnbState = (props) => {
  const initialState = {
    airbnbs: [],
  };

  const [state, dispatch] = useReducer(AirbnbReducer, initialState);

  const getAirbnbs = async () => {
    const res = await axios.get('http://167.99.238.188/listing/2');
    dispatch({
      type: GET_AIRBNBS,
      payload: res.data,
    });
  };

  return (
    <AirbnbContext.Provider
      value={{
        airbnbs: state.airbnbs,
        getAirbnbs,
      }}
    >
      {props.children}
    </AirbnbContext.Provider>
  );
};

export default AirbnbState;
