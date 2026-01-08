import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import userIcon from '../../assets/Teacher.png'

// Import Swiper styles
import 'swiper/css';

const SliderSection = () => {

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className='bg-[#FEF6EF] py-10'>
                <div className='flex justify-center items-center gap-5'>
                    <div className='w-[200px] h-[200px] bg-white rounded-full p-10'>
                        <img src={userIcon} alt="" />
                    </div>
                    <div>
                        <p className='border bg-white border-[#F5F5F5] rounded-xs shadow-2xl inline-block py-2 px-4 border-l-3 border-l-[#F68319] mb-2'>আমাদের কোর্স সমূহ</p>
                        <h1 className='text-black text-2xl font-semibold mt-4'>আমাদের সফল শিক্ষার্থী ও অভিভাবকদের <br /> অভিজ্ঞতা</h1>
                        <p className='text-[12px] mt-4'>"এখানকার শিক্ষা পদ্ধতি অনেক আধুনিক। গণিত আর বিজ্ঞানে আমার দুর্বলতা কাটিয়ে <br /> উঠতে পেরেছি। এখন আমি ক্লাসে প্রথম হই।"</p>
                        <div className='flex gap-3 justify-center items-center mt-4'>
                            <p className='text-xl font-semibold'>সাকিব হাসান</p>
                            <hr className='w-[20px] h-2' />
                            <small className='font-semibold'>শিক্ষার্থী</small>
                            <hr className='w-[15px] h-2' />
                            <small className='font-semibold'>ক্লাস ৯</small>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='bg-[#FEF6EF] py-10'>
                <div className='flex justify-center items-center gap-5'>
                    <div className='w-[200px] h-[200px] bg-white rounded-full p-10'>
                        <img src={userIcon} alt="" />
                    </div>
                    <div>
                        <p className='border bg-white border-[#F5F5F5] rounded-xs shadow-2xl inline-block py-2 px-4 border-l-3 border-l-[#F68319] mb-2'>আমাদের কোর্স সমূহ</p>
                        <h1 className='text-black text-2xl font-semibold mt-4'>আমাদের সফল শিক্ষার্থী ও অভিভাবকদের <br /> অভিজ্ঞতা</h1>
                        <p className='text-[12px] mt-4'>"এখানকার শিক্ষা পদ্ধতি অনেক আধুনিক। গণিত আর বিজ্ঞানে আমার দুর্বলতা কাটিয়ে <br /> উঠতে পেরেছি। এখন আমি ক্লাসে প্রথম হই।"</p>
                        <div className='flex gap-3 justify-center items-center mt-4'>
                            <p className='text-xl font-semibold'>সাকিব হাসান</p>
                            <hr className='w-[20px] h-2' />
                            <small className='font-semibold'>শিক্ষার্থী</small>
                            <hr className='w-[15px] h-2' />
                            <small className='font-semibold'>ক্লাস ৯</small>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='bg-[#FEF6EF] py-10'>
                <div className='flex justify-center items-center gap-5'>
                    <div className='w-[200px] h-[200px] bg-white rounded-full p-10'>
                        <img src={userIcon} alt="" />
                    </div>
                    <div>
                        <p className='border bg-white border-[#F5F5F5] rounded-xs shadow-2xl inline-block py-2 px-4 border-l-3 border-l-[#F68319] mb-2'>আমাদের কোর্স সমূহ</p>
                        <h1 className='text-black text-2xl font-semibold mt-4'>আমাদের সফল শিক্ষার্থী ও অভিভাবকদের <br /> অভিজ্ঞতা</h1>
                        <p className='text-[12px] mt-4'>"এখানকার শিক্ষা পদ্ধতি অনেক আধুনিক। গণিত আর বিজ্ঞানে আমার দুর্বলতা কাটিয়ে <br /> উঠতে পেরেছি। এখন আমি ক্লাসে প্রথম হই।"</p>
                        <div className='flex gap-3 justify-center items-center mt-4'>
                            <p className='text-xl font-semibold'>সাকিব হাসান</p>
                            <hr className='w-[20px] h-2' />
                            <small className='font-semibold'>শিক্ষার্থী</small>
                            <hr className='w-[15px] h-2' />
                            <small className='font-semibold'>ক্লাস ৯</small>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='bg-[#FEF6EF] py-10'>
                <div className='flex justify-center items-center gap-5'>
                    <div className='w-[200px] h-[200px] bg-white rounded-full p-10'>
                        <img src={userIcon} alt="" />
                    </div>
                    <div>
                        <p className='border bg-white border-[#F5F5F5] rounded-xs shadow-2xl inline-block py-2 px-4 border-l-3 border-l-[#F68319] mb-2'>আমাদের কোর্স সমূহ</p>
                        <h1 className='text-black text-2xl font-semibold mt-4'>আমাদের সফল শিক্ষার্থী ও অভিভাবকদের <br /> অভিজ্ঞতা</h1>
                        <p className='text-[12px] mt-4'>"এখানকার শিক্ষা পদ্ধতি অনেক আধুনিক। গণিত আর বিজ্ঞানে আমার দুর্বলতা কাটিয়ে <br /> উঠতে পেরেছি। এখন আমি ক্লাসে প্রথম হই।"</p>
                        <div className='flex gap-3 justify-center items-center mt-4'>
                            <p className='text-xl font-semibold'>সাকিব হাসান</p>
                            <hr className='w-[20px] h-2' />
                            <small className='font-semibold'>শিক্ষার্থী</small>
                            <hr className='w-[15px] h-2' />
                            <small className='font-semibold'>ক্লাস ৯</small>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SliderSection;