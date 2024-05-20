import React, { useEffect, useState } from "react";
import {
 Button,
 Card,
 Col,
 Container,
 Form,
 FormControl,
 Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGames } from "../redux/actions/fetchAllGamesAction";
import { Link } from "react-router-dom";

const GamesPage = () => {
 const [searchQuery, setSearchQuery] = useState("");

 const allGames = useSelector((state) => state.allgames);
 const dispatch = useDispatch();

 const handleSearchChange = (event) => {
  setSearchQuery(event.target.value);
 };

 const handleSearchSubmit = (event) => {
  event.preventDefault();
 };

 useEffect(() => {
  dispatch(fetchAllGames(1));
 }, []);

 return (
  <Container className="mt-5 mb-5">
   <Row>
    <Col sm={12} className="d-flex justify-content-around">
     <Form onSubmit={handleSearchSubmit}>
      <FormControl
       type="search"
       placeholder="Search"
       className="mb-4"
       aria-label="Search"
       value={searchQuery}
       onChange={handleSearchChange}
      />
      <Button variant="primary" type="submit">
       Search
      </Button>
     </Form>
    </Col>
   </Row>
   <Row className="g-3 mt-5">
    {allGames.allGames.map((game, index) => (
     <Col xs={12} sm={6} md={4} lg={3} key={index}>
      <Card className="cardbg card-shadow-focus p-1 h-100 d-flex flex-column justify-content-between">
       <Link to={`/game/${game.id}`}>
        <Card.Img
         width={250}
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
   </Row>
   {allGames.loading && <p>Caricamento...</p>}
  </Container>
 );
};

export default GamesPage;
