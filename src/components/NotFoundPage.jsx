import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
 const navigate = useNavigate();

 const handleGoHome = () => {
  navigate("/");
 };

 return (
  <Container className="text-center mt-5">
   <Row>
    <Col>
     <h1 className="display-1">404</h1>
     <h2>Page Not Found</h2>
     <p className="lead">Sorry, the page you are looking for does not exist.</p>
     <Button variant="primary" onClick={handleGoHome}>
      Go to Homepage
     </Button>
    </Col>
   </Row>
  </Container>
 );
};

export default NotFoundPage;
