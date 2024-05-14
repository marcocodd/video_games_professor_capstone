import { LOGOUT_USER } from "../actions/logOutUserAction";
import { LOGIN_USER_FAIL } from "../actions/loginUserFailAction";
import { LOGIN_USER_SUCCESS } from "../actions/loginUserSuccessAction";
import { UPDATE_LOGIN_USER_DATA } from "../actions/loginUserUpdateData";

const initialState = {
 loginData: { email: "", password: "" },
 token: null,
 loading: false,
 successMessage: "",
 isLogged: false,
 errorMessage: null,
};

const loginReducer = (state = initialState, action) => {
 switch (action.type) {
  case LOGIN_USER_SUCCESS:
   return {
    ...state,
    token: action.payload,
    loading: false,
    successMessage: "Login successful",
    isLogged: true,
    errorMessage: "", // Reset error messages on success
   };
  case UPDATE_LOGIN_USER_DATA:
   return {
    ...state,
    loginData: {
     ...state.loginData,
     [action.payload.name]: action.payload.value,
    },
   };
  case LOGIN_USER_FAIL:
   return {
    ...state,
    token: null,
    errorMessage: action.payload,
   };
  case LOGOUT_USER:
   return {
    ...state,
    token: null,
    loading: false,
    successMessage: "Logout successful",
   };
  default:
   return state;
 }
};

export default loginReducer;
