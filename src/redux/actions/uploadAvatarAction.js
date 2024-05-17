export const UPLOAD_AVATAR_SUCCESS = "UPLOAD_AVATAR_SUCCESS";
export const UPLOAD_AVATAR_FAIL = "UPLOAD_AVATAR_FAIL";

export const uploadAvatar = (image, userId) => {
 return async (dispatch) => {
  if (image) {
   const formData = new FormData();
   formData.append("avatar", image);

   try {
    const response = await fetch(
     `http://localhost:3001/users/${userId}/avatar`,
     {
      method: "POST",
      headers: {
       Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
     }
    );

    if (response.ok) {
     console.log("Immagine caricata con successo", response.status);
     const imageUrl = await response.json();
     dispatch({
      type: UPLOAD_AVATAR_SUCCESS,
      payload: imageUrl,
     });
    } else {
     console.error(
      "Errore durante il caricamento dell'immagine:",
      response.status
     );
    }
   } catch (error) {
    console.error("Errore durante il caricamento dell'immagine:", error);
    dispatch({
     type: UPLOAD_AVATAR_FAIL,
     payload: error.message,
    });
   }
  }
 };
};
