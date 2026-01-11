import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo/logo.png'
import { FiArrowUpRight } from "react-icons/fi";



const Navbar = () => {
    const NavItems = (
        <>
            <li className='hover:bg-[#FFECDB] rounded'>
                <Link to="/">হোম</Link>
            </li>
            <li className='hover:bg-[#FFECDB] rounded'>
                <Link to='/'>আমাদের সম্পর্কে</Link>
            </li>
            <li className='hover:bg-[#FFECDB] rounded'>
                <Link to='/'>কোর্স সমূহ</Link>
            </li>
            <li className='hover:bg-[#FFECDB] rounded'>
                <Link to='/'>শিক্ষম মন্ডলী</Link>
            </li>
            <li className='hover:bg-[#FFECDB] rounded'>
                <Link to='/'>মতামত</Link>
            </li>
            <li className='hover:bg-[#FFECDB] rounded'>
                <Link to='/'>সংবাদ</Link>
            </li>
            <li className='hover:bg-[#FFECDB] rounded'>
                <Link to='/'>যোগাযোগ</Link>
            </li>
        </>
    )
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {NavItems}
                    </ul>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <img className='h-16 w-16' src={logo} alt="" />
                    <p className='text-[#F68319]'>ব্রাইট একাডেমি<br /> কেয়ার</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2.5">
                    {NavItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex justify-center items-center gap-2 text-white p-1.5 rounded-xl px-3 bg-[#F68319]'>
                    <Link to="/">Login</Link>
                    <FiArrowUpRight className=' text-2xl w-[30px] h-[30px] bg-[#F68319] shadow-xl/30 rounded-sm' />

                </div>
            </div>
        </div>
    );
};

export default Navbar;