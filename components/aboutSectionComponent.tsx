import Image from "next/image";

const AboutSectionComponent = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center mt-20 lg:mt-10 w-[70vw] h-[70vh]">
            {/* Image Section */}
            <div className=" w-5/12 lg:ml-20 items-center flex justify-center">
                <Image
                    src={'/heroSectionPic.png'}
                    height={300}
                    width={300}
                    alt="Developer's Image"
                />
            </div>
            
            {/* Text Section */}
            <div className=" w-full text-cyan-200 pr-20 p-4 ml-20 flex justify-center items-center">
                <ul className="list-disc pl-5 rounded-md  flex flex-col items-center justify-center">
                    <li>Associate Engineer at <b>IBM</b>, focused on developing and deploying innovative solutions.</li>
                    <li>Full-Stack Developer with experience in building <b>scalable</b>  web applications.</li>
                    <li>At Studium Tech, created interactive interfaces using <b> React, Next.js, and Vue.js</b>.</li>
                    <li>Developed the A.P.I. module, boosting client adoption by 40% and acquisition by 80%.</li>
                    <li>Back-end expertise in <b>MongoDB, Firebase, and AWS</b>  for efficient data management.</li>
                    <li>Learning <b>Rust, TypeScript, and blockchain development with Solana</b>  to build impactful solutions.</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutSectionComponent;
