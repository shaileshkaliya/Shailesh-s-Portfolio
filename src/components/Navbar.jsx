import logo from '../assets/logo.png'
import { menu, close } from "../assets";
import { useState } from 'react';

const Navbar = () => {
  const[toggle,setToggle] = useState(true);
  const navtabs = ['About', 'Projects', 'Contact'];

  return (
    <>
    <nav className='w-full fixed top-0 z-20 bg-primary flex justify-between p-3 px-8'>
      <div className='h-auto cursor-pointer' onClick={() => {window.scrollTo(0,0)}}>
        <img  className='w-32 md:w-48 lg:w-64 m-2 ' src={logo} alt="Shailesh" />
      </div>

      <div className='sm:flex sm:gap-4 sm:justify-center sm:items-center md:text-xl sm:text-lg  hidden font-semibold '>
        {
          navtabs.map(
            (tab) => (
              <a href={`#${tab.toLowerCase()}`} key={tab}>{tab}</a>
            )
          )
        }
      </div>

      <div className='sm:hidden flex justify-center items-center'>
        <img className='w-6' src={toggle ? menu : close} alt=".." onClick={() => {setToggle(!toggle)}} />
      </div>
    </nav>

    {
      !toggle ? (
        <div className='w-fit flex flex-col gap-2 justify-center items-center text-base font-semibold fixed top-[55px]  right-6  sm:hidden z-10'>
        {
          navtabs.map(
            (tab) => (
              <a key={tab} href={`#${tab.toLowerCase()}`} onClick={() => {setToggle((prev) => !prev)}}>{tab}</a>
            )
          )
        }
      </div>
      ) : ( null ) 
    }

  
    </>
  )
}

export default Navbar