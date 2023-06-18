import React from 'react';
import AllReview from '../../AllReview/AllReview';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Game from '../Game/Game';
import Products from '../Product/Products';
import Records from '../Records/Records';
import Services from '../Services/Services';
import MobileSer from '../MobileService/MobileSer';
import VideoSec from '../VideoSec/VideoSec';
import Faq from '../FAQ/Faq';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <ChooseUs></ChooseUs>
            <Records></Records>
            <AllReview></AllReview>
            <MobileSer></MobileSer>
            <VideoSec></VideoSec>
            <Products></Products>
            <Game></Game>
            <Faq></Faq>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;