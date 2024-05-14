import { registerUserFail } from "./registerUserFailAction";
import { registerUserSuccess } from "./registerUserSuccessAction";

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
    const errorMessage = await response.text();
    dispatch(registerUserFail(errorMessage));
    console.error("Failed to create account:", response.status);
   }
  } catch (error) {
   console.error("Error create account:", error);
  }
 };
};
