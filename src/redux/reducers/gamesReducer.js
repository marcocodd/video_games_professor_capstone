import {
 FETCH_LAST_GAMES_FAIL,
 FETCH_LAST_GAMES_REQUEST,
 FETCH_LAST_GAMES_SUCCESS,
} from "../actions/fetchLastGamesAction";

const initialState = {
 lastGames: [],
 loading: false,
 error: null,
};

const gamesReducer = (state = initialState, action) => {
 switch (action.type) {
  case FETCH_LAST_GAMES_REQUEST:
   return { ...state, loading: true, error: null };
  case FETCH_LAST_GAMES_SUCCESS:
   return { ...state, loading: false, lastGames: action.payload };
  case FETCH_LAST_GAMES_FAIL:
   return { ...state, loading: false, error: action.payload };
  default:
   return state;
 }
};

export default gamesReducer;
