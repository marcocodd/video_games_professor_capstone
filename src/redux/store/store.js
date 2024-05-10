import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import registrationReducer from "../reducers/registrationReducer";

const globalReducer = combineReducers({
 registerUser: registrationReducer,
});

const store = configureStore({
 reducer: globalReducer,
});

export default store;
