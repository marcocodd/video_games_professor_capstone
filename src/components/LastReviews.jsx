import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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
  <ul className="bg-tertiary rounded-3 p-2">
   {lastReviewsArray.map((review, i) => (
    <li key={i} className="review-item">
     <strong className="text-primary">{review.gameTitle}</strong>
     <p className="text-color">
      <img
       className="rounded-5 me-2"
       width={40}
       height={40}
       src={review.avatarUrl}
       alt="avatar-user"
      />
      {review.username}: {review.content}
     </p>
    </li>
   ))}
  </ul>
 );
};

export default LastReviews;
