import {
 Button,
 Container,
 Form,
 Modal,
 Nav,
 NavDropdown,
 Navbar,
} from "react-bootstrap";
import logo from "../assets/logo.jpg";
import { useState } from "react";

const CustomNavBar = () => {
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 return (
  <>
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

      <Button
       onClick={handleShow}
       className="bg-transparent border-0 rounded-circle p-0"
      >
       <img
        className="rounded-circle me-2"
        src="https://placebear.com/50/50"
        alt="Avatar"
       />
      </Button>
     </Navbar.Collapse>
    </Container>
   </Navbar>

   {/* MODAL LOGIN */}

   <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
     <Modal.Title>Login</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       <Form.Label>Email address</Form.Label>
       <Form.Control type="email" placeholder="name@example.com" autoFocus />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       <Form.Label>Password</Form.Label>
       <Form.Control
        type="password"
        placeholder="write your password here"
        autoFocus
       />
      </Form.Group>
     </Form>
    </Modal.Body>
    <Modal.Footer>
     <Button variant="secondary" onClick={handleClose}>
      Close
     </Button>
     <Button variant="primary" onClick={handleClose}>
      Save Changes
     </Button>
    </Modal.Footer>
   </Modal>
  </>
 );
};
export default CustomNavBar;
