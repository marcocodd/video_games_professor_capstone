import {
 Alert,
 Button,
 Container,
 Dropdown,
 Form,
 Modal,
 Nav,
 NavDropdown,
 Navbar,
} from "react-bootstrap";
import logo from "../assets/logo.jpg";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { updateRegistrationData } from "../redux/actions/updateRegistrationData";
import { registerUserAction } from "../redux/actions/registerUserAction";
// import { updateLoginUserData } from "../redux/actions/loginUserUpdateData";
import { loginUserAction } from "../redux/actions/loginUserAction";
import { fetchUserProfile } from "../redux/actions/fetchUserProfileAction";
import { Link } from "react-router-dom";

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

 const dispatch = useDispatch();
 const registrationState = useSelector((state) => state.registerUser);
 const loginUserState = useSelector((state) => state.loggedUser);
 const [registrationData, setRegistrationData] = useState({
  username: "",
  email: "",
  password: "",
 });
 const [loginData, setLoginData] = useState({ email: "", password: "" });

 const handleInputRegistration = (e) => {
  const { name, value } = e.target;
  setRegistrationData(...registrationData, { [name]: value });
 };
 const handleInputLogin = (e) => {
  const { name, value } = e.target;
  setLoginData({ ...loginData, [name]: value });
 };

 const handleRegister = () => {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!registrationData.username) {
   errors.username = "Username is required";
  }

  if (!registrationData.email) {
   errors.email = "Email is required";
  } else if (!emailRegex.test(registrationData.email)) {
   errors.email = "Invalid email format";
  }

  if (!registrationData.password) {
   errors.password = "Password is required";
  }

  if (errors.username || errors.email || errors.password) {
   setRegisterErrors(errors);
  } else {
   dispatch(registerUserAction(registrationData));
  }
 };

 const handleLogin = () => {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!loginData.email) {
   errors.email = "Email is required";
  } else if (!emailRegex.test(loginData.email)) {
   errors.email = "Invalid email format";
  }

  if (!loginData.password) {
   errors.password = "Password is required";
  }

  if (errors.email || errors.password) {
   setLoginErrors(errors);
  } else {
   dispatch(loginUserAction(loginData));
   dispatch(fetchUserProfile());
  }
 };
 useEffect(() => {
  if (registrationState.successMessage) {
   setShowAlertSuccess(true);
   setShowRegister(false);
   setRegistrationData("");
  }
  if (loginUserState.successMessage) {
   setShowAlertSuccess(true);
   setShowLogin(false);
   setLoginData("");
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
     <Link to={"/"}>
      <Navbar.Brand href="#home">
       <img className="rounded-circle" width={50} src={logo} alt="logo image" />
      </Navbar.Brand>
     </Link>

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

      {loginUserState.isLogged ? (
       <Dropdown align="end">
        <Dropdown.Toggle
         as={Button}
         variant="link"
         className="p-0"
         id="dropdown-avatar"
        >
         <img
          className="rounded-circle me-2"
          src={loginUserState.profile.avatar}
          alt="Avatar"
          width={50}
          height={50}
         />
        </Dropdown.Toggle>

        <Dropdown.Menu>
         <Dropdown.Item as={Link} to="/profile">
          Profile
         </Dropdown.Item>

         <Dropdown.Item onClick>Logout</Dropdown.Item>
        </Dropdown.Menu>
       </Dropdown>
      ) : (
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
      )}
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
        value={loginData.email}
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
        value={loginData.password}
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
        value={registrationData.username}
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
        value={registrationData.email}
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
        value={registrationData.password}
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
