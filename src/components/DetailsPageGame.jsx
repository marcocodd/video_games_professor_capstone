import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
 Container,
 Row,
 Col,
 Card,
 Placeholder,
 Button,
 Accordion,
 CardFooter,
} from "react-bootstrap";
import AddReview from "./AddReview";

const GameDetail = () => {
 const { id } = useParams();
 const [game, setGame] = useState(null);
 const [gameTitle, setGameTitle] = useState("");
 const [loadingGame, setLoadingGame] = useState(true);
 const [errorGame, setErrorGame] = useState(null);
 const [gameTrailer, setGameTrailer] = useState(null);
 const [loadingTrailer, setLoadingTrailer] = useState(true);
 const [errorTrailer, setErrorTrailer] = useState(null);
 const [gameAchievements, setGameAchievements] = useState([]);
 const [gameStores, setGameStores] = useState();

 const [showAddReviewModal, setShowAddReviewModal] = useState(false);

 const storeDetails = {
  1: { name: "Steam", logo: "/public/assets/steam.png" },
  2: { name: "Xbox", logo: "/public/assets/xbox.jpg" },
  3: { name: "Playstation", logo: "/public/assets/playstation.jpg" },
  4: { name: "App store", logo: "/public/assets/apple.png" },
  5: { name: "GOG", logo: "/public/assets/gog.jpg" },
  6: { name: "Nintendo", logo: "/public/assets/nintendo.png" },
  7: { name: "Microsoft", logo: "/public/assets/microsoft.jpg" },
  8: { name: "Google play", logo: "/public/assets/googleplay.png" },
  11: { name: "Epic Games", logo: "/public/assets/epic.png" },
 };

 const handleShowAddReviewModal = () => {
  setShowAddReviewModal(true);
 };

 useEffect(() => {
  const fetchGameDetails = async () => {
   try {
    const response = await fetch(
     `https://api.rawg.io/api/games/${id}?key=35122db68a38468ababdf2d2f6dd421a`
    );

    if (response.ok) {
     const data = await response.json();
     setGame(data);
     setGameTitle(data.name);
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

 useEffect(() => {
  const fetchGameAchievements = async () => {
   try {
    const response = await fetch(
     `https://api.rawg.io/api/games/${id}/achievements?key=35122db68a38468ababdf2d2f6dd421a`
    );

    if (response.ok) {
     const data = await response.json();
     setGameAchievements(data.results);
    } else {
     throw new Error("Failed to fetch game details");
    }
   } catch (error) {
    setErrorGame(error.message);
   } finally {
    setLoadingGame(false);
   }
  };

  fetchGameAchievements();
 }, [id]);

 useEffect(() => {
  const fetchGameStores = async () => {
   try {
    const response = await fetch(
     `https://api.rawg.io/api/games/${id}/stores?key=35122db68a38468ababdf2d2f6dd421a`
    );

    if (response.ok) {
     const data = await response.json();
     setGameStores(data.results);
    } else {
     throw new Error("Failed to fetch game details");
    }
   } catch (error) {
    setErrorGame(error.message);
   } finally {
    setLoadingGame(false);
   }
  };

  fetchGameStores();
 }, [id]);

 return (
  <Container className="mt-5 mb-5">
   <Row className="mb-3">
    <Col xs={12} md={12} lg={6}>
     <Card className="my-3 cardbg">
      {loadingGame ? (
       <Placeholder as={Card.Img} animation="wave" />
      ) : (
       game && <Card.Img variant="top" src={game.background_image} />
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
        game && (
         <>
          <Card.Title>{game.name}</Card.Title>
          <Card.Text>{game.description_raw}</Card.Text>
          <Card.Text>Released: {game.released}</Card.Text>
          <Card.Text>Rating: {game.rating}</Card.Text>
          <Card.Text>
           Genre: {game.genres.map((genre) => genre.name).join(", ")}
          </Card.Text>
         </>
        )
       )}
      </Card.Body>
      <CardFooter>
       <Button className="me-2 mb-3" onClick={handleShowAddReviewModal}>
        Add Review
       </Button>
       {gameStores && gameStores.length > 0 && (
        <>
         <p>Buy on</p>
         {gameStores.map((store) => (
          <a
           key={store.id}
           href={store.url}
           target="_blank"
           rel="noopener noreferrer"
          >
           <img
            width={80}
            height={45}
            src={storeDetails[store.store_id].logo}
            alt={storeDetails[store.store_id].name}
            className="me-2 rounded-5 mb-2"
           />
          </a>
         ))}
        </>
       )}

       <AddReview
        gameId={id}
        gameTitle={gameTitle}
        show={showAddReviewModal}
        handleClose={() => setShowAddReviewModal(false)}
       />
      </CardFooter>
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
     <h4 className="mt-3 mb-3">Achievements in the game</h4>
     <Row className="g-2">
      {gameAchievements && gameAchievements.length > 0 ? (
       gameAchievements.map((achievement) => (
        <Col xs={12} sm={6} md={4} lg={4} key={achievement.id}>
         <Card className="p-0 cardbg h-100">
          <Card.Img variant="top" src={achievement.image} />
          <Card.Body>
           <Accordion>
            <Accordion.Item eventKey="0">
             <Accordion.Header>{achievement.name}</Accordion.Header>
             <Accordion.Body>
              <Card.Text>{achievement.description}</Card.Text>
             </Accordion.Body>
            </Accordion.Item>
           </Accordion>
          </Card.Body>
         </Card>
        </Col>
       ))
      ) : (
       <p>Sorry, there are no achievements available at the moment.</p>
      )}
     </Row>
     {/* </Row> */}
    </Col>
   </Row>
  </Container>
 );
};

export default GameDetail;
