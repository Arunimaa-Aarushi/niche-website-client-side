import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const AllProducts = () => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://ancient-waters-21283.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>

        <div className=" p-5">
            <h2 className="text-center mb-4 text-danger">Our Services</h2>
            <div className="container">
                <div className="row row-cols-lg-3">
                    {
                        service?.map(service => <Card service={service}></Card>)
                    }
                </div>
            </div>
        </div>

    </div>
    );
};

export default AllProducts;