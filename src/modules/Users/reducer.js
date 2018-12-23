import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  HIDE_LOADER,
  SHOW_LOADER
} from "./constants";

export const usersInitialState = {};

function signinReducer(state = usersInitialState, { type, payload }) {
  switch (type) {
    case GET_USERS:
      return { ...state, data: {} };
    case GET_USERS_SUCCESS:
      return { ...state, data: payload };
    case GET_USERS_ERROR:
      return { ...state, error: payload };
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export default signinReducer;
