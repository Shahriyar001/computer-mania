import React, { useEffect, useState } from 'react';
import ChooseCard from './ChooseCard';

const ChooseUs = () => {
    const [chooses, setChoose] = useState([]);
    useEffect(() => {
        fetch('chooseus.json')
            .then(res => res.json())
            .then(data => setChoose(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                <p className='text-3xl font-bold'>WHY CHOOSE US</p>
                <p className='text-xl font-semibold'>**************</p>
                <p className='text-xl font-semibold'>Our main difference</p>

                <p className='text-xl mt-10 mb-5 mx-20'> Eum sint asperiores fuga saepe illum distinctio sunt! Nostrum natus nemo commodi quia consequuntur quidem soluta, error voluptas minus aliquid exercitationem, quae possimus expedita fugiat atque amet sapiente voluptatibus porro ducimus praesentium cumque dolores sint asperiores ipsa! Quod temporibus expedita voluptatibus nam id esse, fugiat molestias veritatis quam a qui ut, repellat aliquam ducimus et dolore iure libero facere fugit ex, dolor dolores dicta ratione. Laudantium, assumenda nihil! Ad quasi impedit assumenda.</p>
            </div>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10'>
                {
                    chooses.map(choose => <ChooseCard
                        key={choose._id}
                        choose={choose}
                    ></ChooseCard>)
                }
            </div>

        </div>
    );
};

export default ChooseUs;