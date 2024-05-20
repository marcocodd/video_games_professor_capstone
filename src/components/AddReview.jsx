import { useState } from "react";
import { Form, Button, Alert, Modal } from "react-bootstrap";

const AddReview = ({ gameId, gameTitle, show, handleClose }) => {
 const [content, setContent] = useState("");
 const [rating, setRating] = useState("");
 const [successMessage, setSuccessMessage] = useState("");
 const [errorMessage, setErrorMessage] = useState("");

 const handleSubmit = async (event) => {
  event.preventDefault();

  const reviewData = {
   content,
   rating,
   gameId,
   gameTitle,
  };

  try {
   const response = await fetch("http://localhost:3001/reviews", {
    method: "POST",
    headers: {
     Authorization: `Bearer ${localStorage.getItem("token")}`,
     "Content-Type": "application/json",
    },
    body: JSON.stringify(reviewData),
   });

   if (response.ok) {
    setSuccessMessage("Review added successfully!");
    setContent("");
    setRating("");
    setTimeout(() => {
     setSuccessMessage("");
    }, 2000);
   } else {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to add review");
   }
  } catch (error) {
   setErrorMessage(error.message);
   setTimeout(() => setErrorMessage(""), 3000); // Remove error message after 3 seconds
  }
 };

 return (
  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>Add a Review</Modal.Title>
   </Modal.Header>
   <Modal.Body>
    {successMessage && <Alert variant="success">{successMessage}</Alert>}
    {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
    <Form onSubmit={handleSubmit}>
     <Form.Group controlId="reviewContent">
      <Form.Label>Review</Form.Label>
      <Form.Control
       as="textarea"
       rows={3}
       placeholder="Enter your review"
       value={content}
       onChange={(e) => setContent(e.target.value)}
       required
      />
     </Form.Group>
     <Form.Group controlId="reviewRating">
      <Form.Label>Rating</Form.Label>
      <Form.Control
       type="number"
       placeholder="Enter rating"
       value={rating}
       onChange={(e) => setRating(e.target.value)}
       required
       min="1"
       max="10"
      />
     </Form.Group>
     <Button variant="primary" type="submit">
      Submit
     </Button>
    </Form>
   </Modal.Body>
  </Modal>
 );
};

export default AddReview;
