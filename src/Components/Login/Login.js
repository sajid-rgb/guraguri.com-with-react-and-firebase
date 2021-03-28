import React, { useContext, useState} from 'react';
import { firebaseConfig } from '../../firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    useHistory,useLocation,Link
  } from "react-router-dom";
import { faFacebook, faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import SignUp from '../SignUp/SignUp';
if(!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig);
}
else{
    firebase.app()
}

const Login = () => {
    const [loggedInUser,setLoggedInUser,isSignIn,setIsSignIn] = useContext(UserContext)
    const [isSignInChanged,setIsSignInChanged]=useState(false)
    const [user,setUser] = useState({
        email:'',
        photo:'',
        name:'',
        error:''
    })
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const googleSignIn = ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
  .then((result) => {
    const user = result.user;
    const newUser={
        email:user.email,
        photo:user.photoURL,
        name:user.displayName
    }

    setUser(newUser)
    setLoggedInUser(newUser)
    setIsSignIn(!isSignIn)
    history.replace(from);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
  });
    }
    const handleClickBlur =(e) =>{
        if(e.target.name==='email'){
            const email = e.target.value
            const newUser = {...user}
            newUser[e.target.name]=email;
            setUser(newUser)
        }
        if(e.target.name==='password'){
            const password = e.target.value;
            const newUser = {...user}
            newUser[e.target.name]=password
            setUser(newUser)
            
        }
   
    }
    const handleSignInChanged=()=>{

        setIsSignInChanged(true)
    }
    const signInEmail =()=>{
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then((result) => {
    const user = result.user;
    const newUser={
        email:user.email,
        photo:user.photoURL,
        name:user.displayName
    }

    setUser(newUser)
    setLoggedInUser(newUser)
    setIsSignIn(!isSignIn)
    history.replace(from);
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const updateUser={
        error:error.message
    }
    setUser(updateUser)
  });
    }
    const fbSignIn=(e)=>{
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider)
        .then((result) => {
    const user = result.user;
    const newUser={
        email:user.email,
        photo:user.photoURL,
        name:user.displayName
    }

    setUser(newUser)
    setLoggedInUser(newUser)
    setIsSignIn(!isSignIn)
    history.push(from);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const updateUser={
        error:error.message
    }
    setUser(updateUser)
});
e.preventDefault();   
}
    const gitSignIn = () =>{
        const gitProvider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(gitProvider)
        .then((result) => {
    const user = result.user;
    const newUser={
        email:user.email,
        photo:user.photoURL,
        name:user.displayName
    }

    setUser(newUser)
    setLoggedInUser(newUser)
    setIsSignIn(!isSignIn)
    history.replace(from);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const updateUser={
        error:error.message
    }
    setUser(updateUser)
   
  });


    }
        return (
        <div className='text-center'>
            {
                isSignInChanged && <SignUp ></SignUp>
            }
            <h4 className='text-white mt-4'>Please sign in to continue your tour</h4>
            <div className="d-flex form-group flex-column justify-content-center align-items-center ">
            <input type="text" className='form-control w-50 mt-3' name='email' onBlur={handleClickBlur} placeholder='Enter Username Or Email' required/><br/>
            <input type="password" className='form-control w-50 mt-0' name='password' onBlur={handleClickBlur} placeholder='Enter password' required/>
            </div>
            <p className='text-center text-danger'>{user.error}</p>
            <button className='btn btn-success mt-1' onClick={signInEmail}>Sign In</button><br/>
            <Link to='/signup' onClick={handleSignInChanged}><p>I have no account</p></Link>
         <button  className="mt-1  btn btn-success mb-3" onClick={googleSignIn}><span style={{color:'yellow',marginRight:'5px'}}><FontAwesomeIcon icon={faGoogle}/></span>Google Sign In</button>
         <button  className="mt-1 ml-2  btn btn-success mb-3"onClick={fbSignIn}><span style={{color:'blue',marginRight:'5px'}}><FontAwesomeIcon icon={faFacebookF}/></span>Facebook Sign In</button>
         <button  className="mt-1 ml-2  btn btn-success mb-3"onClick={gitSignIn}><span style={{color:'black',marginRight:'5px'}}><FontAwesomeIcon icon={faGithub}/></span>Github Sign In</button>
        </div>
    );
};

export default Login;