import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div className=" h-full z-[-1]
      bg-no-repeat bg-cover bg-center  w-screen absolute top-0 left-0
      bg-[url('../public/assets/home/background-home-mobile.jpg')]
      md:bg-[url('../public/assets/home/background-home-tablet.jpg')]
      xl:bg-[url('../public/assets/home/background-home-desktop.jpg')]"></div>
    <main className='flex items-center flex-col xl:flex-row'>
        <section className="p-6 flex flex-col items-center xl:ml-[10vw]">
        <p className=" text-xl xl:text-3xl xl:text-[2vw] text-color-secondary" >SO, YOU WANT TO TRAVEL TO</p>
        <h1 className="text-8xl md:text-9xl xl:text-[10vw] font-mono my-5 ">SPACE</h1>
        <p className="text-color-secondary md:text-xl xl:text-[1.5vw] xl:leading-7 text-center max-w-[250px] md:max-w-[380px] xl:max-w-[25vw]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! </p>
        </section>
        <Link href="/Destination" className=' mt-[10vh] md:bottom-16 xl:right-28 xl:bottom-28'>
          <button className="rounded-full bg-white w-[150px] h-[150px] md:w-[242px] md:h-[242px] xl:h-[300px] xl:w-[300px] text-black text-2xl md:text-4xl font-mono cursor-pointer drop-shadow-[0px_0px_40px_50px_rgba(255,255,255,1)]">EXPLORE</button>
          </Link>
    </main>
    </>
    
  )
}
