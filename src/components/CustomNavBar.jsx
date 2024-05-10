import {
 Alert,
 Button,
 Container,
 Form,
 Modal,
 Nav,
 NavDropdown,
 Navbar,
} from "react-bootstrap";
import logo from "../assets/logo.jpg";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUserAction } from "../redux/actions/registerUserAction";

const CustomNavBar = () => {
 const [showLogin, setShowLogin] = useState(false);
 const [showRegister, setShowRegister] = useState(false);

 const handleCloseLogin = () => setShowLogin(false);
 const handleShowLogin = () => setShowLogin(true);

 const handleShowRegister = () => setShowRegister(true);
 const handleCloseRegister = () => setShowRegister(false);
 const [showAlert, setShowAlert] = useState(false);
 const [registrationData, setRegistrationData] = useState({
  username: "",
  email: "",
  password: "",
 });
 const dispatch = useDispatch();
 const registrationState = useSelector((state) => state.registerUser);
 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setRegistrationData({ ...registrationData, [name]: value });
 };

 const handleRegister = () => {
  dispatch(registerUserAction(registrationData));
 };

 useEffect(() => {
  if (registrationState.successMessage) {
   setShowAlert(true);
  }
 }, [registrationState.successMessage]);

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
       onClick={handleShowLogin}
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

   <Modal show={showLogin} onHide={handleCloseLogin}>
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
    <Modal.Footer className="justify-content-between">
     <span
      onClick={() => {
       handleCloseLogin();
       handleShowRegister();
      }}
      className="text-primary fw-bold"
     >
      Register now
     </span>
     <div>
      <Button className="me-3 " variant="secondary" onClick={handleCloseLogin}>
       Close
      </Button>
      <Button variant="primary" onClick={handleCloseLogin}>
       Login
      </Button>
     </div>
    </Modal.Footer>
   </Modal>
   {/* Ends Modal login */}

   {/* Modal Register */}
   <Modal show={showRegister} onHide={handleCloseRegister}>
    <Modal.Header closeButton>
     <Modal.Title>Create Account</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       <Form.Label>Username</Form.Label>
       <Form.Control
        type="text"
        name="username"
        placeholder="Write your username here"
        onChange={handleInputChange}
        value={registrationData.username}
        autoFocus
       />
       {registrationState.errorMessage && registrationState.errorMessage[0] && (
        <p className="text-danger">{registrationState.errorMessage[0]}</p>
       )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       <Form.Label>Email address</Form.Label>
       <Form.Control
        name="email"
        value={registrationData.email}
        type="email"
        placeholder="name@example.com"
        onChange={handleInputChange}
        autoFocus
       />
       {registrationState.errorMessage && registrationState.errorMessage[1] && (
        <p className="text-danger">{registrationState.errorMessage[1]}</p>
       )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       <Form.Label>Password</Form.Label>
       <Form.Control
        type="password"
        placeholder="write your password here"
        name="password"
        value={registrationData.password}
        onChange={handleInputChange}
        autoFocus
       />
       {registrationState.errorMessage && registrationState.errorMessage[2] && (
        <p className="text-danger">{registrationState.errorMessage[2]}</p>
       )}
      </Form.Group>
     </Form>
    </Modal.Body>
    <Modal.Footer className="justify-content-between">
     <div>
      <Button
       className="me-3 "
       variant="secondary"
       onClick={handleCloseRegister}
      >
       Close
      </Button>
      <Button variant="primary" onClick={handleRegister}>
       Register
      </Button>
     </div>
    </Modal.Footer>
   </Modal>
   {/* Ends modal register */}
   {/* ALERTS */}
   {showAlert && (
    <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
     <Alert.Heading>Account Created</Alert.Heading>
     <p>{registrationState.successMessage}</p>
    </Alert>
   )}
   {/* End Alerts */}
  </>
 );
};
export default CustomNavBar;
