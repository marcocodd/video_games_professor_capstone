import { REGISTER_USER_FAIL } from "../actions/registerUserFailAction";
import { REGISTER_USER_SUCCESS } from "../actions/registerUserSuccessAction";
import { UPDATE_REGISTRATION_DATA } from "../actions/updateRegistrationData";

const initialState = {
 registrationData: { username: "", email: "", password: "" },
 loading: false,
 successMessage: "",
 errorMessage: null,
};

const registrationReducer = (state = initialState, action) => {
 switch (action.type) {
  case UPDATE_REGISTRATION_DATA:
   return {
    ...state,
    registrationData: {
     ...state.registrationData,
     [action.payload.name]: action.payload.value,
    },
   };

  case REGISTER_USER_SUCCESS:
   return {
    ...state,
    registrationData: {
     email: "",
     password: "",
    },
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
