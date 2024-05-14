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
import { updateRegistrationData } from "../redux/actions/updateRegistrationData";
import { registerUserAction } from "../redux/actions/registerUserAction";
import { updateLoginUserData } from "../redux/actions/loginUserUpdateData";
import { loginUserAction } from "../redux/actions/loginUserAction";

const CustomNavBar = () => {
 const [showLogin, setShowLogin] = useState(false);
 const [showRegister, setShowRegister] = useState(false);
 const [loginErrors, setLoginErrors] = useState({});
 const [registerErrors, setRegisterErrors] = useState([]);
 const [showAlertError, setShowAlertError] = useState(false);

 const handleCloseLogin = () => setShowLogin(false);
 const handleShowLogin = () => setShowLogin(true);

 const handleShowRegister = () => setShowRegister(true);
 const handleCloseRegister = () => setShowRegister(false);
 const [showAlertSuccess, setShowAlertSuccess] = useState(false);
 //  const [registrationData, setRegistrationData] = useState({
 //   username: "",
 //   email: "",
 //   password: "",
 //  });
 const dispatch = useDispatch();
 const registrationState = useSelector((state) => state.registerUser);
 const loginUserState = useSelector((state) => state.loggedUser);

 const handleInputRegistration = (e) => {
  const { name, value } = e.target;
  dispatch(updateRegistrationData(name, value));
 };
 const handleInputLogin = (e) => {
  const { name, value } = e.target;
  dispatch(updateLoginUserData(name, value));
 };

 const handleRegister = () => {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!registrationState.registrationData.username) {
   errors.username = "Username is required";
  }

  if (!registrationState.registrationData.email) {
   errors.email = "Email is required";
  } else if (!emailRegex.test(registrationState.registrationData.email)) {
   errors.email = "Invalid email format";
  }

  if (!registrationState.registrationData.password) {
   errors.password = "Password is required";
  }

  if (errors.username || errors.email || errors.password) {
   setRegisterErrors(errors);
  } else {
   dispatch(registerUserAction(registrationState.registrationData));
  }
 };

 const handleLogin = () => {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!loginUserState.loginData.email) {
   errors.email = "Email is required";
  } else if (!emailRegex.test(loginUserState.loginData.email)) {
   errors.email = "Invalid email format";
  }

  if (!loginUserState.loginData.password) {
   errors.password = "Password is required";
  }

  if (errors.email || errors.password) {
   setLoginErrors(errors);
  } else {
   dispatch(loginUserAction(loginUserState.loginData));
  }
 };

 //   setRegistrationData({ ...registrationData, [name]: value });
 //  };

 useEffect(() => {
  if (registrationState.successMessage) {
   setShowAlertSuccess(true);
   setShowRegister(false);
  }
  if (loginUserState.successMessage) {
   setShowAlertSuccess(true);
   setShowLogin(false);
  }
 }, [registrationState.successMessage, loginUserState.successMessage]);

 useEffect(() => {
  if (registrationState.errorMessage || loginUserState.errorMessage) {
   setShowLogin(false); // Chiudi il modale di login se si verifica un errore
   setShowRegister(false); // Chiudi il modale di registrazione se si verifica un errore
   setShowAlertError(true); // Mostra l'alert di errore solo se c'è un errore
  } else {
   setShowAlertError(false); // Nascondi l'alert di errore se non c'è errore
  }
 }, [registrationState.errorMessage, loginUserState.errorMessage]);

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
       <Form.Control
        type="email"
        name="email"
        placeholder="name@example.com"
        autoFocus
        onChange={handleInputLogin}
        value={loginUserState.loginData.email}
        required
       />
       {loginErrors.email && <p className="text-danger">{loginErrors.email}</p>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       <Form.Label>Password</Form.Label>
       <Form.Control
        type="password"
        name="password"
        placeholder="write your password here"
        autoFocus
        onChange={handleInputLogin}
        value={loginUserState.loginData.password}
        required
       />
       {loginErrors.password && (
        <p className="text-danger">{loginErrors.password}</p>
       )}
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
      <Button variant="primary" onClick={handleLogin}>
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
        onChange={handleInputRegistration}
        value={registrationState.registrationData.username}
        autoFocus
       />
       {registerErrors.username && (
        <p className="text-danger">{registerErrors.username}</p>
       )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       <Form.Label>Email address</Form.Label>
       <Form.Control
        name="email"
        value={registrationState.registrationData.email}
        type="email"
        placeholder="name@example.com"
        onChange={handleInputRegistration}
        autoFocus
       />
       {registerErrors.email && (
        <p className="text-danger">{registerErrors.email}</p>
       )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       <Form.Label>Password</Form.Label>
       <Form.Control
        type="password"
        placeholder="write your password here"
        name="password"
        value={registrationState.registrationData.password}
        onChange={handleInputRegistration}
        autoFocus
       />
       {registerErrors.password && (
        <p className="text-danger">{registerErrors.password}</p>
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
   {showAlertSuccess &&
    registrationState.successMessage &&
    !loginUserState.successMessage && (
     <Alert
      variant="success"
      onClose={() => setShowAlertSuccess(false)}
      dismissible
     >
      <Alert.Heading>Success</Alert.Heading>
      <p>{registrationState.successMessage}</p>
     </Alert>
    )}

   {showAlertSuccess &&
    !registrationState.successMessage &&
    loginUserState.successMessage && (
     <Alert
      variant="success"
      onClose={() => setShowAlertSuccess(false)}
      dismissible
     >
      <Alert.Heading>Success</Alert.Heading>
      <p>{loginUserState.successMessage}</p>
     </Alert>
    )}

   {showAlertError && (
    <Alert
     variant="danger"
     onClose={() => setShowAlertError(false)}
     dismissible
    >
     <Alert.Heading>Error</Alert.Heading>
     <p>{registrationState.errorMessage || loginUserState.errorMessage}</p>
    </Alert>
   )}
   {/* End Alerts */}
  </>
 );
};

export default CustomNavBar;
