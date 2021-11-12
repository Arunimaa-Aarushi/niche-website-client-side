import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <div className="banner">
             <div className="container">
             <div className="row d-flex align-items-center justify-content-center">
             <div className="col-lg-4 col-md-4 col-sm-12 text-light">
             <div className="intro">
             <h1>WELCOME TO OUR <h1 className="span"> ULTRA LIPSTICK SHOP!</h1></h1>
             <p>
             Ultra Lipstick Shop is a cruelty-free cheap lipsticks at the best beauty dollar store. It's the best place to buy any lipsticks you want whether it's free or not.
             </p>
                 </div>
                 </div>
                 <div className="col-lg-6 col-md-6 col-sm-12">
                 <img width="100%" src="https://s3.envato.com/files/257625855/DSC_0703.jpg" alt="" />
                 </div>
                 </div>
            </div>
        </div>
    );
};

export default Banner;







