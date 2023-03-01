import React from 'react';

const RecordCard = ({ record }) => {
    const { title, description } = record;
    return (
        <div className="card bg-slate-300 shadow-xl rounded-full">
            <div className="card-body text-center text-black">
                <h2 className="card-title font-bold  my-2">{title}</h2>
                <p className='font-semibold text-5xl'>{description}</p>

            </div>
        </div>
    );
};

export default RecordCard;