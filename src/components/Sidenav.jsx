import React,{useState} from 'react'
import { AiOutlineMenu,AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

export const Sidenav = () => {
  
  const [nav, setNav] = useState(false);
  const handleNav = () =>
    {
      setNav(!nav);
      console.log('state change',nav);
    };
  return (
    <div>
        <AiOutlineMenu 
          onClick={handleNav} 
          className='absolute top-4 right-4 z-[99] md:hidden'
        />
        {nav ? (
            <div className='fixed top-0 left-0 w-full h-screen bg-white/90 flex flex-col
             justify-center items-center z-20'>
                <a
                  href='#'
                  className='w-[75%] flex justify-center items-center rounded-full
                  shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                >
                  <AiOutlineHome size={20} />
                  <span className='pl-4'>
                    Home
                  </span>
                </a>
                <a
                  href='#'
                  className='w-[75%] flex justify-center items-center rounded-full
                  shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                >
                  <GrProjects size={20} />
                  <span className='pl-4'>
                    Work
                  </span>
                </a>
                <a
                  href='#'
                  className='w-[75%] flex justify-center items-center rounded-full
                  shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                >
                  <AiOutlineProject size={20} />
                  <span className='pl-4'>
                    Projects
                  </span>
                </a>
                <a
                  href='#'
                  className='w-[75%] flex justify-center items-center rounded-full
                  shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                >
                  <BsPerson size={20} />
                  <span className='pl-4'>
                    Resume
                  </span>
                </a>
                <a
                  href='#'
                  className='w-[75%] flex justify-center items-center rounded-full
                  shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                >
                  <AiOutlineMail size={20} />
                  <span className='pl-4'>
                    Contact
                  </span>
                </a>
            </div>
          )
          :(
            ''
          )
        }
        <div className='md:block hidden fixed top-[25%] z-10'>
          <div className='flex flex-col'>
            <a href='#main' title='Home' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineHome size={20} />
            </a>
            <a href='#work' title='Trabajo' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <GrProjects size={20} />
            </a>
            <a href='#projects' title='Proyectos' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineProject size={20} />
            </a>
            <a href='#resume' title='CV' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsPerson size={20} />
            </a>
            <a href='#contact' title='Contacto' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail size={20} />
            </a>
          </div>
        </div>
    </div>
  )
}