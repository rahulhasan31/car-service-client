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
      
  <div className="carousel w-full py-10">

    {
      bannerData.map(slide=> <BannerDetaile
       key={slide.id}
       slide={slide}
      ></BannerDetaile>)
    }


</div>
      
    );
};

export default Banner;