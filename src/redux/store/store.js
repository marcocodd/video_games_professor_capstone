import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import registrationReducer from "../reducers/registrationReducer";
import loginReducer from "../reducers/loginReducer";
import gamesReducer from "../reducers/gamesReducer";

const globalReducer = combineReducers({
 registerUser: registrationReducer,
 loggedUser: loginReducer,
 games: gamesReducer,
});

const store = configureStore({
 reducer: globalReducer,
});

export default store;
