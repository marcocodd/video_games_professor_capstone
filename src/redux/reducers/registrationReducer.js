import { REGISTER_USER } from "../actions/registerUserAction";
import { REGISTER_USER_FAIL } from "../actions/registerUserFailAction";
import { REGISTER_USER_SUCCESS } from "../actions/registerUserSuccessAction";

const initialState = {
 loading: false,
 successMessage: "",
 errorMessage: [],
};

const registrationReducer = (state = initialState, action) => {
 switch (action.type) {
  case REGISTER_USER:
   return {
    ...state,
    loading: true,
    errorMessage: null,
   };
  case REGISTER_USER_SUCCESS:
   return {
    ...state,
    loading: false,
    errorMessage: null,
    successMessage: "Account successfully created, You can now Login!",
   };
  case REGISTER_USER_FAIL:
   return {
    ...state,
    loading: false,
    errorMessage: action.payload,
    successMessage: "",
   };
  default:
   return state;
 }
};

export default registrationReducer;
