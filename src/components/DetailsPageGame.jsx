import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Placeholder } from "react-bootstrap";

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

 if (errorGame) return <p>Error fetching game details: {errorGame}</p>;

 if (errorTrailer) return <p>Error fetching game trailer: {errorTrailer}</p>;

 return (
  <Container className="mt-5 mb-5">
   <Row>
    <Col xs={12} md={12} lg={6}>
     <Card className="my-3 cardbg">
      {loadingGame ? (
       <Placeholder as={Card.Img} animation="wave" />
      ) : (
       <Card.Img variant="top" src={game.background_image} />
      )}
      <Card.Body>
       {loadingGame ? (
        <>
         <Placeholder as={Card.Title} animation="wave">
          <Placeholder xs={6} />
         </Placeholder>
         <Placeholder as={Card.Text} animation="wave">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={6} /> <Placeholder xs={8} />
         </Placeholder>
         <Placeholder as={Card.Text} animation="wave">
          <Placeholder xs={4} />
         </Placeholder>
         <Placeholder as={Card.Text} animation="wave">
          <Placeholder xs={4} />
         </Placeholder>
        </>
       ) : (
        <>
         <Card.Title>{game.name}</Card.Title>
         <Card.Text>{game.description_raw}</Card.Text>
         <Card.Text>Released: {game.released}</Card.Text>
         <Card.Text>Rating: {game.rating}</Card.Text>
        </>
       )}
      </Card.Body>
     </Card>
    </Col>
    <Col xs={12} md={12} lg={6}>
     {loadingTrailer ? (
      <>
       <h5>Trailer</h5>
       <Placeholder as="video" animation="wave" className="w-100 rounded" />
      </>
     ) : (
      gameTrailer && (
       <div>
        <h5 className="text-primary">Trailer</h5>
        <video width="100%" controls className="rounded">
         <source src={gameTrailer.data.max} type="video/mp4" />
         Your browser does not support the video tag.
        </video>
       </div>
      )
     )}
    </Col>
   </Row>
  </Container>
 );
};

export default GameDetail;
