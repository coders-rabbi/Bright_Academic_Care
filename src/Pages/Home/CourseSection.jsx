import React from 'react';
import "./CourseSection.css";
import course from '../../assets/CourseBG/course-2.png'
import cours1 from '../../assets/CourseBG/course-3.png'
import cours2 from '../../assets/CourseBG/coursee-1.png'
import icon_course from '../../assets/icon_Course.png'

const CourseSection = () => {
    return (
        <div className='courseBanner py-12 xl:py-24 text-center '>
            <p className='border text-black bg-white border-[#F5F5F5] rounded-xs shadow-2xl inline-block py-2 px-4 border-l-3 border-l-[#F68319] mb-6'>আমাদের কোর্স সমূহ</p>
            <p className='text-5xl xl:text-white font-semibold'>বিভিন্ন শ্রেণির জন্য বিশেষায়িত কোর্স</p>

            {/* course card section */}
            <div className='xl:flex justify-center gap-6 mt-20'>
                <div className="card bg-white text-black  shadow-sm rounded-xl mx-5">
                    <figure className="">
                        <img
                            src={cours2}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">প্রাথমিক (১ম - ৫ম শ্রেণি)</h2>
                        <small className='text-left'>বাংলা, ইংরেজি, গণিত, বিজ্ঞান ও সামাজিক বিজ্ঞান</small>

                        <div className='flex gap-2'>
                            <img src={icon_course} alt="" />
                            <small className='text-[14px]'>সৃজনশীল পদ্ধতি</small>
                        </div>
                        <div className='flex gap-2'>
                            <img src={icon_course} alt="" />
                            <small className='text-[14px]'>খেলার ছলে শেখানো</small>
                        </div>
                        <div className='flex gap-2'>
                            <img src={icon_course} alt="" />
                            <small className='text-[14px]'>সৃজনশীল পদ্ধতি</small>
                        </div>
                        <div className='flex justify-between bg-[#F68319] text-[16px] px-4 py-2 rounded-xl text-white font-semibold'>
                            <h3>মাসিক ফিঃ</h3>
                            <h3>১৫০০-২০০০</h3>
                        </div>
                    </div>
                </div>
                <div className="card bg-white text-black  shadow-sm rounded-xl mx-5 mt-10 xl:mt-0">
                    <figure className="">
                        <img
                            src={cours1}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">মাধ্যমিক (৬ষ্ঠ - ১০ম শ্রেণি)</h2>
                        <small className='text-left'>সকল বিষয়ে বিশেষ যত্ন ও JSC/SSC প্রস্তুতি</small>

                        <div className='flex gap-2'>
                            <img src={icon_course} alt="" />
                            <small className='text-[14px]'>বোর্ড পরীক্ষার বিশেষ প্রস্তুতি</small>
                        </div>
                        <div className='flex gap-2'>
                            <img src={icon_course} alt="" />
                            <small className='text-[14px]'>সৃজনশীল প্রশ্ন সমাধান</small>
                        </div>
                        <div className='flex gap-2'>
                            <img src={icon_course} alt="" />
                            <small className='text-[14px]'>নিয়মিত পরীক্ষা ও মূল্যায়ন</small>
                        </div>
                        <div className='flex justify-between bg-[#F68319] text-[16px] px-4 py-2 rounded-xl text-white font-semibold'>
                            <h3>মাসিক ফিঃ</h3>
                            <h3>১৫০০-২০০০</h3>
                        </div>
                    </div>
                </div>
                <div className="card bg-white text-black  shadow-sm rounded-xl mx-5 mt-10 xl:mt-0">
                    <figure className="">
                        <img
                            src={cours2}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">উচ্চ মাধ্যমিক (১১শ - ১২শ শ্রেণি)</h2>
                        <small className='text-left'>বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা শাখা</small>

                        <div className='flex gap-2'>
                            <img src={icon_course} alt="" />
                            <small className='text-[14px]'>HSC পরীক্ষার বিশেষ প্রস্তুতি</small>
                        </div>
                        <div className='flex gap-2'>
                            <img src={icon_course} alt="" />
                            <small className='text-[14px]'>বিষয়ভিত্তিক গভীর পাঠদান</small>
                        </div>
                        <div className='flex gap-2'>
                            <img src={icon_course} alt="" />
                            <small className='text-[14px]'>বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি</small>
                        </div>
                        <div className='flex justify-between bg-[#F68319] text-[16px] px-4 py-2 rounded-xl text-white font-semibold'>
                            <h3>মাসিক ফিঃ</h3>
                            <h3>১৫০০-২০০০</h3>
                        </div>
                    </div>
                </div>
                <div className="card bg-white text-black  shadow-sm rounded-xl mx-5 mt-10 xl:mt-0">
                    <figure className="">
                        <img
                            src={course}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">কম্পিউটার কোর্স</h2>
                        <small className='text-left'>বেসিক কম্পিউটার ও প্রোগ্রামিং শেখা</small>

                        <div className='flex gap-2'>
                            <img src={icon_course} alt="" />
                            <small className='text-[14px]'>বেসিক কম্পিউটার ও প্রোগ্রামিং শেখা</small>
                        </div>
                        <div className='flex gap-2'>
                            <img src={icon_course} alt="" />
                            <small className='text-[14px]'>মাইক্রোসফট অফিস</small>
                        </div>
                        <div className='flex gap-2'>
                            <img src={icon_course} alt="" />
                            <small className='text-[14px]'>বেসিক প্রোগ্রামিং</small>
                        </div>
                        <div className='flex justify-between bg-[#F68319] text-[16px] px-4 py-2 rounded-xl text-white font-semibold'>
                            <h3>মাসিক ফিঃ</h3>
                            <h3>১৫০০-২০০০</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSection;