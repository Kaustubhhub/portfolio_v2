"use client"
import { Caveat_Brush } from "next/font/google";
import { useRouter } from "next/navigation";
const caveatBrush = Caveat_Brush({
    subsets: ['latin'],
    weight: '400',
});

const Navbar = () => {
    const router = useRouter()

    const handleAboutClick = () => {
        router.push('/about')
    }

    const handleProjectClick = () => {
        router.push('/projects')
    }

    const handleSkillsClick = () => {
        router.push('/skills')
    }
    return (
        <div className="flex justify-between p-3 px-8">
            <div className={`${caveatBrush.className} text-xl text-white`}>
                Kaustubh.dev
            </div>
            <div className="flex justify-around gap-4 text-white">
                <div onClick={handleAboutClick}>
                    About
                </div>
                <div onClick={handleSkillsClick}>
                    Skills
                </div>
                <div onClick={handleProjectClick}>
                    Projects
                </div>
            </div>
        </div>
    );
};

export default Navbar;
