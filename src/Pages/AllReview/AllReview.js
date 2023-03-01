import React, { useEffect, useState } from 'react';
import Reviews from './Reviews';

const AllReview = () => {
    const [allReviews, setAllReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])
    return (
        <div className='my-10 py-8'>
            <div className='text-center mt-10 mb-5'>

                <p className='text-5xl font-bold'>Customers Review</p>
                <p className='text-xl font-semibold'>**************</p>
                <p className='text-3xl font-bold'>Customers Review</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {
                    allReviews.map(oneReview => <Reviews
                        key={oneReview._id}
                        oneReview={oneReview}
                    ></Reviews>)
                }
            </div>

        </div>
    );
};

export default AllReview;