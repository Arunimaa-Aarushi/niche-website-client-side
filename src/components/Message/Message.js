import React from 'react';
import './Message.css'


const Message = () => {
    return (
        <div className="back col-lg-12 col-md-5 col-sm-12">
            <div  className="container p-4 text-center ">
            <h1 className="my-4 text-danger">Message Us</h1>
            <input type="text" placeholder="Username..." /><br /><br />
                        <input type="email" placeholder="Email..." /><br /><br />
                        <textarea placeholder="Message..." /><br /><br />
                        <button className="btn btn-outline-danger btn-lg">Send</button>

            </div>
            
        </div>
    );
};

export default Message;