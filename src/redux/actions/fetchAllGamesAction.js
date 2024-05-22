export const FETCH_ALL_GAMES_REQUEST = "FETCH_ALL_GAMES_REQUEST";
export const FETCH_ALL_GAMES_SUCCESS = "FETCH_ALL_GAMES_SUCCESS";
export const FETCH_ALL_GAMES_FAIL = "FETCH_ALL_GAMES_FAIL";
export const RESET_GAMES = "RESET_GAMES";

export const fetchAllGamesRequest = () => ({
 type: FETCH_ALL_GAMES_REQUEST,
});

export const fetchAllGamesSuccess = (games) => ({
 type: FETCH_ALL_GAMES_SUCCESS,
 payload: games,
});

export const fetchAllGamesFail = (error) => ({
 type: FETCH_ALL_GAMES_FAIL,
 payload: error,
});

export const resetGames = () => ({
 type: RESET_GAMES,
});

export const fetchAllGames = (search, reset = false) => {
 return async (dispatch) => {
  if (reset) {
   dispatch(resetGames());
  }
  dispatch(fetchAllGamesRequest());

  try {
   let url =
    "https://api.rawg.io/api/games?page_size=32&key=35122db68a38468ababdf2d2f6dd421a";
   if (search) {
    url = `https://api.rawg.io/api/games?search=${search}&page_size=32&key=35122db68a38468ababdf2d2f6dd421a`;
   }

   const response = await fetch(url);

   if (response.ok) {
    const data = await response.json();
    const totalPages = Math.ceil(data.count / 32);
    dispatch(fetchAllGamesSuccess({ games: data.results, totalPages }));
   } else {
    throw new Error("Failed to fetch games");
   }
  } catch (error) {
   dispatch(fetchAllGamesFail(error.message));
  }
 };
};