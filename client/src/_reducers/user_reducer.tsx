import {
  LOGIN_USER_FULFILLED,
  REGISTER_USER_FULFILLED,
  AUTH_USER_FULFILLED,
} from "../_action/types";
interface UserAction {
  type: String;
  payload: any;
}
const initialState = {
  loginSuccess: null,
  register: null,
  userData: { isAuth: false },
};
export default function user_reducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case LOGIN_USER_FULFILLED:
      return {
        ...state,
        loginSuccess: action.payload,
      };
    case REGISTER_USER_FULFILLED:
      return { ...state, register: action.payload };
    case AUTH_USER_FULFILLED:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}
