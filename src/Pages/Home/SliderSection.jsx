import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import userIcon from '../../assets/Teacher.png'

// Import Swiper styles
import 'swiper/css';

const SliderSection = () => {
    return (
        <Swiper spaceBetween={30} slidesPerView={1}>
            {[1, 2, 3, 4].map((_, index) => (
                <SwiperSlide key={index} className="bg-[#FEF6EF] py-30">
                    <div className="flex flex-col xl:flex-row items-center justify-center gap-20 px-4 xl:px-0">

                        <div className="order-2 xl:order-1 w-[140px] h-[140px] xl:w-[200px] xl:h-[200px] bg-white rounded-full p-6 flex items-center justify-center">
                            <img src={userIcon} alt="User" className="w-full h-full object-contain" />
                        </div>

                        <div className="order-1 xl:order-2 text-center xl:text-left max-w-xl">
                            <p className="inline-block text-black bg-white shadow-md py-2 px-4 border-l-4 border-[#F68319] text-sm mb-6">
                                আমাদের কোর্স সমূহ
                            </p>

                            <h1 className="text-xl xl:text-2xl font-semibold text-black mb-7">
                                আমাদের সফল শিক্ষার্থী ও অভিভাবকদের <br className="hidden xl:block" />
                                অভিজ্ঞতা
                            </h1>

                            <p className="text-[12px] xl:text-sm text-black">
                                "এখানকার শিক্ষা পদ্ধতি অনেক আধুনিক। গণিত আর বিজ্ঞানে আমার দুর্বলতা কাটিয়ে
                                উঠতে পেরেছি। এখন আমি ক্লাসে প্রথম হই।"
                            </p>

                            <div className="flex justify-center xl:justify-start items-center gap-3 mt-8 text-black">
                                <p className="font-semibold">সাকিব হাসান</p>
                                <span>—</span>
                                <small className="font-semibold">শিক্ষার্থী</small>
                                <span>—</span>
                                <small className="font-semibold">ক্লাস ৯</small>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderSection;


