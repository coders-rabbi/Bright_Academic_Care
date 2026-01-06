import { IoIosCall } from "react-icons/io";

const Home = () => {
    return (
        <div className="bg-[#F68319] h-12 flex items-center">
            <marquee behavior="" direction="">
                <div className="flex justify-center items-center gap-3 text-white text-[20px]">
                    নতুন ব্যাচ শুরু হচ্ছে। ভর্তি চলছে। সিমিত আসন। <IoIosCall />কল করুন: ০১৭১৬৬১১২০৮
                </div>
            </marquee>
        </div>
    );
};

export default Home;