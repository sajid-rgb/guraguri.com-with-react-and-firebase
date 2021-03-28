import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        <div>
          <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || loggedInUser.name || loggedInUser.photo? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
            
        </div>
    );
};

export default PrivateRoute;