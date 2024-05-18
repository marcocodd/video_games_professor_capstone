export const FETCH_LAST_GAMES_REQUEST = "FETCH_LAST_GAMES_REQUEST";
export const FETCH_LAST_GAMES_SUCCESS = "FETCH_LAST_GAMES_SUCCESS";
export const FETCH_LAST_GAMES_FAIL = "FETCH_LAST_GAMES_FAIL";

export const fetchLastGamesRequest = () => ({
 type: FETCH_LAST_GAMES_REQUEST,
});

export const fetchLastGamesSuccess = (games) => ({
 type: FETCH_LAST_GAMES_SUCCESS,
 payload: games,
});

export const fetchLastGamesFail = (error) => ({
 type: FETCH_LAST_GAMES_FAIL,
 payload: error,
});

export const fetchLastGames = () => {
 return async (dispatch) => {
  dispatch(fetchLastGamesRequest());

  const currentDate = new Date();
  const endDate = currentDate.toISOString().split("T")[0];
  currentDate.setDate(currentDate.getDate() - 30);
  const startDate = currentDate.toISOString().split("T")[0];

  try {
   const response = await fetch(
    `https://api.rawg.io/api/games?key=35122db68a38468ababdf2d2f6dd421a&dates=${startDate},${endDate}`
   );

   if (response.ok) {
    const data = await response.json();
    dispatch(fetchLastGamesSuccess(data.results));
   } else {
    throw new Error("Failed to fetch games");
   }
  } catch (error) {
   dispatch(fetchLastGamesFail(error.message));
  }
 };
};
