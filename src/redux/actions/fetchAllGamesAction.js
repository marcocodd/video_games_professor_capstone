export const FETCH_ALL_GAMES_REQUEST = "FETCH_ALL_GAMES_REQUEST";
export const FETCH_ALL_GAMES_SUCCESS = "FETCH_ALL_GAMES_SUCCESS";
export const FETCH_ALL_GAMES_FAIL = "FETCH_ALL_GAMES_FAIL";

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

export const fetchAllGames = (page) => {
 return async (dispatch) => {
  dispatch(fetchAllGamesRequest());

  try {
   const response = await fetch(
    `https://api.rawg.io/api/games?page_size=32&page=${page}&key=35122db68a38468ababdf2d2f6dd421a`
   );

   if (response.ok) {
    const data = await response.json();
    const totalPages = Math.ceil(data.count / 30); // 25 è la dimensione della pagina
    dispatch(fetchAllGamesSuccess({ games: data.results, totalPages }));
   } else {
    throw new Error("Failed to fetch games");
   }
  } catch (error) {
   dispatch(fetchAllGamesFail(error.message));
  }
 };
};
