import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css';

const Review = () => {
    // Use State
    const [reviews, setReviews] = useState([]);
    const { user } = useAuth();
    

    useEffect(() =>{
        fetch('https://ancient-waters-21283.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <div className="my-4">
            <h2 className="text-center text-primary my-3">Customer Reviews!</h2>
            <Container><Row xs={1} md={2} lg={3} className="g-4">
                {
                    reviews?.map(review => <ReviewCard key={review._id} review={review} />)
                }
            </Row></Container>
        </div>
    );
};

export default Review;