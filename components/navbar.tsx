"use client"
import { Caveat_Brush } from "next/font/google";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
const caveatBrush = Caveat_Brush({
    subsets: ['latin'],
    weight: '400',
});

const Navbar = () => {
    const router = useRouter()
    const pathName = usePathname()
    console.log(pathName)
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
        < div className="flex justify-between p-3 px-8" >
            <div className={`${caveatBrush.className} text-xl text-white`}>
                Kaustubh.dev
            </div>
            <div className="flex justify-around gap-4 text-white">
                <div
                    className={`cursor-pointer ${pathName === "/about" ? "text-cyan-400 border-b-2 border-b-cyan-400" : ""}`}
                    onClick={handleAboutClick}
                >
                    About
                </div>
                <div
                    className={`cursor-pointer ${pathName === "/skills" ? "text-cyan-400 border-b-2 border-b-cyan-400 " : ""}`}
                    onClick={handleSkillsClick}
                >
                    Skills
                </div>
                <div
                    className={`cursor-pointer ${pathName === "/projects" ? "text-cyan-400 border-b-2 border-b-cyan-400" : ""}`}
                    onClick={handleProjectClick}
                >
                    Projects
                </div>
            </div>

        </div >
    );
};

export default Navbar;
