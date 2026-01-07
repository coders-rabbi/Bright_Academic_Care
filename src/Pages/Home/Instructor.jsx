import React from 'react';
import teacher from '../../assets/teacher.png'

const Instructor = () => {
    return (
        <div className='py-10 text-center '>
            <p className='border bg-white border-[#F5F5F5] rounded-xs shadow-2xl inline-block py-2 px-4 border-l-3 border-l-[#F68319] mb-2'>আমাদের শিক্ষকমণ্ডলী</p>
            <p className='text-3xl text-white mt-4'>অভিজ্ঞ ও দক্ষ শিক্ষকদের তত্ত্বাবধানে মানসম্পন্ন শিক্ষা</p>

            {/* course card section */}
            <div className='flex justify-center gap-2 mt-6'>
                <div className="card bg-base-100 w-[20%] shadow-sm rounded-xl">
                    <figure className="">
                        <img
                            src={teacher}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">মোঃ আব্দুল করিম</h2>
                
                        <div className='flex items-center justify-center '>
                            <hr className='h-2 w-[80%] '/>
                            <div className='h-4 w-4 rounded-full bg-[#F68319] p-2'>
                                {/* circle div */}
                            </div>
                            <hr className='h-2 w-[80%]' />
                        </div>
                        
                        <div className='grid border justify-between  text-[10px] text-left py-2 rounded-xl'>
                            <h3>M.Sc in Mathematics, ঢাকা বিশ্ববিদ্যালয়</h3>
                            <h3>১৫ বছরের অভিজ্ঞতা</h3>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-[20%] shadow-sm rounded-xl">
                    <figure className="">
                        <img
                            src={teacher}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">মোঃ আব্দুল করিম</h2>
                
                        <div className='flex items-center justify-center '>
                            <hr className='h-2 w-[80%] '/>
                            <div className='h-4 w-4 rounded-full bg-[#F68319] p-2'>
                                {/* circle div */}
                            </div>
                            <hr className='h-2 w-[80%]' />
                        </div>
                        
                        <div className='grid border justify-between  text-[10px] text-left py-2 rounded-xl'>
                            <h3>M.Sc in Mathematics, ঢাকা বিশ্ববিদ্যালয়</h3>
                            <h3>১৫ বছরের অভিজ্ঞতা</h3>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-[20%] shadow-sm rounded-xl">
                    <figure className="">
                        <img
                            src={teacher}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">মোঃ আব্দুল করিম</h2>
                
                        <div className='flex items-center justify-center '>
                            <hr className='h-2 w-[80%] '/>
                            <div className='h-4 w-4 rounded-full bg-[#F68319] p-2'>
                                {/* circle div */}
                            </div>
                            <hr className='h-2 w-[80%]' />
                        </div>
                        
                        <div className='grid border justify-between  text-[10px] text-left py-2 rounded-xl'>
                            <h3>M.Sc in Mathematics, ঢাকা বিশ্ববিদ্যালয়</h3>
                            <h3>১৫ বছরের অভিজ্ঞতা</h3>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-[20%] shadow-sm rounded-xl">
                    <figure className="">
                        <img
                            src={teacher}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">মোঃ আব্দুল করিম</h2>
                
                        <div className='flex items-center justify-center '>
                            <hr className='h-2 w-[80%] '/>
                            <div className='h-4 w-4 rounded-full bg-[#F68319] p-2'>
                                {/* circle div */}
                            </div>
                            <hr className='h-2 w-[80%]' />
                        </div>
                        
                        <div className='grid border justify-between  text-[10px] text-left py-2 rounded-xl'>
                            <h3>M.Sc in Mathematics, ঢাকা বিশ্ববিদ্যালয়</h3>
                            <h3>১৫ বছরের অভিজ্ঞতা</h3>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Instructor;