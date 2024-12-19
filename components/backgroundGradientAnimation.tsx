import Dock from "./dock";
import HeroSection from "./heroSection";

const BackgroundGradientFunction: React.FC = () => {
    return (
        <div>
            <div className="pt-20 flex justify-center items-center">
                <HeroSection />
            </div>
            <div>
                <Dock />
            </div>
        </div>
    );
};

export default BackgroundGradientFunction;