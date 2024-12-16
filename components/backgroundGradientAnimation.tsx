const BackgroundGradientFunction: React.FC = () => {
    return (
        <div>
            <style>
                {`
                    @keyframes gradientShift {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }
                    
                    .animate-gradient {
                        animation: gradientShift 6s ease infinite;
                        background: linear-gradient(135deg, #ff0000, #8a2be2, #ff8c00); /* Updated white to orange */
                        background-size: 400% 400%;
                        height: 80vh;
                        width: 80vw;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        border-radius: 10px;
                    }

                    .glass-effect {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        height: 80vh;
                        width: 80vw;
                        border-radius: 10px;
                        backdrop-filter: blur(10px);
                        background: rgba(255, 140, 0, 0.2); /* Changed to a semi-transparent orange */
                        border: 1px solid rgba(255, 140, 0, 0.5); /* Optional orange border for glass effect */
                    }

                    body {
                        margin: 0;
                        overflow: hidden;
                    }
                `}
            </style>
            <div className="animate-gradient"></div>
            <div className="glass-effect"></div> {/* Glass effect overlay */}
        </div>
    );
};

export default BackgroundGradientFunction;