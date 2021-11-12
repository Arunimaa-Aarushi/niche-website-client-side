import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';

const ReviewCard = ({review}) => {

    const {name, description, rating} = review;

    console.log(review);

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {description}
                    <p>Rating: {rating}</p>
                    </Card.Text>
                </Card.Body>
                </Card>
        </div>
    );
};

export default ReviewCard;