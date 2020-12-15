import { GET_AIRBNBS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_AIRBNBS:
      return {
        ...state,
        airbnbs: action.payload,
      };
    default:
      return state;
  }
};
