import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Products from '../Product/Products';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <ChooseUs></ChooseUs>
            <Products></Products>
        </div>
    );
};

export default Home;