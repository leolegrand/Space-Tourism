'use client'

import React, { useState } from 'react';
import {useWindowSize} from '../../lib/useWindowSize'
import logo from '../../public/assets/shared/logo.svg'
import iconClose from '../../public/assets/shared/icon-close.svg'
import iconHamburger from '../../public/assets/shared/icon-hamburger.svg'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isOpenAnimateClass, setIsOpenAnimateClass] = useState()
    const size = useWindowSize()
    const pathname = usePathname()
    console.log(pathname)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
        
        if(isOpen){
            setIsOpenAnimateClass('animate-slideOut')
        } else {
            setIsOpenAnimateClass('animate-slideIn')
        }
      }


      if(size.width < 768){

        return (<header className="flex flex-row justify-between items-center p-6 relative font-sans ">
        <Image src={logo} alt='logo' width={40}/>
        {isOpen ?
         <button className='z-10'> <Image src={iconClose} alt='icon close'  onClick={handleIsOpen}/></button>
          :
          <button className='z-10'><Image src={iconHamburger} alt='icon hamburger'  onClick={handleIsOpen} /></button>
         }           
        <nav className={"backdrop-blur-xl bg-gray-500/10 gap-10 absolute top-0 right-0 w-[70%]"
         + (isOpen ?  " flex flex-col h-screen gap-11 pt-40 pl-8 "+ isOpenAnimateClass : " flex flex-col h-screen gap-11 pt-40 pl-8 translate-x-full "+ isOpenAnimateClass)}>
            <Link href='/' className='flex' onClick={handleIsOpen}><span className='md:hidden xl:block font-bold mr-2'>00 </span>HOME</Link>
            <Link href='/Destination' className='flex' onClick={handleIsOpen}><span className='md:hidden xl:block font-bold mr-2'>01 </span>DESTINATION</Link>
            <Link href='/Crew' className='flex' onClick={handleIsOpen}><span className='md:hidden xl:block font-bold mr-2'>02 </span>CREW</Link>
            <Link href='/Technology' className='flex' onClick={handleIsOpen}><span className='md:hidden xl:block font-bold mr-2'>03 </span>TECHNOLOGY</Link>
        </nav>
    </header>)

      } else {

        return (<header className="flex flex-row justify-between items-center p-6 xl:mt-10 relative font-sans">
        <Image src={logo} alt='logo' width={40} className='xl:ml-10 '/>       
        <nav className="hidden backdrop-blur-xl bg-gray-500/10 md:flex gap-10 md:h-24 md:p-10 md:flex-row md:items-center md:justify-around xl:justify-center xl:gap-24 absolute top-0 right-0 w-[70%] animate-[slideIn_750ms]">
            <Link href='/' className='flex' onClick={handleIsOpen}><span className='md:hidden xl:block font-bold mr-2'>00 </span>HOME</Link>
            <Link href='/Destination' className='flex' onClick={handleIsOpen}><span className='md:hidden xl:block font-bold mr-2'>01 </span>DESTINATION</Link>
            <Link href='/Crew' className='flex' onClick={handleIsOpen}><span className='md:hidden xl:block font-bold mr-2'>02 </span>CREW</Link>
            <Link href='/Technology' className='flex' onClick={handleIsOpen}><span className='md:hidden xl:block font-bold mr-2'>03 </span>TECHNOLOGY</Link>
        </nav>
    </header>)
      }

    
};

export default Header;

