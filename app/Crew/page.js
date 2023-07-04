'use client'

import SubHeader from '@/components/SubHeader/SubHeader';
import React from 'react';

const Crew = () => {
    return (
        <main className="bg-no-repeat bg-cover bg-center h-screen w-screen fixed top-0 left-0 -z-10
      bg-[url('../public/assets/crew/background-crew-mobile.jpg')]
      md:bg-[url('../public/assets/crew/background-crew-tablet.jpg')]
      xl:bg-[url('../public/assets/crew/background-crew-desktop.jpg')]">
        <SubHeader/>
    </main>
    );
};

export default Crew;