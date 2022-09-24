

import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import HomePage from "../pages/Dashboard" 
function AdminPrivateRoute({...rest}) {

  

    return (

        <Route {...rest}
            render={ ({props, location}) => 
            localStorage.getItem('customtoken') ? 
                ( <HomePage {...props} /> ) :
                ( <Redirect to={{pathname: "/login",  }} /> )    
                // ( <Redirect to={{pathname: "/login", state:{from: location} }} /> )    
            } 

        /> 
 
    );
}

export default AdminPrivateRoute;