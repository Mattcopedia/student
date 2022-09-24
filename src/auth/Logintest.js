import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useToken } from './useToken';
import styled from "styled-components";


const Logintest = () => {
    // eslint-disable-next-line
    const [token, setToken] = useToken();

    // eslint-disable-next-line
    const [errorMessage, setErrorMessage] = useState('');

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
 
    const history = useHistory();
    
      
    const onLogInClicked = async () => {
        let BaseUrl = "http://rakonibackendv2.herokuapp.com"

        const response = await axios.post(`${BaseUrl}/api/auth/login`, { 
            email: emailValue,
            password: passwordValue,
        });
        const { token } = response.data;
        console.log(response.data)
        setToken(token);
        history.push('/homepagetest'); 
    }

    return (
        <>
        
        <Container>
            <h1>Log In Test Page</h1>
            {errorMessage && <Fail className="fail">{errorMessage}</Fail>}
            <Input
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                placeholder="someone@gmail.com" />
            <Input
                type="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="password" />
            <hr />
            <Button
                disabled={!emailValue || !passwordValue}
                onClick={onLogInClicked}>Log In</Button>
            <Button onClick={() => history.push('/forgot-password')}>Forgot your password?</Button>
            <Button onClick={() => history.push('/signuptest')}>Don't have an account? Sign Up</Button>
        </Container>
        </>
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

  


export default Logintest; 