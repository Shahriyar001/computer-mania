import React from 'react';

const Reviews = ({ oneReview }) => {
    const { serviceName, customer, message } = oneReview;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title my-2">{serviceName}</h2>
                <p className='font-semibold'>{customer}</p>
                <p>{message}</p>

            </div>
        </div>
    );
};

export default Reviews;