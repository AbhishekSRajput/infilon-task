import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  DELETE_USER,
  UPDATE_USER,
  USER_INFO,
} from "./userType";

const initialState = {
  loading: false,
  user: [],
  error: "",
  singleUser: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        user: action.payload.data,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    case DELETE_USER:
      console.log(state);
      return {
        ...state,
        user: state.user.filter(
          (singleUser) => singleUser.id !== action.payload
        ),
      };
    case USER_INFO:
      return {
        ...state,
        singleUser: state.user.find((data) => data.id === action.payload),
      };
    case UPDATE_USER:
      console.log(state.singleUser);
      return {
        ...state,
        user: state.user.map((data) =>
          data.id === action.payload.id ? action.payload : data
        ),
      };
    default:
      return state;
  }
};

export default userReducer;
