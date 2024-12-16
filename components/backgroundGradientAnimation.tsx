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
                        background: linear-gradient(135deg, #ff0000, #8a2be2, #ffffff);
                        background-size: 400% 400%;
                        height: 100vh;
                        width: 100vw;
                        position: fixed;
                        top: 0;
                        left: 0;
                    }

                    body {
                        margin: 0;
                        overflow: hidden;
                    }
                `}
            </style>
            <div className="animate-gradient"></div>
        </div>
    );
};

export default BackgroundGradientFunction;
