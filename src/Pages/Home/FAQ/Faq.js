import React from 'react';

const Faq = () => {
    return (
        <div className='mb-4 my-8'>
            <h2 className='text-5xl text-center '>FAQ</h2>
            <div className='my-3'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How long will my repair take?
                    </div>
                    <div className="collapse-content">
                        <p>Well that does depend on the nature of the repair. We endeavour to have the diagnosis complete within 24-48 hours. Dependent on the repair or service required it can be less than this.</p>
                    </div>
                </div>
            </div>
            <div className='my-3'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Do I need to make an appointment to bring my computer to you?
                    </div>
                    <div className="collapse-content">
                        <p>Well that does depend on the nature of the repair. We endeavour to have the diagnosis complete within 24-48 hours. Dependent on the repair or service required it can be less than this.</p>
                    </div>
                </div>
            </div>
            <div className='my-3'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Can a technician visit my home or office?
                    </div>
                    <div className="collapse-content">
                        <p>Offering a personal service is top of our list; you will speak directly to the person working on your computer so you can explain the situation in detail. We turnaround repairs quickly, we don’t send anything away to service centres and we don’t quote 5+ days for repairs. We don’t charge any upfront costs, you only pay for work once it’s completed and when you are happy with it.
                        </p>
                    </div>
                </div>
            </div>
            <div className='my-3'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How long will my repair take?
                    </div>
                    <div className="collapse-content">
                        <p>Well that does depend on the nature of the repair. We endeavour to have the diagnosis complete within 24-48 hours. Dependent on the repair or service required it can be less than this.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;