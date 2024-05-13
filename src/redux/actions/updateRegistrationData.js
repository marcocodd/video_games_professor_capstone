export const UPDATE_REGISTRATION_DATA = "UPDATE_REGISTRATION_DATA";

export const updateRegistrationData = (name, value) => ({
 type: UPDATE_REGISTRATION_DATA,
 payload: { name, value },
});
