const HeroSection = () => {
    return (
        <div className="text-center flex flex-col items-center gap-4 mt-8 w-[700px]">
            <h1 className="text-4xl font-extrabold text-white drop-shadow-lg tracking-wide">
                Architecting scalable solutions for modern{" "}
                <span className="text-yellow-300">web applications</span>
            </h1>

            <p className="text-lg font-medium text-white/90 tracking-wide whitespace-nowrap">
                Hi, I'm{" "}
                <span className="text-green-300 font-bold tracking-wide">Kaustubh</span>,
                A <span className="text-blue-300 font-bold">Next.js developer</span> based in{" "}
                <span className="text-orange-300 font-bold">India</span>.
            </p>


        </div>
    );
};

export default HeroSection;
