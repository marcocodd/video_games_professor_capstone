import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import registrationReducer from "../reducers/registrationReducer";
import loginReducer from "../reducers/loginReducer";
import gamesReducer from "../reducers/gamesReducer";
import allGamesReducer from "../reducers/allGamesReducer";

const globalReducer = combineReducers({
 registerUser: registrationReducer,
 loggedUser: loginReducer,
 lastGames: gamesReducer,
 allgames: allGamesReducer,
});

const store = configureStore({
 reducer: globalReducer,
});

export default store;
