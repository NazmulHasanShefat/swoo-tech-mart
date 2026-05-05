import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <section className='w-full h-screen flex flex-col justify-center items-center gap-5'>
            <Image src={"/notFound.jpg"} width={300} height={300} alt="not found" />
            <h1 className='text-4xl font-bold'>Page Not Found</h1>
            <Link  href={"/" } className='py-2 px-4 bg-green-500 text-white rounded-lg'>Go Back Home</Link>
        </section>
    );
};

export default NotFoundPage;