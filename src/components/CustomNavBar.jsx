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

const CustomNavBar = () => (
 <Navbar expand="lg" className="text-bg-secondary">
  <Container>
   <Navbar.Brand href="#home">
    <img className="rounded-circle" width={50} src={logo} alt="logo image" />
   </Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
   <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto">
     <Nav.Link href="#home">Reviews</Nav.Link>
     <Nav.Link href="#link">Games</Nav.Link>
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
    </Nav>
    <img
     className="rounded-circle"
     src="https://placebear.com/50/50"
     alt="Avatar"
    />
   </Navbar.Collapse>
  </Container>
 </Navbar>
);

export default CustomNavBar;
