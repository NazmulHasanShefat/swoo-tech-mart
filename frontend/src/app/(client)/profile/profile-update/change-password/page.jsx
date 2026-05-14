import ButtonPrimary from '@/components/ui/ButtonPrimary';
import React from 'react';

const ChangePasswordPage = () => {
    return (
        <section className='p-5'>
            <h1 className='text-2xl font-semibold lg:text-3xl'>Update Profile</h1>
            <form className='input-fuilds '>
                <div className='flex flex-col'>
                    <div>
                    <label htmlFor="name">Old password</label>
                    </div>
                    <input type="password" name="name" id="name" className='border focus:ring-2 focus:ring-green-300/50 outline-0  border-gray-200 w-full py-1 px-2 rounded-lg '/>
                </div>
                <div className='flex flex-col'>
                    <div>
                    <label htmlFor="name">New Password</label>
                    </div>
                    <input type="password" name="name" id="name" className='border focus:ring-2 focus:ring-green-300/50 outline-0  border-gray-200 w-full py-1 px-2 rounded-lg '/>
                </div>
                <div className='flex flex-col'>
                    <div>
                    <label htmlFor="name">Confirm password</label>
                    </div>
                    <input type="password" name="name" id="name" className='border focus:ring-2 focus:ring-green-300/50 outline-0  border-gray-200 w-full py-1 px-2 rounded-lg '/>
                </div>
                <ButtonPrimary type={`submit`} color={`green`} className={`my-2 cursor-pointer`}>Confirm Changes</ButtonPrimary>
            </form>
        </section>
    );
};

export default ChangePasswordPage;