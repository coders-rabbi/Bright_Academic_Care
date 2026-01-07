import React from 'react';
import image01 from '../../assets/image/image 1.png'
import goalIcon from '../../assets/goal icon.png';
import bg1 from "../../assets/image/BG image 1.png"
import bg2 from "../../assets/image/BG image 2.png"
import { IoMdCheckboxOutline } from 'react-icons/io';

const About = () => {
    return (
        <div className='grid grid-cols-2 px-20 pt-10'>

            <div className="relative">
                <div className="absolute top-0 left-0 z-0">
                    <img className="h-[100px] w-[100px]" src={bg1} alt="bg1" />
                </div>

                <div className="h-full absolute p-10 z-20">
                    <img className="rounded-3xl h-full px-5" src={image01} alt="main" />
                </div>

                <div className="absolute bottom-1 right-0 z-10">
                    <img className="h-[100px] w-[100px]" src={bg2} alt="bg2" />
                </div>

            </div>

            <div className='pl-2'>
                <p className='border border-[#F5F5F5] rounded-xs shadow-2xl inline-block py-2 px-4 border-l-3 border-l-[#F68319] mb-2'>আমাদের সম্পর্কে</p>
                <h2 className='text-[30px] font-semibold mb-3'>ব্রাইট একাডেমিক কেয়ার - শিক্ষার মানোন্নয়নে প্রতিশ্রুতিবদ্ধ</h2>
                <div className='border border-[#F5F5F5] shadow rounded-2xl border-l-[#F68319] border-l-3 py-5 px-12 flex gap-5'>
                    <div>
                        <img className='h-20 w-40' src={goalIcon} alt="icon" />
                    </div>
                    <div>
                        <div className='flex items-center justify-between mb-8'>
                            <h3 className='text-3xl font-semibold'>আমাদের লক্ষ্য</h3>
                            <hr className='h-1 w-[40%] text-[#F68319]' />
                        </div>
                        <p className='text-[16px]'>ব্রাইট একাডেমিক কেয়ারের মূল লক্ষ্য হলো প্রতিটি শিক্ষার্থীর সুপ্ত প্রতিভা বিকশিত করা এবং তাদের একাডেমিক ও ব্যক্তিত্ব উন্নয়নে সহায়তা করা। আমরা বিশ্বাস করি যে প্রতিটি শিশুর মধ্যে অসীম সম্ভাবনা রয়েছে।</p>
                    </div>
                </div>

                <div className='border border-[#F5F5F5] shadow rounded-2xl border-l-[#F68319] border-l-3 px-12 py-5 flex gap-5 mt-5'>
                    <div>
                        <img className='h-20 w-20' src={goalIcon} alt="icon" />
                    </div>
                    <div>
                        <div className='flex items-center justify-between mb-8'>
                            <h3 className='text-2xl font-semibold'>আমাদের বিশেষত্ব</h3>
                            <hr className='h-1 w-[40%] text-[#F68319]' />
                        </div>
                        <div>
                            <div className='flex items-center gap-5'>
                                <IoMdCheckboxOutline className='text-3xl text-[#F68319]' />
                                <p className='text-[18px]'>অভিজ্ঞ ও দক্ষ শিক্ষকমণ্ডলী</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <IoMdCheckboxOutline className='text-3xl text-[#F68319]' />
                                <p className='text-[18px]'>আধুনিক শিক্ষা পদ্ধতি</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <IoMdCheckboxOutline className='text-3xl text-[#F68319]' />
                                <p className='text-[18px]'>নিয়মিত মূল্যায়ন ও ফিডব্যাক</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <IoMdCheckboxOutline className='text-3xl text-[#F68319]' />
                                <p className='text-[18px]'>ছোট ব্যাচে ব্যক্তিগত যত্ন</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <IoMdCheckboxOutline className='text-3xl text-[#F68319]' />
                                <p className='text-[18px]'>অভিভাবকদের সাথে নিয়মিত যোগাযোগ</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default About;




