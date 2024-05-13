import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
 return (
  <footer className="text-white">
   <Container className="py-4">
    <Row>
     <Col md={6}>
      <h6>About Us</h6>
      <p className="fs-6">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
       scelerisque libero.
      </p>
     </Col>
     <Col md={3}>
      <h6>Links</h6>
      <ul className="list-unstyled">
       <li>
        <a className="text-light" href="#!">
         Home
        </a>
       </li>
       <li>
        <a className="text-light" href="#!">
         About
        </a>
       </li>
       <li>
        <a className="text-light" href="#!">
         Services
        </a>
       </li>
       <li>
        <a className="text-light" href="#!">
         Contact
        </a>
       </li>
      </ul>
     </Col>
     <Col md={3}>
      <h6>Contact Us</h6>
      <ul className="list-unstyled">
       <li>working</li>
       <li>working</li>
       <li>working</li>
       <li>working</li>
      </ul>
     </Col>
    </Row>
   </Container>
   <div className="text-center py-3 bg-secondary">
    <Container>
     <p>&copy; {new Date().getFullYear()} VgProfessor</p>
     <span>All video games data source by: https://rawg.io/</span>
    </Container>
   </div>
  </footer>
 );
};

export default Footer;
