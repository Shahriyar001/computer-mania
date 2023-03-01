import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ProductCard = ({ product }) => {
    const { _id, img, price, title } = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <PhotoProvider>
                    <div className="foo">

                        <PhotoView key={_id} src={img}>
                            <img src={img} alt="" />
                        </PhotoView>

                    </div>
                </PhotoProvider>

                {/* <img src={img} alt="Shoes" /> */}

            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <p className='text-2xl text-blue-600 font-semibold'>Price: {price}</p>
                <div className="card-actions justify-end">

                    <button className="btn btn-primary">Buy Now</button>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;