import {
 Button,
 Col,
 Container,
 Form,
 Nav,
 NavDropdown,
 Navbar,
 Row,
} from "react-bootstrap";
import logo from "../assets/logo.jpg";

const CustomNavBar = () => {
 return (
  <Navbar expand="lg" className="bg-navbar rounded position-sticky">
   <Container fluid>
    <Navbar.Brand href="#home">
     <img className="rounded-circle" width={50} src={logo} alt="logo image" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="m-auto">
      <Nav.Link className="me-2" href="#home">
       Reviews
      </Nav.Link>
      <Nav.Link className="me-2" href="#link">
       Games
      </Nav.Link>

      <Form className="d-flex">
       <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
       />
      </Form>
      <NavDropdown
       className="text-white"
       title="Platforms"
       id="basic-nav-dropdown"
      >
       <NavDropdown.Item href="#action/3.1">Playstation</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.2">Xbox</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.3">Nintendo Switch</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.4">Pc</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link className="me-2" href="#link">
       Store
      </Nav.Link>
     </Nav>

     <Button className="bg-transparent border-0 rounded-circle p-0">
      <img
       className="rounded-circle me-2"
       src="https://placebear.com/50/50"
       alt="Avatar"
      />
     </Button>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
};
export default CustomNavBar;
