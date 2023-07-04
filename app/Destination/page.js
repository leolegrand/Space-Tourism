'use client'
import data from "../../data.json"

import React, { useState } from 'react';
import SubHeader from '@/components/SubHeader/SubHeader';
import Image from "next/image";

const Destination = () => {

  const [ind, setInd] = useState(0)

  const handleIndex = (number) => {
    setInd(number)
  }

 const destinations = data.destinations
 const currentDestination = destinations[ind]
    return (
      
        <main className="bg-no-repeat bg-cover bg-center h-full w-screen fixed top-0 left-0 
      bg-[url('../public/assets/destination/background-destination-mobile.jpg')]
      md:bg-[url('../public/assets/destination/background-destination-tablet.jpg')]
      xl:bg-[url('../public/assets/destination/background-destination-desktop.jpg')]">
        <SubHeader/>
        <section className="z-10 flex flex-col items-center ">
        <div className="h-[30vh] flex justify-center items-center"><img src={currentDestination.images.png} key={ind} alt="fsqddqsdqs" className=" max-w-[50%] translate-x-[250%] animate-slideIn" /></div>
          
          <nav className="w-full">
            <ul className="flex gap-8 w-full justify-center">{destinations.map((destination, index)=> 
              <li className= {index == ind ? "text-center border-b-2" : "text-center" } key={index}><button className="uppercase font-sans"  onClick={()=> handleIndex(index)}>{destination.name}</button></li>)}
            </ul>
          </nav>
          
          <h2 className="uppercase font-mono text-6xl mb-4 mt-6" >{currentDestination.name}</h2>
          <p className=" font-sans leading-6 text-center  text-color-secondary w-5/6">{currentDestination.description}</p>

          <hr className="w-11/12 opacity-30 my-5"/>
            <div className="flex flex-col items-center my-4">
              <h3 className=" text-color-secondary text-base mb-2">AVG. DISTANCE</h3>
              <p className=" text-3xl font-mono uppercase">{currentDestination.distance}</p>
            </div>
            <div className="flex flex-col items-center my-3">
              <h3 className=" text-color-secondary text-base mb-2">EST. TRAVEL TIME</h3>
              <p className=" text-3xl font-mono uppercase">{currentDestination.travel}</p>
            </div>
        </section>
    </main>
    );
};

export default Destination;