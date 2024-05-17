import {
 FETCH_USER_PROFILE,
 FETCH_USER_PROFILE_FAILURE,
 FETCH_USER_PROFILE_SUCCESS,
} from "../actions/fetchUserProfileAction";
import { LOGOUT_USER } from "../actions/logOutUserAction";
import { LOGIN_USER_FAIL } from "../actions/loginUserFailAction";
import { LOGIN_USER_SUCCESS } from "../actions/loginUserSuccessAction";
import {
 UPLOAD_AVATAR_FAIL,
 UPLOAD_AVATAR_SUCCESS,
} from "../actions/uploadAvatarAction";
// import { UPDATE_LOGIN_USER_DATA } from "../actions/loginUserUpdateData";

const initialState = {
 profile: {
  id: "",
  username: "",
  avatar: "",
  reviews: "",
 },
 loading: false,
 successMessage: "",
 isLogged: false,
 errorMessage: null,
 profileError: "",
};

const loginReducer = (state = initialState, action) => {
 switch (action.type) {
  case LOGIN_USER_SUCCESS:
   return {
    ...state,
    loading: false,
    successMessage: "Login successful",
    isLogged: true,
    errorMessage: "",
   };
  case LOGIN_USER_FAIL:
   return {
    ...state,
    errorMessage: action.payload,
   };
  case FETCH_USER_PROFILE:
   return { ...state, profileError: null };
  case FETCH_USER_PROFILE_SUCCESS:
   return { ...state, profile: action.payload, profileError: null };
  case FETCH_USER_PROFILE_FAILURE:
   return { ...state, profileError: action.error };
  case LOGOUT_USER:
   return {
    ...state,
    loading: false,
    successMessage: "Logout successful",
   };
  case UPLOAD_AVATAR_SUCCESS:
   return {
    ...state,
    profile: {
     ...state.profile,
     avatar: action.payload, // Aggiorna l'avatar con l'URL dell'immagine caricata
    },
   };
  case UPLOAD_AVATAR_FAIL:
   return {
    ...state,
    errorMessage: action.payload,
   };
  default:
   return state;
 }
};

export default loginReducer;
