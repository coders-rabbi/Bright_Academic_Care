import React from 'react';
import teacher from '../../assets/teacher.png'

const Instructor = () => {
    return (
        <div className='py-12 xl:py-28 text-center bg-white'>
            <p className='border bg-white border-[#F5F5F5] rounded-xs shadow-2xl inline-block py-2 px-4 border-l-3 border-l-[#F68319] mb-6 text-black'>আমাদের শিক্ষকমণ্ডলী</p>
            <p className='text-3xl font-semibold text-black'>অভিজ্ঞ ও দক্ষ শিক্ষকদের তত্ত্বাবধানে মানসম্পন্ন শিক্ষা</p>

            {/* course card section */}
            <div className='xl:flex justify-center gap-6 mt-10'>
                <div className='text-center border border-gray-200 rounded-xl pb-6 mx-5 xl:mx-0 shadow-xl mt-8 xl:mt-0'>
                    <figure className='relative flex justify-center'>
                        <img src={teacher} alt="" />
                        <h1 className='absolute bottom-4 bg-[#F68319] px-4 py-2 rounded-xl'>গনিত শিক্ষক</h1>
                    </figure>
                    <div className='mt-8'>
                        <h1 className='text-2xl text-black font-semibold'>
                            মোঃ আব্দুল করিম
                        </h1>
                        <div className='flex items-center justify-center gap-3 mt-5'>
                            <hr className='h-2 w-[20%] ' />
                            <div className='h-4 w-4 rounded-full bg-[#F68319] p-2'>
                            </div>
                            <hr className='h-2 w-[20%]' />
                        </div>
                        <div className="grid grid-cols-2 border border-gray-200 max-w-md mt-5 ">
                            <div className="text-black p-2 border-r-1 border-gray-200">
                                <p>
                                    M.A in Bengali,<br />
                                    জাহাঙ্গীরনগর বিশ্ববিদ্যালয়
                                </p>
                            </div>

                            <div className="text-black p-4">
                                <p>১২ বছরের অভিজ্ঞতা</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='text-center border border-gray-200 rounded-xl pb-4 mx-5 xl:mx-0 shadow-xl mt-8 xl:mt-0'>
                    <figure className='relative flex justify-center'>
                        <img src={teacher} alt="" />
                        <h1 className='absolute bottom-4 bg-[#F68319] px-4 py-2 rounded-xl'>বাংলা শিক্ষক</h1>
                    </figure>
                    <div className='mt-8'>
                        <h1 className='text-2xl text-black font-semibold'>
                            ফারিহা আক্তার
                        </h1>
                        <div className='flex items-center justify-center gap-3 mt-5'>
                            <hr className='h-2 w-[20%] ' />
                            <div className='h-4 w-4 rounded-full bg-[#F68319] p-2'>
                            </div>
                            <hr className='h-2 w-[20%]' />
                        </div>
                        <div className="grid grid-cols-2 border border-gray-200 max-w-md mt-5 ">
                            <div className="text-black p-2 border-r-1 border-gray-200">
                                <p>
                                    M.A in Bengali,<br />
                                    জাহাঙ্গীরনগর বিশ্ববিদ্যালয়
                                </p>
                            </div>

                            <div className="text-black p-4">
                                <p>১২ বছরের অভিজ্ঞতা</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='text-center border border-gray-200 rounded-xl pb-4 mx-5 xl:mx-0 shadow-xl mt-8 xl:mt-0'>
                    <figure className='relative flex justify-center'>
                        <img src={teacher} alt="" />
                        <h1 className='absolute bottom-4 bg-[#F68319] px-4 py-2 rounded-xl'>পদার্থবিজ্ঞান শিক্ষক</h1>
                    </figure>
                    <div className='mt-8'>
                        <h1 className='text-2xl text-black font-semibold'>
                            ড. সাইফুল ইসলাম
                        </h1>
                        <div className='flex items-center justify-center gap-3 mt-5'>
                            <hr className='h-2 w-[20%] ' />
                            <div className='h-4 w-4 rounded-full bg-[#F68319] p-2'>
                            </div>
                            <hr className='h-2 w-[20%]' />
                        </div>
                        <div className="grid grid-cols-2 border border-gray-200 max-w-md mt-5 ">
                            <div className="text-black p-2 border-r-1 border-gray-200">
                                <p>
                                    Ph.D in Physics, চট্টগ্রাম <br /> বিশ্ববিদ্যালয়
                                </p>
                            </div>

                            <div className="text-black p-4">
                                <p>১৮ বছরের অভিজ্ঞতা</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='text-center border border-gray-200 rounded-xl pb-4 mx-5 xl:mx-0 shadow-xl mt-8 xl:mt-0'>
                    <figure className='relative flex justify-center'>
                        <img src={teacher} alt="" />
                        <h1 className='absolute bottom-4 bg-[#F68319] px-4 py-2 rounded-xl'>ইংরেজি শিক্ষক</h1>
                    </figure>
                    <div className='mt-8'>
                        <h1 className='text-2xl text-black font-semibold'>
                            নাসির উদ্দিন আহমেদ
                        </h1>
                        <div className='flex items-center justify-center gap-3 mt-5'>
                            <hr className='h-2 w-[20%] ' />
                            <div className='h-4 w-4 rounded-full bg-[#F68319] p-2'>
                            </div>
                            <hr className='h-2 w-[20%]' />
                        </div>
                        <div className="grid grid-cols-2 border border-gray-200 max-w-md mt-5 ">
                            <div className="text-black p-2 border-r-1 border-gray-200">
                                <p>
                                    M.A in English, রাজশাহী<br /> বিশ্ববিদ্যালয়
                                </p>
                            </div>

                            <div className="text-black p-4">
                                <p>১২ বছরের অভিজ্ঞতা</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Instructor;

