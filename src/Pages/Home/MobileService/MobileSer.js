import React from 'react';

const MobileSer = () => {
    return (
        <div className='my-8 pb-6'>
            <div className='my-10 text-center'>
                <p className='text-2xl  font-bold text-blue-500 mt-20'>Mobile Service</p>
                <p className='text-xl font-semibold'>**************</p>
                <p className='text-2xl font-semibold'>Recent Launch</p>
            </div>
            <div className='mt-3 mb-8'>
                <div className="hero mt-3 mb-8">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className='w-1/2'>
                            <div className="h-96 carousel carousel-vertical rounded-box">
                                <div className="carousel-item h-full">
                                    <img src="https://media.istockphoto.com/id/494389158/photo/process-of-mobile-phone-repair.jpg?s=612x612&w=0&k=20&c=lSz-DzlMe7rjTXGSMk9TSc4Bwp_MUD0r-aWaL80aa0o=" alt='/' />
                                </div>
                                <div className="carousel-item h-full">
                                    <img src="https://images.pexels.com/photos/132700/pexels-photo-132700.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='/' />
                                </div>
                                <div className="carousel-item h-full">
                                    <img src="https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='/' />
                                </div>

                            </div>
                        </div>
                        <div className='w-1/2 p-5'>
                            <h1 className="text-5xl font-bold">Take our new service</h1>
                            <p className="py-6">Recently we add new service in our service sector. we stated to repair mobile phone. we have skilled and experienced employees who work with responsibility and sincerely</p>
                            <button className="btn btn-primary">Get More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileSer;