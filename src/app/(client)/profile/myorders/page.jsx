import ButtonPrimary from '@/components/ui/ButtonPrimary';
import Image from 'next/image';
import React from 'react';

const MyOrderPage = () => {
    return (
        <section className='p-5'>
            <h1 className='text-2xl md:text-4xl font-bold'>My Orders</h1>
            <div className='orderItems'>
                <div className='grid grid-cols-12 order_item bg-gray-100/50 border-2 border-gray-200 rounded-lg p-5 mt-5'>
                  <div className='col-span-3 lg:col-span-1'>
                    <Image src={"/tablet.png"} width={50} height={50} alt="product image" />
                  </div>
                  <div className='col-span-8 lg:col-span-11 flex flex-col lg:flex-row justify-between'>
                    <div>
                    <h2>Laptop</h2>
                    <p className='text-xs text-gray-400'>Price: $500</p>
                    <p className='text-xs text-gray-400'>OrderId: #DE500</p>
                    <p className='text-xs text-gray-400'>Quantity: 1</p>
                     <div className='px-3 w-max rounded-lg bg-green-300/50 border-2 border-green-300 text-green-500 text-xs h-max'>Delivered</div>
                    </div>
                    <div className='flex items-center gap-3 mt-3 md:mt-0'>
                    <ButtonPrimary className={"h-max cursor-pointer"} color={"green"}>
                      View Details
                    </ButtonPrimary>
                    </div>
                  </div>
                   
                </div>
            </div>
        </section>
    );
};

export default MyOrderPage;