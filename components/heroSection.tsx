import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="text-center flex flex-col items-center gap-4 mt-8 w-full sm:w-[600px] md:w-[700px] lg:w-[800px] px-4">
            <h1 className="hidden sm:block text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide">
                Architecting scalable solutions for modern{" "}
                <span className="text-yellow-300">web applications</span>
            </h1>

            <Image
                src="/heroSectionPic.png"
                width={200}
                height={200}
                alt="vector image"
                className="sm:hidden"
            />

            <p className="text-base sm:text-lg md:text-xl font-medium text-white/90 tracking-wide whitespace-nowrap">
                Hi, I'm{" "}
                <span className="text-green-300 font-bold tracking-wide">Kaustubh</span>,
                <span className="block sm:inline text-blue-300 font-bold"> A Full stack developer</span>
                <span className="block sm:inline text-orange-300 font-bold"> based in India</span>
            </p>
        </div>
    );
};

export default HeroSection;
