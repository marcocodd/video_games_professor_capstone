import { loginUserFail } from "./loginUserFailAction";
import { loginUserSuccess } from "./loginUserSuccessAction";

export const loginUserAction = (loginData) => {
 return async (dispatch) => {
  try {
   const response = await fetch("http://localhost:3001/auth/login", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
   });

   if (response.ok) {
    const data = await response.json();
    dispatch(loginUserSuccess());
    localStorage.setItem("token", data.accessToken);
   } else {
    const error = await response.text();

    dispatch(loginUserFail(error));
    console.log("errore", error);
   }
  } catch (error) {
   dispatch(loginUserFail(error));
  }
 };
};
