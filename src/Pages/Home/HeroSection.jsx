import React from 'react';
import { FaAward, FaRegListAlt } from 'react-icons/fa';
import { FcManager } from 'react-icons/fc';
import { FiArrowUpRight } from 'react-icons/fi';
import { PiStudentFill } from 'react-icons/pi';
import { Link } from 'react-router';
import heroImage from "../../assets/image/image 1.png"

const HeroSection = () => {
    return (
        <div className='grid grid-cols-3 bg-[#F5F5F5] px-20 pt-10'>
            <div className='col-span-2 '>
                <div className='flex items-center h-10 border-l-[#F68319] border-l-2 mb-5'>
                    <p className='text-xl bg-white shadow-2xs inline-block px-8 p-1 '>জ্ঞানের আকাঙ্ক্ষা করো। সীমাহীনভাবে শিখো।</p>
                </div>
                <h2 className='text-[44px] font-semibold'>ব্রাইট একাডেমিক কেয়ারে স্বাগতম</h2>
                <p className='text-[18px] mt-8'>সাফল্যের স্বর্ণালী শিখরে পৌঁছাতে আমরা দৃঢ় প্রতিজ্ঞ। আমরা জানি, প্রতিশ্রুতি রক্ষায় <br /> আমরা ব্যক্তি নয়, বিবেকের কাছে দায়বদ্ধ।</p>

                <div className='mt-8 mb-8'>
                    <button className='btn flex items-center text-xl font-normal border border-[#F68319] bg-transparent pr-[5px]'>
                        <p>আমাদের সম্পর্কে জানুন</p>
                        <div className='border border-[#F68319] p-[5px] rounded'>
                            <FiArrowUpRight></FiArrowUpRight>
                        </div>
                    </button>
                </div>

                <div className='flex justify-between items-center border rounded p-[10px]'>
                    <div className='flex justify-center items-center gap-4'>
                        <PiStudentFill className='h-8 w-10 text-blue-600' />
                        <div>
                            <p className='text-2xl'>৩০০০+</p>
                            <p className='text-[16px]'>সফল শিক্ষার্থী</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <PiStudentFill className='h-8 w-10 text-blue-600' />
                        <div>
                            <p className='text-2xl'>৪৫+</p>
                            <p className='text-[16px]'>অভিজ্ঞ শিক্ষক</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <FaRegListAlt className='h-8 w-10 text-blue-600' />
                        <div>
                            <p className='text-2xl'>১৭+</p>
                            <p className='text-[16px]'>বছরের অভিনজ্ঞতা</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <FaAward className='h-8 w-10 text-blue-600' />
                        <div>
                            <p className='text-2xl'>৩০০০+</p>
                            <p className='text-[16px]'>সফল শিক্ষার্থী</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid-cols-1 '>
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