import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AllReview from '../AllReview/AllReview';

const Review = () => {
    const { _id, title, img, description } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregisterd';
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            customer: name,
            email,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Placed')
                    form.reset();
                }
            })
            .catch(er => console.error(er));


    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} alt="" className="w-full rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">{description}</p>
                        <form onSubmit={handlePlaceReview}>
                            <div className='grid grid-cols-1 '>
                                <input name='firstName' type="text" placeholder="First name" className="input input-bordered w-full my-1" />
                                <input name='lastName' type="text" placeholder="Last name" className="input input-bordered w-full my-1" />
                                <input name='email' type="email" placeholder={user?.email} className="input input-bordered w-full my-1" readOnly />
                            </div>
                            <textarea name='message' className="textarea textarea-bordered h-24 my-3 w-full" placeholder="Your Review"></textarea>
                            <input type="submit" className='btn btn-primary
                        ' value="PLace Review" />
                        </form>
                    </div>
                </div>
            </div>
            <AllReview></AllReview>
        </div>
    );
};

export default Review;