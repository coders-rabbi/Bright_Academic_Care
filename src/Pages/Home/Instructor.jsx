import React from 'react';
import teacher from '../../assets/teacher.png'

const Instructor = () => {
    return (
        <div className='py-10 text-center '>
            <p className='border bg-white border-[#F5F5F5] rounded-xs shadow-2xl inline-block py-2 px-4 border-l-3 border-l-[#F68319] mb-2'>আমাদের শিক্ষকমণ্ডলী</p>
            <p className='text-3xl font-semibold mt-4 text-black'>অভিজ্ঞ ও দক্ষ শিক্ষকদের তত্ত্বাবধানে মানসম্পন্ন শিক্ষা</p>

            {/* course card section */}

            <div className='flex justify-center gap-2 mt-8'>
                <div className='w-[24%] text-center border border-gray-200 rounded-xl pb-4'>
                    <figure className='relative flex justify-center'>
                        <img src={teacher} alt="" />
                        <h1 className='absolute bottom-4 bg-[#F68319] px-4 py-2 rounded-xl'>গনিত শিক্ষক</h1>
                    </figure>
                    <div className='mt-8'>
                        <h1 className='text-2xl font-semibold'>
                            মোঃ আব্দুল করিম
                        </h1>
                        <div className='flex items-center justify-center gap-3 mt-5'>
                            <hr className='h-2 w-[20%] ' />
                            <div className='h-4 w-4 rounded-full bg-[#F68319] p-2'>
                            </div>
                            <hr className='h-2 w-[20%]' />
                        </div>
                        <div className="grid grid-cols-2 border border-gray-200 max-w-md mt-5 ">
                            <div className="p-2 border-r-1 border-gray-200">
                                <p>
                                    M.A in Bengali,<br />
                                    জাহাঙ্গীরনগর বিশ্ববিদ্যালয়
                                </p>
                            </div>

                            <div className="p-4">
                                <p>১২ বছরের অভিজ্ঞতা</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='w-[24%] text-center border border-gray-200 rounded-xl pb-4'>
                    <figure className='relative flex justify-center'>
                        <img src={teacher} alt="" />
                        <h1 className='absolute bottom-4 bg-[#F68319] px-4 py-2 rounded-xl'>গনিত শিক্ষক</h1>
                    </figure>
                    <div className='mt-8'>
                        <h1 className='text-2xl font-semibold'>
                            মোঃ আব্দুল করিম
                        </h1>
                        <div className='flex items-center justify-center gap-3 mt-5'>
                            <hr className='h-2 w-[20%] ' />
                            <div className='h-4 w-4 rounded-full bg-[#F68319] p-2'>
                            </div>
                            <hr className='h-2 w-[20%]' />
                        </div>
                        <div className="grid grid-cols-2 border border-gray-200 max-w-md mt-5 ">
                            <div className="p-2 border-r-1 border-gray-200">
                                <p>
                                    M.A in Bengali,<br />
                                    জাহাঙ্গীরনগর বিশ্ববিদ্যালয়
                                </p>
                            </div>

                            <div className="p-4">
                                <p>১২ বছরের অভিজ্ঞতা</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='w-[24%] text-center border border-gray-200 rounded-xl pb-4'>
                    <figure className='relative flex justify-center'>
                        <img src={teacher} alt="" />
                        <h1 className='absolute bottom-4 bg-[#F68319] px-4 py-2 rounded-xl'>গনিত শিক্ষক</h1>
                    </figure>
                    <div className='mt-8'>
                        <h1 className='text-2xl font-semibold'>
                            মোঃ আব্দুল করিম
                        </h1>
                        <div className='flex items-center justify-center gap-3 mt-5'>
                            <hr className='h-2 w-[20%] ' />
                            <div className='h-4 w-4 rounded-full bg-[#F68319] p-2'>
                            </div>
                            <hr className='h-2 w-[20%]' />
                        </div>
                        <div className="grid grid-cols-2 border border-gray-200 max-w-md mt-5 ">
                            <div className="p-2 border-r-1 border-gray-200">
                                <p>
                                    M.A in Bengali,<br />
                                    জাহাঙ্গীরনগর বিশ্ববিদ্যালয়
                                </p>
                            </div>

                            <div className="p-4">
                                <p>১২ বছরের অভিজ্ঞতা</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='w-[24%] text-center border border-gray-200 rounded-xl pb-4'>
                    <figure className='relative flex justify-center'>
                        <img src={teacher} alt="" />
                        <h1 className='absolute bottom-4 bg-[#F68319] px-4 py-2 rounded-xl'>গনিত শিক্ষক</h1>
                    </figure>
                    <div className='mt-8'>
                        <h1 className='text-2xl font-semibold'>
                            মোঃ আব্দুল করিম
                        </h1>
                        <div className='flex items-center justify-center gap-3 mt-5'>
                            <hr className='h-2 w-[20%] ' />
                            <div className='h-4 w-4 rounded-full bg-[#F68319] p-2'>
                            </div>
                            <hr className='h-2 w-[20%]' />
                        </div>
                        <div className="grid grid-cols-2 border border-gray-200 max-w-md mt-5 ">
                            <div className="p-2 border-r-1 border-gray-200">
                                <p>
                                    M.A in Bengali,<br />
                                    জাহাঙ্গীরনগর বিশ্ববিদ্যালয়
                                </p>
                            </div>

                            <div className="p-4">
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

