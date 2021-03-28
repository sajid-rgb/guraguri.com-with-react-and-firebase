import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import {Link
  } from "react-router-dom";
const SignUp = ({user,setUser}) => {
    const [loggedInUser,setLoggedInUser,isSignIn,setIsSignIn] = useContext(UserContext)
    const [userSignUp,setUserSignUp] = useState({
        email:'',
        photo:'',
        name:''
    })
    const handleSignUp=(e)=>{
        if(e.target.name==='email'){
            const email=e.target.value
            const newUser = {...loggedInUser}
            newUser[e.target.name]=email
            setLoggedInUser(newUser)

        }
        if(e.target.name==='password'){
            const password=e.target.value
            const newUser = {...loggedInUser}
            newUser[e.target.name]=password
            setLoggedInUser(newUser)
        }
    }
    const handleSignUButton=()=>{
        firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
    }
    return (
        <div className='text-center'>
            <h4>Create Account Here</h4>
            <Link to='/login' ><p>I have all ready an account</p></Link>
            <div className="d-flex flex-column justify-content-center align-items-center ">
            
            <input type="text" className='form-control w-50 mt-3' name='name' onBlur={handleSignUp} placeholder='Enter User name ' required/><br/>
            <select name="" className='form-control w-50 ' name='age' onBlur={handleSignUp}  id="">
                    <option>Select Age</option>
                    <option>18-30</option>
                    <option>30+</option>
                    </select>   
                    <select name="" className='form-control w-50  mt-3' name='gender' onBlur={handleSignUp}  id="">
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    </select> 
            <input type="text" className='form-control w-50 mt-3' onBlur={handleSignUp} name='email'  placeholder='Enter Valid Email' required/><br/>
            <input type="password" className='form-control w-50 mt-0' onBlur={handleSignUp} name='password'  placeholder='Enter password' required/>
            <input type="password" className='form-control w-50 mt-4' onBlur={handleSignUp} name='password'  placeholder='Confirm password' required/>
            </div>
            <input type="checkbox" className='form-check-input mt-3' onBlur={handleSignUp} name='term'  required/>
            <label className='form-check-label mt-2 ml-1'>I agree with terms and conditions</label><br/>
            <button className='btn btn-success mt-3 mb-2' onBlur={handleSignUButton}>Sign Up</button><br/>
            
        </div>
    );
};

export default SignUp;