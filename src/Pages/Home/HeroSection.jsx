import React from 'react';
import { FaAward, FaRegListAlt } from 'react-icons/fa';
import { FcManager } from 'react-icons/fc';
import { FiArrowUpRight } from 'react-icons/fi';
import { PiStudentFill } from 'react-icons/pi';
import { Link } from 'react-router';
import heroImage from "../../assets/image/image 1.png"

const HeroSection = () => {
    return (
        <div className='xl:grid grid-cols-3 bg-[#F5F5F5] xl:px-20 py-10 pt-10'>
            <div className='xl:col-span-2 '>
                <div className='flex items-center  h-10 border-l-[#F68319] border-l-2 mb-5'>
                    <p className='text-xs xl:text-xl bg-white shadow-2xs inline-block xl:px-8 p-1 text-black'>জ্ঞানের আকাঙ্ক্ষা করো। সীমাহীনভাবে শিখো।</p>
                </div>
                <h2 className='text-center text-black text-[25px] xl:text-[44px] font-semibold'>ব্রাইট একাডেমিক কেয়ারে স্বাগতম</h2>
                <p className='text-[18px] text-center text-black xl:text-left mt-8'>সাফল্যের স্বর্ণালী শিখরে পৌঁছাতে আমরা দৃঢ় প্রতিজ্ঞ। আমরা জানি, প্রতিশ্রুতি রক্ষায় <br /> আমরা ব্যক্তি নয়, বিবেকের কাছে দায়বদ্ধ।</p>

                <div className='mt-8 mb-8 flex justify-center xl:justify-start xl:flex-none'>
                    <button className='btn flex items-center text-xl font-normal border border-[#F68319] bg-transparent pr-[5px]'>
                        <p className='text-black'>আমাদের সম্পর্কে জানুন</p>
                        <div className='text-black border border-[#F68319] p-[5px] rounded'>
                            <FiArrowUpRight></FiArrowUpRight>
                        </div>
                    </button>
                </div>

                <div className='flex justify-center xl:justify-start'>
                    <div className='xl:flex justify-between items-center border border-[#F68319] rounded px-7 py-5 inline-block'>
                        <div className='flex justify-center items-center gap-4 mb-5 xl:mb-0'>
                            <PiStudentFill className='h-8 w-10 text-blue-600' />
                            <div>
                                <p className='text-2xl text-[#F68319]'>৩০০০+</p>
                                <p className='text-[16px] text-black'>সফল শিক্ষার্থী</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4 mb-5 xl:mb-0'>
                            <PiStudentFill className='h-8 w-10 text-blue-600' />
                            <div>
                                <p className='text-2xl text-[#F68319]'>৪৫+</p>
                                <p className='text-[16px] text-black'>অভিজ্ঞ শিক্ষক</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4 mb-5 xl:mb-0'>
                            <FaRegListAlt className='h-8 w-10 text-blue-600' />
                            <div>
                                <p className='text-2xl text-[#F68319]'>১৭+</p>
                                <p className='text-[16px] text-black'>বছরের অভিনজ্ঞতা</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4 mb-5 xl:mb-0'>
                            <FaAward className='h-8 w-10 text-blue-600' />
                            <div>
                                <p className='text-2xl text-[#F68319]'>১০০%</p>
                                <p className='text-[16px] text-black'>সফল শিক্ষার্থী</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid-cols-1 h-[300px] xl:h-full mt-10 xl:mt-0'>
                <div className="flex items-center justify-center w-full h-full gap-1 px-10">

                    <div className="w-1/3 h-full overflow-hidden rounded-2xl">
                        <img
                            src={heroImage}
                            alt="Design Slice Left"
                            className="object-cover object-left w-full h-full transition-transform duration-500 hover:scale-110"
                        />
                    </div>


                    <div className="w-1/3 h-[85%] overflow-hidden rounded-2xl mt-12">
                        <img
                            src={heroImage}
                            alt="Design Slice Center"
                            className="object-cover object-center w-full h-full transition-transform duration-500 hover:scale-110"
                        />
                    </div>

                    <div className="w-1/3 h-full overflow-hidden rounded-2xl">
                        <img
                            src={heroImage}
                            alt="Design Slice Right"
                            className="object-cover object-right w-full h-full transition-transform duration-500 hover:scale-110"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;