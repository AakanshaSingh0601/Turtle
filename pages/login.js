import React from 'react';
import NextLink from 'next/Link';
import { icons } from 'react-icons';
import {FaLock, FaUser} from  'react-icons/fa'

const login =() => {
    return (
        <div className="bg-gradient-to-r from-black via-yellow to-green=300 block h-screen items-center justify-center p-4 md:flex"  >
        
             {/* form */}
             <div className="bg-white flex flex-col items-center p-20 space-y-10  md:100">
                <div className="flex flex-col items-center">
                    <h1 className="font-medium text-black text-xl">Welcome Back</h1>
                    <p>Login to your account</p>
                </div>
                {/* imputs*/}
                <form className="flex flex-col items-center space-y-4">
                    <div className="relative">
                        <span className="absolute flex inset-y-0 items-center pl-4 text-gray-500"><FaUser /></span>
                        <input className="border border-gray-350 outline-none placeholder-gray-600 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-blue-400" placeholder="Username" type="text" />
                        </div>
                        <div className="relative">
                        <span className="absolute flex inset-y-0 items-center pl-4 text-gray-500"><FaLock /></span>
                        <input className="border border-gray-350 outline-none placeholder-gray-600 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-blue-400" placeholder="Password" type="password" />
                        </div>
                        <button className="bg-blue-400 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-blue-500" type= "submit">
                            <FaUser className="mr-2"/>
                          <a href='profile'> Login Now</a>
                        </button>

                        </form>

                        <div className="flex flex-col items-center">
                            <p className="italic">
                                Join us now.
                            <a className="ml-1 text-blue-500 hover:underline">Register here.</a> 
                                </p>
                                <p className="italic">
                                    Lost your password?
                                    <a className="ml-1 text-blue-500 hover:underline">Reset password.</a>
                                </p>


                        </div>
                        </div>
                        </div>

    )
}
export default login