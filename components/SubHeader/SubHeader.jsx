import { usePathname } from 'next/navigation';
import React from 'react';

const SubHeader = () => {

    const pathname = usePathname()

    const titles = [{
        "pathname" : "/Destination",
        "number" : "01",
        "title" : "Pick your destination"
    },
    {
        "pathname" : "/Crew",
        "number" : "02",
        "title" : "Meet your crew"
    },
    {
        "pathname" : "/Technology",
        "number" : "03",
        "title" : "Space launch 101"
    }]

    const subHeader = titles.filter((i)=>i.pathname === pathname)

    return (
        <h1 className='mt-24 md:mt-32 ml-6 mr-6 uppercase text-xl text-center md:text-left  mb-8 '><span className='mr-2 opacity-60'>{subHeader[0].number}</span>{subHeader[0].title}</h1>
    );
};

export default SubHeader;