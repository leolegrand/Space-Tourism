'use client'

import SubHeader from '@/components/SubHeader/SubHeader';
import React from 'react';

const Technology = () => {
    return (
        <main className="bg-no-repeat bg-cover bg-center h-screen w-screen fixed top-0 left-0 -z-10
      bg-[url('../public/assets/technology/background-technology-mobile.jpg')]
      md:bg-[url('../public/assets/technology/background-technology-tablet.jpg')]
      xl:bg-[url('../public/assets/technology/background-technology-desktop.jpg')]">
        <SubHeader/>
    </main>
    );
};

export default Technology;