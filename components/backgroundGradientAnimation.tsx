import HeroSection from "./heroSection";
import Navbar from "./navbar";

const BackgroundGradientFunction: React.FC = () => {
    return (
        <div>
            <div className="animate-gradient-shift bg-gradient-to-tr from-yellow-300 via-pink-400 to-purple-300 bg-[length:400%_400%] h-[98vh] w-[98vw] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-[10px]"></div>
            <div className="absolute top-[8%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[55px] w-[700px] rounded-[100px] bg-white/20 border border-white/40 shadow-[0_4px_6px_rgba(0,0,0,0.1)] backdrop-blur-[10px]">
                <Navbar />
                <div className="pt-20">
                    <HeroSection />
                </div>
            </div>
        </div>
    );
};

export default BackgroundGradientFunction;
