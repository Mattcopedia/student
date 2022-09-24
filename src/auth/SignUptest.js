import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useToken } from './useToken';
import styled from "styled-components";

 const SignUpTest = () => {
    
    // eslint-disable-next-line
    const [token, setToken] = useToken();
     
    // eslint-disable-next-line
    const [errorMessage, setErrorMessage] = useState('');
     
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

    const history = useHistory();

    const onSignUpClicked = async () => {
        let BaseUrl = "http://rakonibackendv2.herokuapp.com" 

        const response = await axios.post(`${BaseUrl}/api/auth/register`, {
            name: nameValue,
            email: emailValue, 
            password: passwordValue,
        });
        const { token } = response.data; 
        setToken(token);
        history.push('/');  
    }

    return (
        <Container>
            <h1>Sign Up Test Page</h1>
            {errorMessage && <Fail className="fail">{errorMessage}</Fail>}
            <Input
                value={nameValue}
                onChange={e => setNameValue(e.target.value)}
                placeholder="Your name" />
            <Input
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                placeholder="someone@gmail.com" />
            <Input
                type="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="password" />
            <Input
                type="password"
                value={confirmPasswordValue}
                onChange={e => setConfirmPasswordValue(e.target.value)}
                placeholder="Confirm password" />
            <hr />
            <Button
                disabled={
                    !emailValue || !passwordValue ||
                    passwordValue !== confirmPasswordValue
                }
                onClick={onSignUpClicked}>Sign Up</Button>
            <Button onClick={() => history.push('/logintest')}>Already have an account? Log In</Button>
        </Container>
    );
    
}

const Button = styled.button`
    border-radius: 8px;
      box-sizing: border-box;
      display: block;
      font-size: 16px;
      margin: 8px 0;
      padding: 8px;
      width: 100%;
      border: 1px solid black;
      cursor: pointer;
`
const Input = styled.input`
border-radius: 8px;
  box-sizing: border-box;
  display: block;
  font-size: 16px;
  margin: 8px 0;
  padding: 8px;
  width: 100%;
  border: 1px solid black;
`
const Container = styled.div `
      background-color: white;
      border-radius: 8px;
      min-width: 300px;
      max-width: 800px;
      padding: 32px;
`
  
const Fail = styled.div`
      background-color: #ffcccb;
      border-radius: 8px;
      margin-bottom: 8px;
      padding: 16px;
      text-align: center;
`

export default SignUpTest; 



