import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WishListPage = () => {
    return (
        <section>
            <h1>Wish List</h1>
             <div className='orderItems'>
                <div className='grid grid-cols-12 order_item bg-gray-100/50 border-2 border-gray-200 rounded-lg p-5 mt-5'>
                  <div className='col-span-3 lg:col-span-1'>
                    <Image src={"/tablet.png"} width={50} height={50} alt="product image" />
                  </div>
                  <div className='col-span-8 lg:col-span-10 flex flex-col lg:flex-row justify-between'>
                    <div className='md:flex items-center gap-x-5 flex-wrap gap-y-2'>
                    <h2>
                      <Link href={"/"} className='underline line-clamp-2 hover:text-green-500 '>
                      Laptop asfdsa fsda f dsa f sdaf dsa f sad f sadf  asd f sad asdf  sadf sadf sad f sadf sad f asdf sa df sdaf sd af asd f dsaf sda f asdf asd f
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nulla placeat necessitatibus dolore, asperiores praesentium in mollitia veniam facilis repellat dolores debitis minus odit totam doloremque! Laboriosam debitis, perferendis amet rem provident accusamus repellendus ipsum saepe tenetur dolor quas velit possimus cupiditate sint nemo temporibus quos ullam laudantium quaerat assumenda!
                      </Link>
                      </h2>
                    <p className='text-xs text-gray-400'>Price: $500</p>
                    <p className='text-xs text-gray-400'>OrderId: #DE500</p>
                    <p className='text-xs text-gray-400'>Quantity: 1</p>
                     <div className='px-3 w-max rounded-lg bg-green-300/50 border-2 border-green-300 text-green-500 text-xs h-max'>Delivered</div>
                    </div>
                  </div>
                   
                </div>
            </div>
        </section>
    );
};

export default WishListPage;