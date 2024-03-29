import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price, img, description } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        // if(phone.length > 10){
        //     alert('phone number should be 10 characters or longer')
        // }


        fetch('https://computer-mania-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order place  successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));

    }
    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img} alt="" className="w-full rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold"> You are booking {title} service.</h1>
                            <p className="py-2 text-xl">{description}</p>
                            <p className="py-2 text-xl">{price}</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-5'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full " />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full " />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full " />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full " readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your Message"></textarea>
                <input type="submit" value="Place your order" className='btn' />
            </form>
        </div>
    );
};

export default Checkout;