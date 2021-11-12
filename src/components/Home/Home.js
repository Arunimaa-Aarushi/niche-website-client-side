import React from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Message from '../Message/Message';
import Navbar from '../Navbar/Navbar';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AllProducts></AllProducts>
            <Review></Review>
            <Message></Message>
            <Footer></Footer>
        </div>
    );
};

export default Home;