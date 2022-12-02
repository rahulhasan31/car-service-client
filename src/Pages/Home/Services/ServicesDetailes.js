import React from 'react';
import { Link } from 'react-router-dom';

const ServicesDetailes = ({service}) => {
    const {price, title, img ,_id}=service
    return (
        <div className="card card-compact max-w-xl bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-2xl text-orange-600 font-semibold'>Price :${price}</p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Check Out</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ServicesDetailes;