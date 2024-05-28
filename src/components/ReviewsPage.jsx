import { useState } from "react";
import { Button, Card, Col, Container, Row, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const ReviewsPage = () => {
 const loginUserState = useSelector((state) => state.loggedUser);
 const reviews = loginUserState.profile.review;
 const [selectedReview, setSelectedReview] = useState(null);
 const [showDeleteModal, setShowDeleteModal] = useState(false);
 const dispatch = useDispatch();

 const handleEditReview = (reviewId) => {};

 const handleDeleteReview = (reviewId) => {
  setSelectedReview(reviewId);
  setShowDeleteModal(true);
 };

 const confirmDeleteReview = () => {
  setShowDeleteModal(false);
 };

 const cancelDeleteReview = () => {
  setSelectedReview(null);
  setShowDeleteModal(false);
 };

 return (
  <Container className="m-3">
   <h2>Reviews</h2>
   {reviews && reviews.length > 0 ? (
    <Row>
     {reviews.map((review) => (
      <Col xs={12} sm={6} md={4} lg={3} key={review.id}>
       <Card className="mb-3 cardbg">
        <Card.Body>
         <Card.Title>{review.gameTitle}</Card.Title>
         <Card.Text>{review.content}</Card.Text>
         <Button
          className="me-2"
          variant="primary"
          onClick={() => handleEditReview(review.id)}
         >
          Modify
         </Button>
         <Button variant="danger" onClick={() => handleDeleteReview(review.id)}>
          Delete
         </Button>
        </Card.Body>
       </Card>
      </Col>
     ))}
    </Row>
   ) : (
    <p className="fs-2">No reviews found, try to login if you are not.</p>
   )}
   {/* Modal di conferma eliminazione recensione */}
   <Modal show={showDeleteModal} onHide={cancelDeleteReview}>
    <Modal.Header closeButton>
     <Modal.Title></Modal.Title>
    </Modal.Header>
    <Modal.Body>Are you sure?!</Modal.Body>
    <Modal.Footer>
     <Button variant="secondary" onClick={cancelDeleteReview}>
      Confirm
     </Button>
     <Button variant="danger" onClick={confirmDeleteReview}>
      Delete
     </Button>
    </Modal.Footer>
   </Modal>
  </Container>
 );
};

export default ReviewsPage;
