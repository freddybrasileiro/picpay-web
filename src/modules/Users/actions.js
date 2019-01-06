import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  HIDE_LOADER,
  SHOW_LOADER
} from "./constants";

export function getUsers() {
  return {
    type: GET_USERS
  };
}

export function getUsersSuccess(payload) {
  return {
    type: GET_USERS_SUCCESS,
    payload
  };
}

export function getUsersError() {
  return {
    type: GET_USERS_ERROR
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  };
}
