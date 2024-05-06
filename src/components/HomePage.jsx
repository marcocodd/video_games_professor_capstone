import { Col, Container, Row } from "react-bootstrap";
import LastGamesGenerator from "./LastGamesGenerator";

const HomePage = () => {
 return (
  <Container className="mt-5 text-primary text-start">
   <h2 className="text-primary">Last Games Released</h2>
   <Row className="g-3 flex-nowrap overflow-auto">
    {/* component generation cards/games */}
    <LastGamesGenerator />
   </Row>
   <Row className="mt-5">
    <Col sm={12} md={6} lg={6}>
     <h4>Last reviews</h4>
    </Col>
    <Col className="text-end" sm={12} md={6} lg={6}>
     <h4>Trending games</h4>
    </Col>
   </Row>
  </Container>
 );
};

export default HomePage;
