import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices]= useServices();

    const hendelDelete =(id)=>{
        const proceed = window.confirm('Are you sure ?')
        if(proceed){
        const url = `http://localhost:5000/service/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            const remaining = services.filter(service => service._id !== id);
            setServices(remaining);
        })
        }
    }

    return (
        <div className='w-50 mx-auto border rounded m-5 p-3'>
            <h2 className='text-center'>Manege Services</h2>
            {
                services.map(service=> <div key={service._id}>
                    <h5>{service.name} <button onClick={()=>hendelDelete(service._id)}>Delete</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;