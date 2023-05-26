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
    const size = useWindowSize()
    const pathname = usePathname()

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
      }

      if(size.width < 768){
        return (<header className="flex flex-row justify-between items-center p-6 relative font-sans z-10  ">
        <Image src={logo} alt='logo' width={40}/>
        {isOpen ?
         <button className='z-10'> <Image src={iconClose} alt='icon close'  onClick={handleIsOpen}/></button>
          :
          <button className='z-10'><Image src={iconHamburger} alt='icon hamburger'  onClick={handleIsOpen} /></button>
         }           
        <nav className={"flex flex-col h-screen backdrop-blur-xl bg-gray-500/10 gap-10 fixed pt-40 pl-8 top-0 w-[70%] duration-500 "
         + (isOpen ? "right-0" : "right-[-100%]")}>
            <Link href='/' className={'flex hover:border-r-[3px] border-gray-500  '+ (pathname === '/' ? 'border-r-[3px] border-white hover:border-white ' : "" )} onClick={handleIsOpen}><span className='md:hidden xl:block font-bold mr-2'>00 </span>HOME</Link>
            <Link href='/Destination' className={'flex  hover:border-r-[3px] border-gray-500 '+ (pathname === '/Destination' ? 'border-r-[3px] border-white hover:border-white ' : "" )} onClick={handleIsOpen}><span className='md:hidden xl:block font-bold mr-2'>01 </span>DESTINATION</Link>
            <Link href='/Crew' className={'flex  hover:border-r-[3px] border-gray-500 '+ (pathname === '/Crew' ? 'border-r-[3px] border-white hover:border-white ' : "" )} onClick={handleIsOpen}><span className='md:hidden xl:block font-bold mr-2'>02 </span>CREW</Link>
            <Link href='/Technology' className={'flex hover:border-r-[3px] border-gray-500 '+ (pathname === '/Technology' ? 'border-r-[3px] border-white hover:border-white ' : "" )} onClick={handleIsOpen}><span className='md:hidden xl:block font-bold mr-2'>03 </span>TECHNOLOGY</Link>
        </nav>
    </header>)
      } else {
        return (<header className="flex flex-row justify-between items-center p-6 xl:mt-10 relative font-sans z-10">
        <Image src={logo} alt='logo' width={40} className='xl:ml-10 '/>       
        <nav className="hidden backdrop-blur-xl bg-gray-500/10 md:flex gap-10 md:h-24 md:p-10 md:flex-row md:items-center md:justify-around xl:justify-center xl:gap-24 absolute top-0 right-0 w-[70%] animate-[slideIn_750ms]">
            <Link href='/' className={'flex hover:border-b-[3px] hover:border-gray-500 pt-[35px] pb-[31px] '+ (pathname === '/' ? 'border-b-[3px] border-white hover:border-white ': "")} onClick={handleIsOpen}><span className='md:hidden  xl:block font-bold mr-2'>00 </span>HOME</Link>
            <Link href='/Destination' className={'flex  hover:border-b-[3px] hover:border-gray-500 pt-[35px] pb-[31px] '+ (pathname === '/Destination' ? 'border-b-[3px] border-white hover:border-white ': "")} onClick={handleIsOpen}><span className='md:hidden xl:block font-bold mr-2'>01 </span>DESTINATION</Link>
            <Link href='/Crew' className={'flex  hover:border-b-[3px] hover:border-gray-500 pt-[35px] pb-[31px] '+ (pathname === '/Crew' ? 'border-b-[3px] pt-[35px] border-white hover:border-white ': "")} onClick={handleIsOpen}><span className='md:hidden xl:block font-bold mr-2'>02 </span>CREW</Link>
            <Link href='/Technology' className={'flex  hover:border-b-[3px] hover:border-gray-500 pt-[35px] pb-[31px] '+ (pathname === '/Technology' ? 'border-b-[3px] border-white hover:border-white ': "")} onClick={handleIsOpen}><span className='md:hidden xl:block font-bold mr-2'>03 </span>TECHNOLOGY</Link>
        </nav>
    </header>)
      }

    
}

export default Header;

