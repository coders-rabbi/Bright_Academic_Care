import { IoIosCall } from "react-icons/io";
import HeroSection from "./HeroSection";
import About from "./About";
import CourseSection from "./CourseSection";
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

const Home = () => {
    return (
        <>
        <div className="bg-[#F68319] h-12 flex items-center">
            <marquee behavior="" direction="">
                <div className="flex justify-center items-center gap-3 text-white text-[20px] ">
                    নতুন ব্যাচ শুরু হচ্ছে। ভর্তি চলছে। সিমিত আসন। <IoIosCall />কল করুন: ০১৭১৬৬১১২০৮
                </div>
            </marquee>
        </div>
        <HeroSection></HeroSection>
        <About></About>
        <CourseSection></CourseSection>
        </>
    );
};

export default Home;