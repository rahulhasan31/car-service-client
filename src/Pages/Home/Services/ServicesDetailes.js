import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../assets/logo.svg'

const ServicesDetailes = ({service}) => {
    const {price, title, img ,_id}=service
    return (
        <div className="card card-compact max-w-xl bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-2xl text-orange-600 font-semibold'>Price :${price}</p>  
        </div>
        <div className='  py-3'>
        <div className='flex justify-between items-center '>

          <div>
          <div className="avatar ml-5">
  <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
  <img p-5  src="https://i.ibb.co/HBPPtdL/car-service-logo-2-F3-H.jpg" alt="" />
  </div>
</div>
          </div>
          <div className=" rounded-md ">
            <Link to={`/checkout/${_id}`}><button className="btn btn-warning rounded-lg mr-3">Check Out</button></Link>
          </div>
        </div>
          </div>
      </div>
    );
};

export default ServicesDetailes;