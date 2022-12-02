import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import ServicesDetailes from './ServicesDetailes';

const Services = () => {
    const [services, setServices]= useState([])

    useEffect(()=>{
        fetch('https://genius-server-tau.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
              <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services {services.length}</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, <br /> by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                 services.map(service=><ServicesDetailes 
                 key={service._id}
                 service={service}
                 ></ServicesDetailes>)   
                }
            </div>
        </div>
    );
};

export default Services;