import { registerUserFailure } from "./registerUserFailAction";
import { registerUserSuccess } from "./registerUserSuccessAction";

export const REGISTER_USER = "REGISTER_USER";

export const registerUserAction = (registrationData) => {
 return async (dispatch) => {
  try {
   const response = await fetch("http://localhost:3001/auth/register", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify(registrationData),
   });
   if (response.ok) {
    dispatch(registerUserSuccess());
    console.log("Account created");
   } else {
    const error = await response.json();
    dispatch(registerUserFailure(error));
    console.error("Failed to create account:", response.status);
   }
  } catch (error) {
   console.error("Error create account:", error);
  }
 };
};
