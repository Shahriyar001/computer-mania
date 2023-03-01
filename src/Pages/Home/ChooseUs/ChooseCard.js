import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ChooseCard = ({ choose }) => {
    const { _id, img, title, description } = choose;
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure>
                <PhotoProvider>
                    <div className="foo">

                        <PhotoView key={_id} src={img}>
                            <img src={img} alt="" />
                        </PhotoView>

                    </div>
                </PhotoProvider>



            </figure>
            <div className="card-body">
                <div className='text-center'>
                    <h2 className="card-title  text-center">{title}</h2>
                </div>
                <p className='text-xl'>{description}</p>


            </div>
        </div>
    );
};

export default ChooseCard;