import Image from 'next/image';
import React from 'react';
import RegisterForm from './RegisterForm';
export const metadata = {
  title: "Swoo Tech Mart - Register",
  description: "Online store for all your tech needs",
};
const Register = () => {
    return (
        <section className='w-full max-w-325 mx-auto px-5 h-screen flex justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-6 mt-10 gap-10 w-[80%]'>
            <div className='authLayoutImage col-span-2'>
                <Image src="/auth.svg" alt="auth layout image" width={400} height={400} />
            </div>
            <div className='col-span-4'>
                <h2 className='text-3xl font-bold mb-5'>Create an account</h2>
                <div className='auth_form'>
                    <RegisterForm />
                </div>
            </div>
            </div>
        </section>
    );
};

export default Register;