
import Link from 'next/Link';
import React from 'react';
import {AiOutlinkMenu, AiOutlineClose} from 'react-icons/ai' ;


const Navbar =() => {
    return (
        <div className='fixed left-0 top-0 w-full z-15 ease-in duration-400'>
        <div className='max-w-[1390px] m-auto flex justify-between items-center p-3 text-white'>
                <Link href='/'>
                <h1 className='font-bold text-6xl'>Turtl</h1> 
                </Link>
                <ul className='hidden sm:flex'>
                    <li className='p-4'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/uploadImage'>About us </Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                    <li className='p-4'>
                      {/* <Link href='/login'>LogIn</Link> */}
                      <button className="bg-blue-400 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-green-500" type= "submit">
                            {/* <FaUser className="mr-2"/> */}
                           <Link href='/login'>LogIn</Link>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        )
}

export default Navbar