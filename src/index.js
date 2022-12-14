import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; 
import {LoginProvider} from './components/LoginContext'; 




ReactDOM.render(
    
    <React.StrictMode>

        <BrowserRouter>
        <LoginProvider>
           <App />   
           </LoginProvider> 
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById ('root')  
);


