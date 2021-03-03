import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import { Form } from '../components';
import {firebaseContext} from '../context/firebase'
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer'
import * as ROUTES from '../constants/routes'

export default function Signin() {
  const {firebase} = useContext(firebaseContext);
  const history = useHistory();
	const [error, setError] = useState('');
	const [emailAdress, setEmailAdress] = useState('')
	const [password, setPassword] = useState('');

	const isValided = emailAdress === '' || password === ''

	const handleSigning = (event) => {
    event.preventDefault()
    
    firebase
    .auth()
    .signinWithEmailAndPassword(emailAdress, password)
    .then(() => {
      setEmailAddress('');
      setPassword('');
      setError('');
      history.pushState(ROUTES.BROWSE)
    })
    .catch((error) => setError(error.message))
	}

	return (
		<>
    <HeaderContainer>
      <Form>
        <Form.Title>Sign in</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base onSubmit={handleSigning} methode="POST">
          <Form.Input
            placeholder="Email address"
            value={emailAdress}
            onChange={({ target }) => setEmailAdress(target.value)}
          />
          <Form.Input
            type="password"
            placeholder="Password"
            value={password}
            outConplete="off"
            onChange={({ target }) => setPassword(target.value)}
          />
        </Form.Base>
        <Form.Submit disabled={isValided} type="submit">
          Sign in
        </Form.Submit>
        <Form.Text>
          New to Netflix? <Form.Link to="/signup"> sign up now</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by google reCAPTCHA
        </Form.TextSmall>
      </Form>
    </HeaderContainer>
	<FooterContainer></FooterContainer>

	
</>
  );
}
