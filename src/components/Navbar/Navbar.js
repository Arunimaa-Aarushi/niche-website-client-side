import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const Navbar = () => {

    const { user, logOut } = useAuth(); 


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary m-0">
                <div className="container">
                    <a className="navbar-brand" href="/home">Ultra Lipstick Shop.</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/explore">Explore</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>

                            { user.email ?
                                    <button  className="text-decoration-none text-dark nav-item m-3" onClick={logOut}>Log out</button>
                                    :

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                            }

                            {user.email && <span className="text-white">{user.displayName} </span>}
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                            <button class="btn btn-danger" type="submit">Search</button>
                        </form>


                    </div>


                </div>

            </nav>

        </div>
    );
};

export default Navbar;