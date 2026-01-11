import React from 'react';
import image01 from '../../assets/image/image 1.png'
import goalIcon from '../../assets/goal icon.png';
import starIcon from '../../assets/star icon.png';
import bg1 from "../../assets/image/BG image 1.png"
import bg2 from "../../assets/image/BG image 2.png"
import { IoMdCheckboxOutline } from 'react-icons/io';

const About = () => {
    return (
        <section className="container mx-auto px-4 xl:px-20 py-12 xl:py-28 bg-white">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">

                <div className="relative order-2 xl:order-1">

                    <img
                        src={bg1}
                        alt=""
                        className="hidden xl:block absolute -top-6 -left-6 w-24 z-0"
                    />
                    <img
                        src={image01}
                        alt="classroom"
                        className="relative z-10 rounded-3xl w-full"
                    />
                    <img
                        src={bg2}
                        alt=""
                        className="hidden xl:block absolute -bottom-6 -right-6 w-24 z-0"
                    />
                </div>

                <div className="order-1 xl:order-2 text-center">

                    <p className="inline-block border border-gray-200 shadow px-4 py-2 border-l-4 border-l-[#F68319] mb-6 text-sm text-black">
                        আমাদের সম্পর্কে
                    </p>

                    <h2 className="text-2xl text-black md:text-3xl font-semibold mb-8">
                        ব্রাইট একাডেমিক কেয়ার – শিক্ষার মানোন্নয়নে প্রতিশ্রুতিবদ্ধ
                    </h2>

                    <div className="border border-gray-200 shadow rounded-2xl border-l-4 border-l-[#F68319] p-6 flex gap-5 mb-7">
                        <img className="h-16 w-16" src={goalIcon} alt="" />

                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl text-black font-semibold">আমাদের লক্ষ্য</h3>
                                <span className="h-1 w-24 bg-[#F68319]" />
                            </div>
                            <p className="text-sm text-black leading-relaxed">
                                ব্রাইট একাডেমিক কেয়ারের মূল লক্ষ্য হলো প্রতিটি শিক্ষার্থীর সুপ্ত প্রতিভা বিকশিত করা এবং তাদের একাডেমিক ও ব্যক্তিত্ব উন্নয়নে সহায়তা করা।
                            </p>
                        </div>
                    </div>

                    <div className="border border-gray-200 shadow rounded-2xl border-l-4 border-l-[#F68319] p-6">
                        <div className="flex items-center justify-between mb-4">

                            <img className="h-16 w-16 mr-3" src={starIcon} alt="" />
                            <h3 className="text-[18px] text-black xl:text-xl font-semibold">আমাদের বিশেষত্ব</h3>
                            <span className="h-1 w-24 bg-[#F68319]" />
                        </div>

                        <ul className="space-y-3 text-black">
                            {[
                                "অভিজ্ঞ ও দক্ষ শিক্ষকমণ্ডলী",
                                "আধুনিক শিক্ষা পদ্ধতি",
                                "নিয়মিত মূল্যায়ন ও ফিডব্যাক",
                                "ছোট ব্যাচে ব্যক্তিগত যত্ন",
                                "অভিভাবকদের সাথে নিয়মিত যোগাযোগ",
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <IoMdCheckboxOutline className="text-2xl text-[#F68319]" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;




