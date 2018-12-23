import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  HIDE_LOADER,
  SHOW_LOADER
} from "./constants";

export const usersInitialState = {
  users: [],
  loading: false,
  error: false
};

function signinReducer(state = usersInitialState, { type, users }) {
  switch (type) {
    case GET_USERS:
      return { ...state, users: [], error: false };
    case GET_USERS_SUCCESS:
      return { ...state, users, error: false };
    case GET_USERS_ERROR:
      return { ...state, users: [], error: true };
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export default signinReducer;
