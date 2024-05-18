import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";

const GameDetail = () => {
 const { id } = useParams();
 const [game, setGame] = useState(null);
 const [loadingGame, setLoadingGame] = useState(true);
 const [errorGame, setErrorGame] = useState(null);
 const [gameTrailer, setGameTrailer] = useState(null);
 const [loadingTrailer, setLoadingTrailer] = useState(true);
 const [errorTrailer, setErrorTrailer] = useState(null);

 useEffect(() => {
  const fetchGameDetails = async () => {
   try {
    const response = await fetch(
     `https://api.rawg.io/api/games/${id}?key=35122db68a38468ababdf2d2f6dd421a`
    );

    if (response.ok) {
     const data = await response.json();
     setGame(data);
    } else {
     throw new Error("Failed to fetch game details");
    }
   } catch (error) {
    setErrorGame(error.message);
   } finally {
    setLoadingGame(false);
   }
  };

  fetchGameDetails();
 }, [id]);

 useEffect(() => {
  const fetchGameTrailer = async () => {
   try {
    const response = await fetch(
     `https://api.rawg.io/api/games/${id}/movies?key=35122db68a38468ababdf2d2f6dd421a`
    );

    if (response.ok) {
     const data = await response.json();
     setGameTrailer(data.results[0]);
    } else {
     throw new Error("Failed to fetch game trailer");
    }
   } catch (error) {
    setErrorTrailer(error.message);
   } finally {
    setLoadingTrailer(false);
   }
  };

  fetchGameTrailer();
 }, [id]);

 if (loadingGame || loadingTrailer) return <Spinner animation="border" />;

 if (errorGame) return <p>Error fetching game details: {errorGame}</p>;

 if (errorTrailer) return <p>Error fetching game trailer: {errorTrailer}</p>;

 return (
  <Container>
   <Row>
    <Col>
     <Card className="my-3 cardbg">
      <Card.Img variant="top" src={game.background_image} />
      <Card.Body>
       <Card.Title>{game.name}</Card.Title>
       <Card.Text>{game.description_raw}</Card.Text>
       <Card.Text>Released: {game.released}</Card.Text>
       <Card.Text>Rating: {game.rating}</Card.Text>
      </Card.Body>
     </Card>
    </Col>
    <Col>
     {gameTrailer && (
      <div className="my-3">
       <h5>Trailer</h5>
       <video width="100%" controls className="rounded">
        <source src={gameTrailer.data.max} type="video/mp4" />
        Your browser does not support the video tag.
       </video>
      </div>
     )}
    </Col>
   </Row>
  </Container>
 );
};

export default GameDetail;
