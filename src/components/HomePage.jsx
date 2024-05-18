import { Button, Col, Container, Row } from "react-bootstrap";
import LastGamesGenerator from "./LastGamesGenerator";
import { useState } from "react";

const HomePage = () => {
 const [scrollLeft, setScrollLeft] = useState(0);

 const handleScrollLeft = () => {
  const container = document.getElementById("lastGamesContainer");
  if (container) {
   const newScrollLeft = container.scrollLeft - 250; // regola la quantità di scorrimento
   container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
   setScrollLeft(newScrollLeft);
  }
 };

 const handleScrollRight = () => {
  const container = document.getElementById("lastGamesContainer");
  if (container) {
   const newScrollLeft = container.scrollLeft + 250; // regola la quantità di scorrimento
   container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
   setScrollLeft(newScrollLeft);
  }
 };
 return (
  <Container className="mt-5 text-primary text-start">
   <h2 className="text-primary">Last Games Released</h2>
   <div className="position-relative">
    <Row
     className="g-3 flex-nowrap overflow-auto align-items-center"
     id="lastGamesContainer"
    >
     {/* component generation cards/games */}
     <LastGamesGenerator />
    </Row>
    <Button
     className="position-absolute start-0 top-50"
     onClick={handleScrollLeft}
    >
     &lt;
    </Button>
    <Button
     className="position-absolute end-0 top-50 translate-middle-y"
     onClick={handleScrollRight}
    >
     &gt;
    </Button>
   </div>
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
