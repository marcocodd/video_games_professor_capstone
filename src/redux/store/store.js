import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import registrationReducer from "../reducers/registrationReducer";
import loginReducer from "../reducers/loginReducer";

const globalReducer = combineReducers({
 registerUser: registrationReducer,
 loggedUser: loginReducer,
});

const store = configureStore({
 reducer: globalReducer,
});

export default store;
