import React from 'react';
import { CardGroup } from 'react-bootstrap';
import expart1 from '../../../images/experts/expert-1.jpg'
import expart2 from '../../../images/experts/expert-2.jpg'
import expart3 from '../../../images/experts/expert-3.jpg'
import expart4 from '../../../images/experts/expert-4.jpg'
import expart5 from '../../../images/experts/expert-5.jpg'
import expart6 from '../../../images/experts/expert-6.png'
import Expart from '../Expart/Expart';

const exparts = [
    { id: 1, name: 'Tom jony', img: expart1 },
    { id: 2, name: 'Pedro', img: expart2 },
    { id: 3, name: 'Silva', img: expart3 },
    { id: 4, name: 'Mardona', img: expart4 },
    { id: 5, name: 'Smith', img: expart5 },
    { id: 6, name: 'Will Root', img: expart6 },
]

const Exparts = () => {
    return (
        <div id='exparts' className='m-5'>
            <h2 className='text-center text-primary'>Our Exparts</h2>

            <CardGroup className='row'>
                {
                    exparts.map(expart => <Expart
                        key={expart.id}
                        expart={expart}
                    ></Expart>)
                }
            </CardGroup>

        </div>
    );
};

export default Exparts;