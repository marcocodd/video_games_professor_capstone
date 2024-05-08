import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const globalReducer = combineReducers({});

const store = configureStore({
 reducer: globalReducer,
});

export default store;
