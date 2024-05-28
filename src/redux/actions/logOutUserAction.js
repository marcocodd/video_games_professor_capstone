export const LOGOUT_USER = "LOGOUT_USER";

export const logoutUserAction = () => {
 localStorage.removeItem("token");

 return {
  type: LOGOUT_USER,
 };
};
