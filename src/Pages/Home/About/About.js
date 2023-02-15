import React from 'react'
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
      

<div>
 <div className=''>
     {/* <h1 className='text-4xl font-bold text-center text-red-500'>About Us</h1> */}
 </div>
 <h1 className='text-3xl font-bold  text-red-500 lg:ml-5 '>About Us</h1>
<div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img alt='' src="https://i.ibb.co/d7hrTfZ/car-service-illustration-concept-flat-illustration-isolated-on-white-background-vector.webp" className=" lg:max-w-xl " />
    <div>
      <h1 className="text-5xl font-bold">We are qualified <br>
      </br>& of experience <br></br>in this field </h1>
      <p className="py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className="py-3">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      <button className="btn btn-primary bg-red-600 rounded-lg border-0 text-white">Get More Info</button>
    </div>
  </div>
</div>



{/* <div className="hero my-20 grid grid-cols-1">
  <div className="hero-content flex-col lg:flex-row ">
    <div className='relative w-1/2'>
    <img  alt='' src={person} className="w-4/5 h-full rounded-lg shadow-2xl" />
    <img  alt='' src={parts} className="absolute w-2/3 border-8 top-1/2 right-5 rounded-lg shadow-2xl" />
    </div>
    <div className='w-1/2'>
        <p className='text-2xl  text-orange-600 font-bold'>About Us</p>
      <h1 className="text-5xl my-5 font-bold">We are qualified <br />
      & of experience <br />
       in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      <button className="btn btn-primary bg-orange-600  rounded-lg border-0">Get More Info</button>
    </div>
  </div>
</div> */}
</div>
    );
};

export default About;