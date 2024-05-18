import { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchLastGames } from "../redux/actions/fetchLastGamesAction";
import { Link } from "react-router-dom";

const LastGamesGenerator = () => {
 const [arrayLastGames, setArrayLastGames] = useState([]);
 const dispatch = useDispatch();
 const { lastGames, loading, error } = useSelector((state) => state.games);

 useEffect(() => {
  dispatch(fetchLastGames());
 }, [dispatch]);
 //   const fetchData = async () => {
 //    const currentDate = new Date();
 //    const endDate = currentDate.toISOString().split("T")[0];
 //    currentDate.setDate(currentDate.getDate() - 30);
 //    const startDate = currentDate.toISOString().split("T")[0];
 //    try {
 //     // Effettua la fetch per ottenere gli ultimi 30 giochi
 //     const response = await fetch(
 //      `https://api.rawg.io/api/games?key=35122db68a38468ababdf2d2f6dd421a&dates=${startDate},${endDate}`
 //     );
 //     if(response.ok){
 //     const data = await response.json();
 //     setArrayLastGames(data.results);
 //     console.log(data);
 //     }
 //    } catch (error) {
 //     console.error("Si è verificato un errore durante la fetch:", error);
 //    }
 //   };

 //   fetchData();
 //  }, []);

 return (
  <>
   {lastGames.map((game, i) => (
    <Col xs={12} sm={6} md={4} lg={3} key={i}>
     <Card className="cardbg p-1 h-100">
      <Link to={`/game/${game.id}`}>
       <Card.Img
        width={100}
        height={160}
        variant="top"
        src={game.background_image}
       />
      </Link>
      <Card.Body className="text-secondary">
       <Card.Title className="text-secondary">Title: {game.name}</Card.Title>
       <Card.Text>
        Some quick example text to build on the card title and make up the bulk
       </Card.Text>
       <Card.Title>Realeased: {game.released}</Card.Title>

       <Card.Title>User&apos;s rating: {game.rating}</Card.Title>
      </Card.Body>
     </Card>
    </Col>
   ))}
  </>
 );
};

export default LastGamesGenerator;
