export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";

export const registerUserFailure = (error) => ({
 type: REGISTER_USER_FAIL,
 payload: error,
});
