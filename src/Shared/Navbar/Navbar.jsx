import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo/logo.png';

const Navbar = () => {
    const NavItems = (
        <>
            <li>
                <Link to="/">হোম</Link>
                <Link to="/">আমাদের সম্পর্কে</Link>
                <Link to="/">কোর্সসমূহ</Link>
                <Link to="/">শিক্ষকমন্ডলী</Link>
                {/* <Link to="/"></Link>
            <Link to="/"></Link>
            <Link to="/"></Link> */}
            </li>
        </>
    )
    return (
        <div>
            <div className='w-[10%] h-10'>
                <img src={{ logo }} alt="" />
            </div>
            <div>
                <ul>
                    {NavItems}
                </ul>
            </div>
            <div></div>
        </div>
    );
};

export default Navbar;