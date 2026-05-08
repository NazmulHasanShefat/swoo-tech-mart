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
            <div className='grid grid-cols-1 gap-10 md:grid-cols-12'>
                <div className='col-span-2'>
                    <FiltersOptions min={min} max={max}/>
                </div>
                <div className='col-span-10'>
                    <h2>All Products</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                    <AllProductCard />
                    <AllProductCard />
                    <AllProductCard />
                    <AllProductCard />
                    <AllProductCard />
                    <AllProductCard />
                    <AllProductCard />
                    <AllProductCard />
                    <AllProductCard />
                    <AllProductCard />
                    <AllProductCard />
                    <AllProductCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPage;