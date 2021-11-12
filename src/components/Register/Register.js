import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import initAuth from '../Firebase/Firebase.init';
import useAuth from '../Hooks/useAuth';
import Navbar from '../Navbar/Navbar';


initAuth ()




const Register = () => {
    const {signInUsingGoogle} = useAuth()

const [email, setEmail]= useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState("")

const auth= getAuth();

const handleEmailChange = e => {
    setEmail(e.target.value);
}
const handlePasswordChange = e => {
    setPassword(e.target.value)
}

    const handleRegistration = e =>{
        e.preventDefault()
        if(password.length < 6 ){
            setError("Password should be atleast six character")
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            setError(error.message);
        })
      
    }
    return (
        <div>
            <Navbar />
            <div>
                <h1 className="m-5 text-primary"> Register Here</h1>
                <form onSubmit={handleRegistration}>
                   <input className="px-5 m-3" type="displayName"placeholder="Enter your Name" /> 
                   <br />
                   <input className="px-5 m-3" onBlur={handleEmailChange} type="email"placeholder="Enter Email" required/> 
                   <br />
                   <input onBlur={handlePasswordChange} className="px-5 m-3" type="password"placeholder="Enter Password" required /> 
                   <br />
                   <div className="my-2 text-danger">
                {error}
             </div>
                   
                   <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link> </p>
            </div>
            <div className="container-fluid">
                 <h4>Or</h4>
             </div>
             
             <div>
                 <button 
                 onClick={signInUsingGoogle}
                 className="btn-primary">Sign in with google</button>
             </div>
        </div>
    );
};

export default Register;


    
   