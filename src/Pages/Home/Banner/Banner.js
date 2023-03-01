import React from 'react';
import banner from '../../../assets/images/banner/banner001.jpg';
import banner2 from '../../../assets/images/banner/banner11.jpg';
import banner3 from '../../../assets/images/banner/banner31.jpg';
import banner4 from '../../../assets/images/banner/banner2.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner} alt='/' className="w-full" />
                <div className="absolute text-center text-white bg-slate-900 opacity-90 w-2/5 px-2 pt-8 h-full mr-10  justify-between transform -translate-y-1/2 left-20  top-1/2">
                    <h1 className="lg:text-5xl mx-auto md:text-2xl text-sm font-bold lg:mt-20 md:mt-10 mt-5  text-white">Computer repairs of <br /> any complexity</h1>
                    <p className='lg:text-2xl lg:my-10 md:my-3 my-1 text-sm md:display-hidden '>We have a group of skilled workers <br /> who work with care and responsibility. <br />
                        Here you can share your problems <br /> with us with hesitation. Besides, <br /> various computer parts are available with <br /> us,   which we provide to our customers <br /> at low cost.
                    </p>
                    <div className='flex justify-center '>
                        <button className="btn btn-active btn-accent mr-3 text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg">More Info</button>
                        <button className="btn btn-active btn-secondary ml-3 text-white  btn-xs sm:btn-sm md:btn-md lg:btn-lg">All Services</button>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} alt='/' className="w-full" />
                <div className="absolute text-center text-white bg-slate-900 opacity-90 w-2/5 px-2 pt-8 h-full mr-10  justify-between transform -translate-y-1/2 left-20  top-1/2">
                    <h1 className="lg:text-5xl mx-auto md:text-2xl text-sm font-bold lg:mt-20 md:mt-10 mt-5  text-white">Data recovery from <br /> failed hard drive.</h1>
                    <p className='lg:text-2xl lg:my-10 md:my-3 my-1 text-sm md:display-hidden '>We have a group of skilled workers <br /> who work with care and responsibility. <br />
                        Here you can share your problems <br /> with us with hesitation. Besides, <br /> various computer parts are available with <br /> us,   which we provide to our customers <br /> at low cost.
                    </p>
                    <div className='flex justify-center '>
                        <button className="btn btn-active btn-accent mr-3 text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg">More Info</button>
                        <button className="btn btn-active btn-secondary ml-3 text-white  btn-xs sm:btn-sm md:btn-md lg:btn-lg">All Services</button>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} alt='/' className="w-full" />
                <div className="absolute text-center text-white bg-slate-900 opacity-90 w-2/5 px-2 pt-8 h-full mr-10  justify-between transform -translate-y-1/2 left-20  top-1/2">
                    <h1 className="lg:text-5xl mx-auto md:text-2xl text-sm font-bold lg:mt-20 md:mt-10 mt-5  text-white">Computer repairs of <br /> any complexity</h1>
                    <p className='lg:text-2xl lg:my-10 md:my-3 my-1 text-sm md:display-hidden '>We have a group of skilled workers <br /> who work with care and responsibility. <br />
                        Here you can share your problems <br /> with us with hesitation. Besides, <br /> various computer parts are available with <br /> us,   which we provide to our customers <br /> at low cost.
                    </p>
                    <div className='flex justify-center '>
                        <button className="btn btn-active btn-accent mr-3 text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg">More Info</button>
                        <button className="btn btn-active btn-secondary ml-3 text-white  btn-xs sm:btn-sm md:btn-md lg:btn-lg">All Services</button>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} alt='/' className="w-full" />
                <div className="absolute text-center text-white bg-slate-900 opacity-90 w-2/5 px-2 pt-8 h-full mr-10  justify-between transform -translate-y-1/2 left-20  top-1/2">
                    <h1 className="lg:text-5xl mx-auto md:text-2xl text-sm font-bold lg:mt-20 md:mt-10 mt-5  text-white">Computer repairs of <br /> any complexity</h1>
                    <p className='lg:text-2xl lg:my-10 md:my-3 my-1 text-sm md:display-hidden '>We have a group of skilled workers <br /> who work with care and responsibility. <br />
                        Here you can share your problems <br /> with us with hesitation. Besides, <br /> various computer parts are available with <br /> us,   which we provide to our customers <br /> at low cost.
                    </p>
                    <div className='flex justify-center '>
                        <button className="btn btn-active btn-accent mr-3 text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg">More Info</button>
                        <button className="btn btn-active btn-secondary ml-3 text-white  btn-xs sm:btn-sm md:btn-md lg:btn-lg">All Services</button>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;