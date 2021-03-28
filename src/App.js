import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Checkou from './Components/Checkout/Checkou';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SignUp from './Components/SignUp/SignUp';
import PremiumUser from './Components/PremiumUser/PremiumUser';
import Confirm from './Components/Confirm/Confirm';
import Contacts from './Components/Contacts/Contacts';
export const UserContext=createContext()

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  const [isSignIn,setIsSignIn] = useState(false)
  const handleSignOut =() =>{
    setIsSignIn(false)
    setLoggedInUser({})

  }
  console.log(loggedInUser.name);
  return (
    <div className="App container">
      <UserContext.Provider value={[loggedInUser,setLoggedInUser,isSignIn,setIsSignIn]}>
       <div className='text-s' style={{textAlign:'start'}}> 
       
        {
          isSignIn && <div className='bg-dark text-white'>
            <div className="d-flex ml-3 ">
      <p className='ml-3'>{loggedInUser.name}</p><img src={loggedInUser.photo} style={{borderRadius:'80px',width:'35px',marginLeft:'10px'}} alt=""/>
       <button onClick={handleSignOut} className='ml-3 btn btn-danger'>Sign Out</button>
       </div>
       <p className='text-center'>WelCome {loggedInUser.email}</p> 
          </div>
        }

       </div>
      <Router>
      <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/checkout'>
            <Checkou></Checkou>
          </Route>
          <PrivateRoute path='/premium'>
            <PremiumUser></PremiumUser>
          </PrivateRoute>
          <PrivateRoute path='/confirm'>
            <Confirm></Confirm>
          </PrivateRoute>
          <PrivateRoute path='/contacts'>
            <Contacts></Contacts>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
</UserContext.Provider>
    </div>
  );
}

export default App;
