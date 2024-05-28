import { Button, Col, Container, Row } from "react-bootstrap";
import LastGamesGenerator from "./LastGamesGenerator";
import { useState } from "react";
import LastReviews from "./LastReviews";
import TrendingGames from "./TrendingGames";

const HomePage = () => {
 const [scrollPosition, setScrollPosition] = useState(0);

 const handleScrollLeft = () => {
  const container = document.getElementById("lastGamesContainer");
  if (container) {
   const newScrollPosition = container.scrollLeft - 400; // regola la quantità di scorrimento
   container.scrollTo({ left: newScrollPosition, behavior: "smooth" });
   setScrollPosition(newScrollPosition);
  }
 };

 const handleScrollRight = () => {
  const container = document.getElementById("lastGamesContainer");
  if (container) {
   const newScrollPosition = container.scrollLeft + 400; // regola la quantità di scorrimento
   container.scrollTo({ left: newScrollPosition, behavior: "smooth" });
   setScrollPosition(newScrollPosition);
  }
 };
 return (
  <Container className="mt-5 text-primary text-start">
   <h2 className="text-primary">Last Games Released</h2>
   <div className="position-relative">
    <Row
     className="g-3 flex-nowrap overflow-auto remove-scrollbar"
     id="lastGamesContainer"
    >
     {/* component generation cards/games */}
     <LastGamesGenerator />
    </Row>
    <Button
     className="position-absolute start-0 top-50 translate-middle rounded-4 custom-opacity d-none d-md-block d-lg-block d-xl-block"
     onClick={handleScrollLeft}
    >
     &lt;
    </Button>
    <Button
     className="position-absolute top-50 start-100 translate-middle rounded-4 custom-opacity d-none d-md-block d-lg-block d-xl-block"
     onClick={handleScrollRight}
    >
     &gt;
    </Button>
   </div>
   <Row className="mt-5 g-5 mb-5">
    <Col sm={12} md={6} lg={6} className="text-white">
     <h4>Lastest reviews</h4>
     <LastReviews />
    </Col>
    <Col className="text-end" sm={12} md={6} lg={6}>
     <h4>Trending games</h4>
     <TrendingGames />
    </Col>
   </Row>
  </Container>
 );
};

export default HomePage;
