import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
 return (
  <footer className="rounded-3">
   <Container className="py-4 rounded-3">
    <Row>
     <Col md={6}>
      <h6>About Us</h6>
      <p className="fs-6">
       Welcome to Video Game Professor, the ultimate destination for gamers and
       video game enthusiasts! Our mission is to create a vibrant community
       where gamers of all backgrounds can come together, share their passion,
       and discover the latest and greatest in the world of video games.
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
       <li>
        <i className="bi bi-linkedin fs-4"></i>
       </li>
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
