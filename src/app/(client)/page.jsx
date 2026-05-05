import HeroSection from '@/components/public-components/HomePageComponents/Hero/HeroSection';
import ProductsSection from '@/components/public-components/HomePageComponents/products/ProductsSection';
import TopCategorys from '@/components/public-components/HomePageComponents/topCaterorys/TopCategorys';
import React from 'react';

const Home = () => {
    return (
        <>
            <HeroSection />
            <TopCategorys />
            <ProductsSection />
        </>
    );
};

export default Home;