import React, { useEffect, useState } from 'react';
import RecordCard from './RecordCard';

const Records = () => {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        fetch('record.json')
            .then(res => res.json())
            .then(data => setRecords(data))
    }, [])
    return (
        <div className='my-10 py-8'>
            <div className='text-center mt-10 mb-5'>
                <p className='text-3xl py-3 mb-3 font-bold'>OUR STATISTICS SO FAR</p>

            </div>
            <div className='grid  gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                {
                    records.map(record => <RecordCard
                        key={record._id}
                        record={record}
                    ></RecordCard>)
                }
            </div>

        </div>
    );
};

export default Records;