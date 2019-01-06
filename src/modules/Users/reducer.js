import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  HIDE_LOADER,
  SHOW_LOADER
} from "./constants";

export const usersInitialState = {
  list: [],
  loading: false,
  error: false
};

function usersReducer(state = usersInitialState, { type, payload }) {
  switch (type) {
    case GET_USERS:
      return { ...state, list: [], error: false };
    case GET_USERS_SUCCESS:
      return { ...state, list: payload, error: false };
    case GET_USERS_ERROR:
      return { ...state, list: [], error: true };
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export default usersReducer;
