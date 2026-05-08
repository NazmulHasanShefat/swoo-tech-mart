import React from 'react';
import AllProductCard from './AllProductCard';
import FiltersOptions from './FiltersOptions';

const ProductPage = async ({searchParams}) => {
    const myParams = await searchParams;
    const min = myParams.min
    const max = myParams.max
    return (
        <section className='w-full max-w-325 mx-auto px-5'>
            <h1>Shop page</h1>
            <div className='grid grid-cols-1 lg:gap-10 md:gap-5 lg:grid-cols-12 w-full'>
                <div className='col-span-2 md:col-span-2'>
                    <FiltersOptions min={min} max={max}/>
                </div>
                <div className='col-span-12 md:col-span-10 w-full'>
                    <h2>All Products</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                    <AllProductCard />
                    <AllProductCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPage;