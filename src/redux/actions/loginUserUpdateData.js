export const UPDATE_LOGIN_USER_DATA = "UPDATE_LOGIN_USER_DATA";

export const updateLoginUserData = (name, value) => ({
 type: UPDATE_LOGIN_USER_DATA,
 payload: { name, value },
});
