import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <PhotoProvider>
                    <div className="foo">

                        <PhotoView key={_id} src={img}>
                            <img src={img} alt="" />
                        </PhotoView>

                    </div>
                </PhotoProvider>

                {/* <img src={img} alt="Shoes" /> */}

            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className='text-2xl text-blue-600 font-semibold'>Price: {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary ">Book Now</button>
                    </Link>
                    <Link to={`/review/${_id}`}>
                        <button className="btn btn-primary ">Review</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;