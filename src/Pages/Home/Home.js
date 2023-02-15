import React from 'react';
import Work from '../Work/Work';
import About from './About/About';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Work></Work>
           <About></About>
           <Services></Services>
        </div>
    );
};

export default Home;