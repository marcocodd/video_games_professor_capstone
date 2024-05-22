import { Card, Col, Container, Placeholder, Row } from "react-bootstrap";

const PlaceHolderCards = () => (
 <Container>
  <Row>
   {[...Array(8)].map((_, i) => (
    <Col xs={12} sm={6} md={4} lg={3} key={i}>
     <Card className="cardbg  p-1 h-100">
      <Placeholder as={Card.Img} animation="wave" style={{ height: "160px" }} />
      <Card.Body className="text-secondary">
       <Placeholder as={Card.Title} animation="wave" xs={6} />
       <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
       {/* <Placeholder xs={6} /> <Placeholder xs={8} /> */}
       <Placeholder as={Card.Text} animation="wave" xs={7} />
       <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
       <Placeholder xs={6} /> <Placeholder xs={8} />
       <Placeholder as={Card.Title} animation="wave" xs={4} />
       {/* <Placeholder as={Card.Title} animation="wave" xs={4} /> */}
      </Card.Body>
     </Card>
    </Col>
   ))}
  </Row>
 </Container>
);

export default PlaceHolderCards;
