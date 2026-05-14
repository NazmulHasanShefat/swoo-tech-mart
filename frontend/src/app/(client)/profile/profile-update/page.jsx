import React from 'react';

const page = () => {
    return (
        <section className='p-5'>
            <h1 className='text-2xl font-semibold lg:text-3xl'>Update Profile</h1>
            <form className='input-fuilds gap-x-7 gap-y-3 grid grid-cols-1 md:grid-cols-2'>
                <div className='flex flex-col'>
                    <div>
                    <label htmlFor="name">Name</label>
                    </div>
                    <input type="text" name="name" id="name" className='border focus:ring-2 focus:ring-green-300/50 outline-0  border-gray-200 w-full py-1 px-2 rounded-lg '/>
                </div>
                <div className='flex flex-col'>
                    <div>
                    <label htmlFor="name">Email</label>
                    </div>
                    <input type="text" name="email" id="email" className='border focus:ring-2 focus:ring-green-300/50 outline-0 border-gray-200 w-full py-1 px-2 rounded-lg '/>
                </div>
                <div className='flex flex-col'>
                    <div>
                    <label htmlFor="name">Phone</label>
                    </div>
                    <input type="text" name="phone" id="phone" className='border focus:ring-2 focus:ring-green-300/50 outline-0 border-gray-200 w-full py-1 px-2 rounded-lg '/>
                </div>
                <div className='flex flex-col'>
                    <div>
                    <label htmlFor="name">Current adress</label>
                    </div>
                    <input type="text" name="phone" id="phone" className='border focus:ring-2 focus:ring-green-300/50 outline-0 border-gray-200 w-full py-1 px-2 rounded-lg '/>
                </div>
                <div className='flex flex-col'>
                    <div>
                    <label htmlFor="name">Parmanent Adress</label>
                    </div>
                    <input type="text" name="phone" id="phone" className='border focus:ring-2 focus:ring-green-300/50 outline-0 border-gray-200 w-full py-1 px-2 rounded-lg '/>
                </div>
            </form>
        </section>
    );
};

export default page;