import { useEffect } from "react";
import { Card, Col, Placeholder } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchLastGames } from "../redux/actions/fetchLastGamesAction";
import { Link } from "react-router-dom";
import PlaceHolderCards from "./PlaceHolderCards";

const LastGamesGenerator = () => {
 const dispatch = useDispatch();
 const { lastGames, loading, error } = useSelector((state) => state.lastGames);

 useEffect(() => {
  dispatch(fetchLastGames());
 }, [dispatch]);

 //  if (loading) {
 //   return (
 //    <>
 //     <PlaceHolderCards />
 //    </>
 //   );
 //  }

 if (error) {
  return <p>Error loading games: {error}</p>;
 }

 return (
  <>
   {loading && <PlaceHolderCards />}
   {lastGames &&
    lastGames.map((game, i) => (
     <Col xs={12} sm={6} md={4} lg={3} key={i}>
      <Card className="cardbg card-shadow-focus p-1 h-100 d-flex flex-column justify-content-between">
       <Link to={`/game/${game.id}`}>
        <Card.Img
         width={300}
         height={150}
         variant="top"
         src={game.background_image}
        />
       </Link>
       <Card.Body className="text-secondary">
        <Card.Title className="text-secondary">Title: {game.name}</Card.Title>
        <Card.Title className="fs-6">Released: {game.released}</Card.Title>
       </Card.Body>
      </Card>
     </Col>
    ))}
  </>
 );
};

export default LastGamesGenerator;
