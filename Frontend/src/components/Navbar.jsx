import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <div className='flex items-center  py-6 font-medium'>
            <div className=' mr-14'> <Link to='/'> <img className='w-[6rem] h-[6rem]' src={assets.favicon} alt="Not Load" /></Link></div>

            <ul className="hidden  sm:flex gap-5 text-lg text-transparent bg-clip-text group bg-black ">
                <NavLink
                    to="/"
                    className="flex flex-col items-center text-transparent bg-clip-text bg-gradient-to-b from-black to-black hover:from-yellow-500 hover:to-blue-950 transition-all duration-300"
                >
                    <p>Home</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>


                <NavLink to='/Services' className="flex flex-col items-center text-transparent bg-clip-text bg-gradient-to-b from-black to-black hover:from-yellow-500 hover:to-blue-950 transition-all duration-300">
                    <p >Services</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
                </NavLink>
                <NavLink to='/About' className="flex flex-col items-center text-transparent bg-clip-text bg-gradient-to-b from-black to-black hover:from-yellow-500 hover:to-blue-950 transition-all duration-300">
                    <p>About</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/Enquiries' className="flex flex-col items-center text-transparent bg-clip-text bg-gradient-to-b from-black to-black hover:from-yellow-500 hover:to-blue-950 transition-all duration-300">
                    <p>Enquiries</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/JoinUs' className="flex flex-col items-center text-transparent bg-clip-text bg-gradient-to-b from-black to-black hover:from-yellow-500 hover:to-blue-950 transition-all duration-300">
                    <p>Join Our Team</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>
            <div className='BtnExploreMore ml-auto'>
                <button className="relative px-4 py-2 bg-[#010166] text-white rounded-lg overflow-hidden group">
                    <Link to='/About'><span className="z-10 relative">Explore More</span></Link>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#010166] via-[#010166] to-[#cc9832] group-hover:w-full w-0 transition-all duration-700 ease-in-out"></span>
                </button>
            </div>

            <div><img src={assets.menu_icon} alt=""  className='w-5 cursor-pointer sm:hidden ml-4'/></div>
        </div>
    )
}

export default Navbar
