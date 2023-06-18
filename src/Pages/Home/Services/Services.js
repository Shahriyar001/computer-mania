import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://computer-mania-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mt-10 mb-5'>
                <p className='text-3xl font-bold'>Services</p>
                <p className='text-xl font-semibold'>**************</p>
                <p className='text-2xl font-semibold'>Services we provide</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

            {/* https://preview.themeforest.net/item/comrepair-computer-repair-services-wordpress-theme/full_screen_preview/19836952?_ga=2.265167239.962101431.1677188284-1665065071.1665491297 */}

        </div>
    );
};

export default Services;