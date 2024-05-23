import { useEffect, useState } from "react";
import { Card, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGames } from "../redux/actions/fetchAllGamesAction";
import { Link } from "react-router-dom";
import PlaceHolderCards from "./PlaceHolderCards";

const GamesPage = () => {
 const [searchQuery, setSearchQuery] = useState("");
 const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

 const allGames = useSelector((state) => state.allgames);
 const dispatch = useDispatch();

 const handleSearchChange = (event) => {
  setSearchQuery(event.target.value);
 };

 const handleSearchSubmit = (event) => {
  event.preventDefault();
 };

 useEffect(() => {
  const handler = setTimeout(() => {
   setDebouncedQuery(searchQuery);
  }, 500);

  return () => {
   clearTimeout(handler);
  };
 }, [searchQuery]);

 useEffect(() => {
  if (debouncedQuery) {
   dispatch(fetchAllGames(searchQuery, true));
  } else {
   dispatch(fetchAllGames("", true));
  }
 }, [debouncedQuery]);

 //  if (allGames.loading) return <PlaceHolderCards />;

 return (
  <Container className="mt-5 mb-5">
   <Row>
    <Col sm={12}>
     <Form onSubmit={handleSearchSubmit}>
      <FormControl
       type="search"
       placeholder="Search"
       className="mb-4"
       aria-label="Search"
       value={searchQuery}
       onChange={handleSearchChange}
      />
     </Form>
    </Col>
   </Row>
   {allGames.loading && <PlaceHolderCards />}
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
       <Card.Body>
        <Card.Title>Title: {game.name}</Card.Title>
        <Card.Text className="fs-6 text-color">
         Released: {game.released}
        </Card.Text>
       </Card.Body>
      </Card>
     </Col>
    ))}
   </Row>
  </Container>
 );
};

export default GamesPage;
