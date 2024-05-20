import {
 FETCH_ALL_GAMES_FAIL,
 FETCH_ALL_GAMES_REQUEST,
 FETCH_ALL_GAMES_SUCCESS,
} from "../actions/fetchAllGamesAction";

const initialState = {
 allGames: [],
 loading: false,
 error: null,
};

const allGamesReducer = (state = initialState, action) => {
 switch (action.type) {
  case FETCH_ALL_GAMES_REQUEST:
   return { ...state, loading: true, error: null };
  case FETCH_ALL_GAMES_SUCCESS:
   return {
    ...state,
    loading: false,
    allGames: [...state.allGames, ...action.payload.games],
    totalPages: action.payload.totalPages,
   };
  case FETCH_ALL_GAMES_FAIL:
   return { ...state, loading: false, error: action.payload };
  default:
   return state;
 }
};

export default allGamesReducer;
