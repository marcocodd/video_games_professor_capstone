import { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TrendingGames = () => {
 const [trendingGamesArray, setTrendingGamesArray] = useState([]);
 const [scrollPositionTrending, setScrollPositionTrending] = useState(0);

 const handleScrollLeft = (containerId) => {
  const container = document.getElementById(containerId);
  if (container) {
   const newScrollPosition = container.scrollLeft - 200; // regola la quantità di scorrimento
   container.scrollTo({ left: newScrollPosition, behavior: "smooth" });
   setScrollPositionTrending(newScrollPosition);
  }
 };

 const handleScrollRight = (containerId) => {
  const container = document.getElementById(containerId);
  if (container) {
   const newScrollPosition = container.scrollLeft + 200; // regola la quantità di scorrimento
   container.scrollTo({ left: newScrollPosition, behavior: "smooth" });
   setScrollPositionTrending(newScrollPosition);
  }
 };

 useEffect(() => {
  const fetchTrendingGames = async () => {
   const apiKey = "35122db68a38468ababdf2d2f6dd421a";
   const currentDate = new Date();
   const endDate = currentDate.toISOString().split("T")[0];
   currentDate.setDate(currentDate.getDate() - 10);
   const startDate = currentDate.toISOString().split("T")[0];

   const url = `https://api.rawg.io/api/games?key=${apiKey}&dates=${startDate},${endDate}&stores=1`;

   try {
    const response = await fetch(url);

    if (response.ok) {
     const data = await response.json();
     setTrendingGamesArray(data.results);
     console.log(data);
    } else {
     console.log("Errore", response.status);
    }
   } catch (error) {
    console.log("Error", error);
   }
  };

  fetchTrendingGames();
 }, []);

 const splitGamesIntoRows = (games, rowSize) => {
  const rows = [];
  for (let i = 0; i < games.length; i += rowSize) {
   rows.push(games.slice(i, i + rowSize));
  }
  return rows;
 };

 const rowsOfGames = splitGamesIntoRows(trendingGamesArray, 5);

 return (
  <>
   {rowsOfGames.map((row, rowIndex) => (
    <div key={rowIndex} className="position-relative">
     <Row
      id={`trendingGamesContainer${rowIndex + 1}`}
      className="g-3 overflow-auto flex-nowrap mb-5 remove-scrollbar"
     >
      {row.map((game) => (
       <Col key={game.id}>
        <Card
         style={{ width: "10rem" }}
         className="cardbg card-shadow-focus p-1 h-100 d-flex flex-column justify-content-between"
        >
         <Link to={`/game/${game.id}`}>
          <Card.Img variant="top" src={game.background_image} alt={game.name} />
         </Link>
         <Card.Body>
          <Card.Title className="fs-6">{game.name}</Card.Title>
         </Card.Body>
        </Card>
       </Col>
      ))}
     </Row>
     <Button
      className="position-absolute start-0 top-50 translate-middle rounded-4 custom-opacity d-none d-md-block d-lg-block d-xl-block"
      onClick={() => handleScrollLeft(`trendingGamesContainer${rowIndex + 1}`)}
     >
      &lt;
     </Button>
     <Button
      className="position-absolute top-50 start-100 translate-middle rounded-4 custom-opacity d-none d-md-block d-lg-block d-xl-block"
      onClick={() => handleScrollRight(`trendingGamesContainer${rowIndex + 1}`)}
     >
      &gt;
     </Button>
    </div>
   ))}
  </>
 );
};

export default TrendingGames;
