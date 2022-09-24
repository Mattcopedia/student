import { Redirect, Route } from 'react-router-dom';
export const PrivateRoute = props => {

    if (!localStorage.getItem('customtoken') ) return <Redirect to="/login" /> 
    return <Route {...props} />    

    // if (!token ) return <Redirect to="/login" />      
}   



// import { Redirect, Route } from 'react-router-dom';


// export const PrivateRoute = ({ children, ...rest }) => {
//     return (
//       <Route
//         {...rest}
//         render={({ location }) => {
//           return (!localStorage.getItem('customtoken') ) ? (
//             children
//           ) : (
//             <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location },
//             }}
//           /> 
//           );
//         }}  
//       />
//     );
//   } 



// import { Redirect, Route } from 'react-router-dom';
// import { useToken } from './useToken';

// export const PrivateRoute = props => {
//     const token = useToken();

//     if (!token) return <Redirect to="/login" />

//     return <Route {...props} />   
// }







// import { Redirect, Route } from 'react-router-dom';
// import { useToken } from './useToken';

// export const PrivateRoute = props => {
//     const token = useToken();

//     if (!token) return <Redirect to="/login" />

//     return <Route {...props} />   
// }



