import React from 'react';
import img from '../../../assets/images/about_us/0N4A1186.jpg';

const About = () => {
    return (
        <div className='my-10'>
            <div className='text-center'>
                <p className='text-2xl  font-bold text-blue-600 mt-20'>About Us</p>
                <p className='text-xl font-semibold'>**************</p>
                <p className='text-2xl font-semibold'>Text about us</p>
            </div>
            <div className="hero mt-5 mb-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2'>
                        <img src={img} alt='/' className=" w-full rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-1/2 ml-5'>

                        <h1 className="text-xl font-bold mt-2">WORKING SINCE 2015</h1>
                        <p className="py-1"> Computer Mania was found in 2015 and initially focused on service. Over time, the company expanded its offering to include services. By 2015, thecompany had established itselt as a leader in its industry and was well positioned for future growth. <br /> One of the first major changes to Computer Mania came in 2015, when the company recived a significant investment from investor. This infusion of capital allowed the company to expand its operatios and invest in new technologies and infrastructure. </p>

                        <h1 className="text-xl font-bold mt-2">ANNUAL CERTIFICATION OF EMPLOYEES</h1>
                        <p className="py-1"> Expert employees are able to complete tasks more quickly and efficiently than their less-experienced counterparts. This can lead to increased productivity and a more streamlined workflow. Higher quality work: Expert employees are able to produce higher quality work, as they have a deeper understanding of the tasks they are performing and the standards that need to be met. Enhanced problem-solving skills: Expert employees are often better equipped to solve complex problems, as they have a more comprehensive understanding of the issues at hand and the tools and strategies needed to address them. </p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;