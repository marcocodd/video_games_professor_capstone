export const FETCH_USER_PROFILE = "FETCH_USER_PROFILE";
export const FETCH_USER_PROFILE_SUCCESS = "FETCH_USER_PROFILE_SUCCESS";
export const FETCH_USER_PROFILE_FAILURE = "FETCH_USER_PROFILE_FAILURE";

export const fetchUserProfile = () => async (dispatch) => {
 try {
  const response = await fetch("http://localhost:3001/users/me", {
   headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
   },
  });

  if (response.ok) {
   const data = await response.json();
   dispatch({ type: FETCH_USER_PROFILE_SUCCESS, payload: data });
  } else {
   console.log(response.status);
  }
 } catch (error) {
  dispatch({ type: FETCH_USER_PROFILE_FAILURE, payload: error.message });
 }
};
