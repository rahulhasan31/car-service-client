import React from 'react';

const WorkCard = () => {
    return (
        <div className=' lg:grid grid-cols-3'>
            <div className="card w-96 ">
  <figure><img src="https://i.ibb.co/9pj0Nqj/car-maintenance-illustration-concept-vector.webp" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className=" text-xl  font-semibold text-center">
      Auto Repair
      
    </h2>
    <p className='text-center'>An automobile repair shop is an establishment where automobiles are repaired by auto mechanics and technicians</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
           </div>
            <div className="card w-96  ">
  <figure><img src="https://i.ibb.co/825YTjd/car-service-or-car-maintenance-3323962-2809547.webp" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-xl  font-semibold text-center">
    Professional Mechanics
      
    </h2>
    <p className='text-center'>Professionals with mechanic jobs can work in a variety of professional environments, including repair shops, construction firms and vehicle</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
           </div>
            <div className="card w-96 ">
  <figure><img src="https://i.ibb.co/Zdbv7YS/c61695aaed6da402abc125ae7ca80d33.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-xl  font-semibold text-center">
      Car Towing 
      
    </h2>
    <p className='text-center'>Affordable Car and motorcycle towing, one-way and in-town rentals. Find the answers to all your car towing and motorcycle towing questions</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
           </div>
        </div>
    );
};

export default WorkCard;