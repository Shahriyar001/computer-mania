import React from 'react';
import AllReview from '../../AllReview/AllReview';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Game from '../Game/Game';
import Products from '../Product/Products';
import Records from '../Records/Records';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <ChooseUs></ChooseUs>
            <Records></Records>
            <AllReview></AllReview>
            <Products></Products>
            <Game></Game>
        </div>
    );
};

export default Home;