"use client"
const Dock = () => {
    return (
        <div className="flex justify-center items-center absolute top-[450px] md:top-[450px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[55px] w-[250px] md:w-[300px] rounded bg-[#2C2C2C]/70 border border-[#FFFFFF]/50 shadow-[0_4px_6px_rgba(0,0,0,0.4)] backdrop-blur-[12px] transition-transform duration-300 hover:scale-110">
            <div className="w-[200px] flex justify-between items-center">
                <div className="flex justify-center items-center" onClick={() => window.open("https://github.com/kaustubhhub", '_blank')}>
                    <svg className="hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" style={{ fill: "#FFFFFF" }}>
                        <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                    </svg>
                </div>
                <div className="flex justify-center items-center" onClick={() => window.open("https://www.linkedin.com/in/kaustubh-kumbhare-0185a1251/", '_blank')}>
                    <svg className="hover:scale-110" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,300,150" style={{ fill: "#FFFFFF" }}>
                        <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                            <g transform="scale(5.12,5.12)">
                                <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="flex justify-center items-center" onClick={() => window.open("https://x.com/KaustubhKumbh10", '_blank')}>
                    <svg className="hover:scale-110" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" style={{ fill: "#FFFFFF" }}>
                        <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                    </svg>
                </div>
                <div
                    className="flex justify-center items-center cursor-pointer"
                    onClick={() => window.location.href = "mailto:kaustubhkumbhare02@gmail.com"}
                >
                    <svg className="hover:scale-110" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,300,150" style={{ fill: "#FFFFFF" }}>
                        <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                            <g transform="scale(5.12,5.12)">
                                <path d="M14,4c-5.51133,0 -10,4.48867 -10,10v22c0,5.51133 4.48867,10 10,10h22c5.51133,0 10,-4.48867 10,-10v-22c0,-5.51133 -4.48867,-10 -10,-10zM13,16h24c0.18,0 0.34977,0.02031 0.50977,0.07031l-9.83008,9.82031c-1.48,1.48 -3.88914,1.48 -5.36914,0l-9.82031,-9.82031c0.16,-0.05 0.32977,-0.07031 0.50977,-0.07031zM11.07031,17.49023l7.51953,7.50977l-7.51953,7.50977c-0.05,-0.16 -0.07031,-0.32977 -0.07031,-0.50977v-14c0,-0.18 0.02031,-0.34977 0.07031,-0.50977zM38.92969,17.49023c0.05,0.16 0.07031,0.32977 0.07031,0.50977v14c0,0.18 -0.02031,0.34977 -0.07031,0.50977l-7.5293,-7.50977zM20,26.41016l0.89063,0.90039c1.13,1.13 2.61961,1.68945 4.09961,1.68945c1.49,0 2.96961,-0.55945 4.09961,-1.68945l0.90039,-0.90039l7.51953,7.51953c-0.16,0.05 -0.32977,0.07031 -0.50977,0.07031h-24c-0.18,0 -0.34977,-0.02031 -0.50977,-0.07031z"></path>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Dock;
