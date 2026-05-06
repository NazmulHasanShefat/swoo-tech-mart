import React from 'react';
import CheckoutForm from './CheckoutForm';

const page = () => {
    return (
        <section className="px-5 py-2 grid grid-cols-1 md:grid-cols-2 pb-5 w-full max-w-325 mx-auto">
            <div className=''>
                <h1 className='text-2xl font-bold'>Checkout</h1>
                <div className='checkoutForm'>
                    <CheckoutForm />
                </div>
            </div>
            <div className=''> 
                <h2 className='text-gray-400'>Your order is being processed...</h2>
            </div>
        </section>
    );
};

export default page;