


import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import initAuth from '../Firebase/Firebase.init';
import useAuth from '../Hooks/useAuth';
import Navbar from '../Navbar/Navbar';

 
initAuth()

const Login = () => {


     

    
    const {signInUsingGoogle} = useAuth()
    const location = useLocation();
    const history = useHistory() ;
    
    const redirectURL = location.state?.from || "/" 
    console.log(redirectURL)
    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result=>{
            history.push(redirectURL)
        })
    }
    return (
        <div>
            <Navbar />
            <h1 className="m-4 text-primary">LOG IN HERE</h1>
             <form className="">
                 <div className="mb-3">
                     <input className="m-2" type="email" placeholder="Your Email"/>
                     <br />
                     <input className="m-2" type="password" placeholder="Your password"/>
                     <br />
                     <input type="submit" value="Submit" />
                 </div>
             </form>
             <p>New to Ultra Lipstick Shop? <Link to="/register">Register Here</Link> </p>
             <div className="container-fluid">
                 <h4>Or</h4>
             </div>
             <div>
                 <button className="btn-primary" onClick={handleGoogleLogin}>Sign in with google</button>
             </div>
        </div>
    );
};

export default Login;