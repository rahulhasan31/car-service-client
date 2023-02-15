import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

import BannerDetaile from './BannerDetaile';

const bannerData=[
  {
    image: img1,
    pev: 6,
    id:1,
    next: 2
  },
  {
    image: img2,
    pev: 1,
    id:2,
    next: 3
  },
  {
    image: img3,
    pev: 2,
    id:3,
    next: 4,
  },
  {
    image: img4,
    pev: 2,
    id:4,
    next: 5
  },
  {
    image: img5,
    pev: 4,
    id:5,
    next: 6
  },
  {
    image: img6,
    pev: 5,
    id:6,
    next:1
  },
]
const Banner = () => {
    return (
      
  <div className=" w-full ">

    {/* {
      bannerData.map(slide=> <BannerDetaile
       key={slide.id}
       slide={slide}
      ></BannerDetaile>)
    } */}

<div className="hero  ">
  <div className="hero-content flex-col lg:flex-row">
    <img alt='' src="https://i.ibb.co/wW5szK0/car-service-list-5332691-4453451.webp" className="lg:max-w-xl " />
    <div>
      <h1 className="text-3xl font-bold text-red-600">Hey Wellcome to</h1>
      <h1 className="text-5xl font-bold text-blue-500">Car Services </h1>
      <p className="py-6 font-medium">You can use a vehicle maintenance log to monitor the repairs of your vehicle. You can also use it to schedule the maintenance of your car</p>
      <button className="btn btn-primary rounded-lg border-0">Get Started</button>
    </div>
  </div>
</div>


</div>
      
    );
};

export default Banner;