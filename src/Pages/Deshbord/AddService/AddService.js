import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
       console.log(data);
       const url = `http://localhost:5000/service`;
       fetch(url,{
           method: 'POST',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(data)
       })
       .then(res=>res.json())
       .then(result=>{
           console.log(result);
       })

    };
    return (
        <div className='w-50 mx-auto border m-5 p-3 rounded'>
            <h2 className='text-center mb-4'>plase add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2' placeholder='Name' {...register("name")} />
      <input className='mb-2' placeholder='Photo Url' {...register("img")} />
      <textarea className='mb-2' placeholder='Description' {...register("description")} />
      <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
      <input value="Add Service" type="submit" />
    </form>
        </div>
    );
};

export default AddService;