import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { uploadAvatar } from "../redux/actions/uploadAvatarAction";
import { fetchUserProfile } from "../redux/actions/fetchUserProfileAction";

const ProfilePage = () => {
 const loggedUserState = useSelector((state) => state.loggedUser);
 const dispatch = useDispatch();

 const handleChangeImg = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
   dispatch(uploadAvatar(selectedFile, loggedUserState.profile.id));
   setTimeout(() => {
    dispatch(fetchUserProfile());
   }, 2500);
  }
 };

 return (
  <Container className="mt-5 mb-5">
   <h2>Profile Page</h2>
   <Row>
    <Col sm={12} md={6} lg={6}>
     <img
      className="rounded-5"
      src={loggedUserState.profile.avatar}
      alt="profile image"
      width={200}
     />
     <label htmlFor="avatarInput">
      <Button size="sm" className="mt-3 ms-3" variant="primary" as="span">
       Carica Immagine
      </Button>
      <input
       type="file"
       id="avatarInput"
       style={{ display: "none" }}
       onChange={handleChangeImg}
      />
     </label>
    </Col>
    <Col sm={12} md={6} lg={6}>
     <Form>
      <Form.Group className="mb-3" controlId="formBasicUsername">
       <Form.Label>Username</Form.Label>
       <Form.Control
        type="text"
        name="username"
        placeholder={loggedUserState.profile.userName}
       />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control
        type="email"
        name="email"
        placeholder={loggedUserState.profile.email}
       />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control
        type="password"
        name="password"
        placeholder="Enter new password"
       />
      </Form.Group>

      <Button variant="primary" onClick>
       Salva Modifiche
      </Button>
     </Form>
    </Col>
   </Row>
  </Container>
 );
};

export default ProfilePage;
