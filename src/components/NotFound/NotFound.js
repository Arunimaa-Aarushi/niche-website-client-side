import React from 'react';
import { Link } from 'react-router-dom';
import notFound from './notFound.jpg' ;


const NotFound = () => {
    return (
        <div className="m-5 text-center">
             <img src={notFound} alt="" />
             <h1>Please try again</h1>
            <Link to="/home">
                <button className="btn btn-lg btn-danger mt-5">Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;