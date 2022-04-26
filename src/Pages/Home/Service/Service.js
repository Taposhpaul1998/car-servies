import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price, _id } = service;
    const navigate = useNavigate();
    const handelServiceDetail = (id) => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='servic'>
            <img src={img} alt="" />
            <div className='servic-info'>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p>{description}</p>
                <Button onClick={() => handelServiceDetail(_id)} variant="primary">Book: <small>{name}</small></Button>
            </div>

        </div>
    );
};

export default Service;