export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

export const loginUserFail = (error) => ({
 type: LOGIN_USER_FAIL,
 payload: error,
});
