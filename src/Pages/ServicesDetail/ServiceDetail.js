import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service,setService] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/service/${serviceId}`)
        .then(res=>res.json())
        .then(data=> setService(data))
    },[])
   
    return (
        <div>
            <h2 className='text-center'>You are about to book: {service.name}</h2>
            <div className='text-center mb-5'>
                <Link to="/checkout">
                    <Button className='btn btn-primary'>Checkout your services</Button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;