import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Wolecome to details: {serviceId}</h2>
            <div className='text-center mb-5'>
                <Link to="/checkout">
                    <Button className='btn btn-primary'>Checkout your services</Button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;