import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
  <Container className="bg-tertiary rounded-3 p-2">
   <ul className="list-unstyled">
    {lastReviewsArray.map((review, i) => (
     <li key={i} className="mb-3 p-3 border border-primary rounded">
      <Row className="align-items-center">
       <Col xs="auto">
        <img
         className="rounded-5"
         width={50}
         height={50}
         src={review.avatarUrl}
         alt="avatar-user"
        />
       </Col>
       <Col>
        <Row>
         <Col xs={12}>
          <strong className="text-primary">{review.gameTitle}</strong>
         </Col>
         <Col xs={12}>
          <span>{review.username} says:</span>
         </Col>
        </Row>
       </Col>
      </Row>
      <Row className="mt-2">
       <Col>
        <p>{review.content}</p>
        <p className="text-primary">
         Rating <span className="custom-text-color">{review.rating}</span>
        </p>
       </Col>
      </Row>
     </li>
    ))}
   </ul>
  </Container>
 );
};
export default LastReviews;
