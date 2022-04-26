import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Expart = ({ expart }) => {
    const { name, img } = expart
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-4'>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant='primary'>{name}</Button>
            </Card>
        </div>
    );
};

export default Expart;