import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as ROUTE from "../constants/routes";
import HeaderContainer from "../containers/header";
import Form from "./../components/form/index";
import FooterContainer from "./../containers/footer";
import firebaseContext from '../context/firebase'


export default function Signup() {
  const history = useHistory();
  const {firebase} = useContext(firebaseContext);
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const isInvalid = firstName === "" || password === "" || emailAddress === "";


  const handleSignup = (event) => {
    event.preventDefault();
     

    firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress, password)
        .then((result) => 
          result.user
          .UpdateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1
          })
          .then(() => {
            setEmailAddress('');
            setPassword('');
            setError(''),
            history.push(ROUTE.BROWSE)
          }).catch((error) => setError(error.message))
        )
  };


  return (
    <div>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign up</Form.Title>
          {error && <Form.Error></Form.Error>}
          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="FirstName"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="EmailAddress"
              autoComplete="off"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already have an account.{" "}
              <Form.Link to={ROUTE.SIGN_IN}> Sign In</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </div>
  );
}
