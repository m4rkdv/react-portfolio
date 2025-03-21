import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

function Main() {
  return (
    <div id='main'>
        <img className="w-full h-screen object-cover object-left" src="https://images.unsplash.com/photo-1623520527569-fee1da87f598?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Computadora portatil negra" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <section className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <article>
                    <h1 className='sm:text-3xl text-4xl font-bold text-gray-800'>Hola 👋,soy Marcos G Castella Del Valle</h1>
                        <h2 className='flex text-xs pt-4 text-gray-800'>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Soy Técnico Universitario en Programación 🎓',
                                    1500,
                                    'Soy Gym Lover 🏋️‍♂️',
                                    1000,
                                    'Soy Pet Owner 🐕',
                                    1000,
                                    'Soy Apasionado por la tecnología 💻',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </h2>
                </article>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaLinkedin className='cursor-pointer' size={20}/>
                    <FaGithub className='cursor-pointer' size={20}/>
                    <FaInstagram className='cursor-pointer' size={20}/>
                </div>
            </section>
        </div>        
    </div>
  )
}

export default Main