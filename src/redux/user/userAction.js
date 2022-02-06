import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  DELETE_USER,
  UPDATE_USER,
  USER_INFO,
} from "./userType";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

export const userInfo = (id) => {
  return {
    type: USER_INFO,
    payload: id,
  };
};

export const updateUser = (userData) => {
  return {
    type: UPDATE_USER,
    payload: userData,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => {
        const users = res.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};
