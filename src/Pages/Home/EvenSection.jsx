import React from 'react';

const EvenSection = () => {
    return (
        <div className='p-10'>
            <div className='text-center'>
                <p className='border bg-white border-[#F5F5F5] rounded-xs shadow-2xl inline-block py-2 px-4 border-l-3 border-l-[#F68319] mb-2'>সংবাদ ও ঘোষণা</p>
                <h2 className='text-3xl font-semibold mt-4 text-black'>সাম্প্রতিক আপডেট ও গুরুত্বপূর্ণ তথ্য</h2>
            </div>

            {/* card section */}
            <div className='grid grid-cols-4 gap-5 mt-8'>
                
                <div className='shadow-2xl rounded-xl py-8 px-4'>
                    <div className='flex items-center gap-5 mb-3'>
                        <h3 className='text-xl text-[#F68319]'>জরুরী</h3>
                        <hr className='h-2 w-[20%] text-gray-300' />
                    </div>
                    <h2 className='text-xl font-semibold mb-4'>নতুন ব্যাচ ভর্তি শুরু</h2>
                    <hr className='text-gray-300 mb-5' />
                    <p className='text-[12px]'>২০২৫ সালের নতুন শিক্ষাবর্ষের জন্য সকল ক্লাসে ভর্তি চলছে। সীমিত আসন। তাড়াতাড়ি যোগাযোগ করুন।</p>
                </div>
                <div className='shadow-2xl rounded-xl py-8 px-4'>
                    <div className='flex items-center gap-5 mb-3'>
                        <h3 className='text-xl text-[#F68319]'>জরুরী</h3>
                        <hr className='h-2 w-[20%] text-gray-300' />
                    </div>
                    <h2 className='text-xl font-semibold mb-4'>নতুন ব্যাচ ভর্তি শুরু</h2>
                    <hr className='text-gray-300 mb-5' />
                    <p className='text-[12px]'>২০২৫ সালের নতুন শিক্ষাবর্ষের জন্য সকল ক্লাসে ভর্তি চলছে। সীমিত আসন। তাড়াতাড়ি যোগাযোগ করুন।</p>
                </div>
                <div className='shadow-xl rounded-xl py-8 px-4'>
                    <div className='flex items-center gap-5 mb-3'>
                        <h3 className='text-xl text-[#F68319]'>জরুরী</h3>
                        <hr className='h-2 w-[20%] text-gray-300' />
                    </div>
                    <h2 className='text-2xl font-semibold mb-4'>নতুন ব্যাচ ভর্তি শুরু</h2>
                    <hr className='text-gray-300 mb-5' />
                    <p className='text-[12px]'>২০২৫ সালের নতুন শিক্ষাবর্ষের জন্য সকল ক্লাসে ভর্তি চলছে। সীমিত আসন। তাড়াতাড়ি যোগাযোগ করুন।</p>
                </div>
                <div className='shadow-xl rounded-xl py-8 px-4'>
                    <div className='flex items-center gap-5 mb-3'>
                        <h3 className='text-xl text-[#F68319]'>জরুরী</h3>
                        <hr className='h-2 w-[20%] text-gray-300' />
                    </div>
                    <h2 className='text-2xl font-semibold mb-4'>নতুন ব্যাচ ভর্তি শুরু</h2>
                    <hr className='text-gray-300 mb-5' />
                    <p className='text-[12px]'>২০২৫ সালের নতুন শিক্ষাবর্ষের জন্য সকল ক্লাসে ভর্তি চলছে। সীমিত আসন। তাড়াতাড়ি যোগাযোগ করুন।</p>
                </div>
            </div>
        </div>
    );
};

export default EvenSection;