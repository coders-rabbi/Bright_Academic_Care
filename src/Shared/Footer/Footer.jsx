import React from 'react';
import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='grid grid-cols-3 bg-[#EEF3F1] py-12'>
            <div className='flex justify-center'>
                <div className='border-r'>
                    <div className='flex items-center gap-3 mb-5'>
                        <img className='w-20 h-20' src={logo} alt="logo" />
                        <h3 className='text-[#F68319]'>ব্রাইট একাডেমি<br /> কেয়ার</h3>
                    </div>
                    <p className='text-[14px] m-4'>মানসম্মত শিক্ষা ও যত্নশীল পরিচর্যায় আপনার<br /> সন্তানের উজ্জ্বল ভবিষ্যৎ গড়ুন। আমরা প্রতিটি<br /> শিক্ষার্থীর সফলতার জন্য প্রতিশ্রুতিবদ্ধ।</p>
                    <button className='flex justify-center items-center gap-2 text-white p-1.5 rounded-xl px-3 bg-[#F68319]'>
                        <Link>যোগাযোগ</Link>
                        <FiArrowUpRight className=' text-2xl w-[30px] h-[30px] bg-[#F68319] shadow-xl/30 rounded-sm'></FiArrowUpRight>

                    </button>
                </div>
            </div>

            <div className='flex justify-around'>
                <div className='border-r pe-4'>
                    <h2 className='mb-5 text-xl font-semibold'>দ্রুত লিংক</h2>
                    <ul>
                        <li className='mt-1'>হোম</li>
                        <li className='mt-1'>আমাদের সম্পর্কে</li>
                        <li className='mt-1'>কোর্স সমূহ</li>
                        <li className='mt-1'>শিক্ষকমন্ডলী</li>
                        <li className='mt-1'>সংবাদ</li>
                        <li className='mt-1'>গ্যালারি</li>
                    </ul>
                </div>
                <div className='border-r pr-4'>
                    <h2 className='mb-5 text-xl font-semibold'>কোর্স সমূহ</h2>
                    <ul>
                        <li className='mt-1'>প্রাথমি শিক্ষা</li>
                        <li className='mt-1'>মাধ্যমিক শিক্ষা</li>
                        <li className='mt-1'>উচ্চ মাধ্যমিক</li>
                        <li className='mt-1'>কম্পিউটার কোর্স</li>
                    </ul>
                </div>
            </div>

            <div>
                <h2 className='mb-5 text-xl font-semibold'>যোগাযোগ</h2>
                <p className='font-semibold mt-1'>phone: <small>০১৭১৬৬১১২০৮</small></p>
                <p className='font-semibold mt-1'>phone: <small>০১৭১৬৬১১২০৮</small></p>
                <p className='font-semibold mt-1'>Emainl: <small>info@brightacademiccare.com</small></p>
                <p className='font-semibold mt-1'>phone: <small>০১৭১৬৬১১২০৮</small></p>
                <p className='font-semibold mt-1'>Location: <small>ঢাকা, বাংলাদেশ</small></p>
                <div className='flex gap-5 mt-3'>
                    <div className='w-10 h-10 bg-[#F68319] rounded-full flex items-center justify-center text-white'><FaFacebookF /></div>
                    <div className='w-10 h-10 bg-[#F68319] rounded-full flex items-center justify-center text-white'><FaInstagram /></div>
                    <div className='w-10 h-10 bg-[#F68319] rounded-full flex items-center justify-center text-white'><FaYoutube /></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;