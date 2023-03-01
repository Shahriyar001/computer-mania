import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='bg-slate-900 px-5 py-10'>
            <div className='text-center mt-10 mb-5'>
                <p className='text-3xl font-bold'>Products</p>
                <p className='text-xl font-semibold'>**************</p>
                <p className='text-2xl font-semibold'>Products you can buy from us</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>

        </div>
    );
};

export default Products;