import { useEffect, useState } from "react";

const LastReviews = () => {
 const [lastReviewsArray, setLastReviewsArray] = useState([]);

 useEffect(() => {
  const fetchLastReviews = async () => {
   try {
    const response = await fetch(`http://localhost:3001/reviews/lastreviews`);

    if (response.ok) {
     const data = await response.json();
     setLastReviewsArray(data);
     console.log(data);
    } else {
     console.log("errore", response.status);
    }
   } catch (error) {
    console.log("error", error);
   }
  };

  fetchLastReviews();
 }, []);

 return (
  <ul className="bg-tertiary rounded-3">
   {lastReviewsArray.map((review, i) => (
    <>
     <h6 key={i}>{review.gameTitle}</h6>
     <li>
      {review.username}: {review.content}
     </li>
    </>
   ))}
  </ul>
 );
};

export default LastReviews;
