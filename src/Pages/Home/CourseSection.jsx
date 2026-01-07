import React from 'react';
import "./CourseSection.css";

const CourseSection = () => {
    return (
        <div className='courseBanner py-10 text-center'>
            <p className='border bg-white border-[#F5F5F5] rounded-xs shadow-2xl inline-block py-2 px-4 border-l-3 border-l-[#F68319] mb-2'>আমাদের কোর্স সমূহ</p>
            <p className='text-3xl text-white mt-4'>বিভিন্ন শ্রেণির জন্য বিশেষায়িত কোর্স</p>
        </div>
    );
};

export default CourseSection;