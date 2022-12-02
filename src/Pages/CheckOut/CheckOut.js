import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CheckOut = () => {
    const service= useLoaderData()
    const {title, price, _id}= service
    const {user}= useContext(AuthContext)

    const handlePlaceOrder=event=>{
        event.preventDefault()
        const form= event.target
        const name= `${form.firstName.value} ${form.lastName.value}`
        const email= user?.email || `unregister`
        const phone= form.phone.value
        const massage= form.massage.value 

        const order={
            service: _id,
            serviceName:title,
            price,
            customer: name,
            email,
            phone,
            massage
            
        }

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers :{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            
            if(data.acknowledged){
              
              alert('order place success')
              form.reset()
              
            }
            console.log(data)})
        .catch(e=>console.error(e))

    }
    return (
        <div>
           <form onSubmit={handlePlaceOrder} >
            <h2 className='text-4xl '>You Are About To Order: {title}</h2>
            <h4 className='text-3xl'>Price: {price}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <input  name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full max-w-xs" />
            <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
            <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full max-w-xs" />
            <input name='email' type="text" placeholder="Your Email"   defaultValue={user?.email}  readOnly    className="input input-bordered w-full max-w-xs" />
            </div>
            <br />
            <textarea name='massage' className="textarea textarea-bordered h-24 w-full" placeholder="Your Massage"></textarea>
            <br />
            <input className="btn btn-primary-600" type="submit" value="Place Your Order" />
           </form>
        </div>
    );
};

export default CheckOut;