"use client"
import { Caveat_Brush } from "next/font/google";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const caveatBrush = Caveat_Brush({
    subsets: ['latin'],
    weight: '400',
});

const Navbar: React.FC = () => {
    const router = useRouter();
    const pathName = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const handleAboutClick = () => {
        router.push('/about');
    };

    const handleProjectClick = () => {
        router.push('/projects');
    };

    const handleSkillsClick = () => {
        router.push('/skills');
    };

    const backToRoot = () => {
        router.push('/');
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex items-center justify-between w-full">
            <div
                onClick={backToRoot}
                className={`flex justify-center items-center cursor-pointer ${caveatBrush.className} text-xl text-white`}
            >
                <span className="hidden md:inline">Kaustubh.dev</span>
                <span className="md:hidden">kk.dev</span>
            </div>

            <div className="relative" ref={menuRef}>
                <button
                    data-collapse-toggle="navbar-menu"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-menu"
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>

                <div
                    id="navbar-menu"
                    className={`${isMenuOpen ? 'absolute top-full right-0 p-4 rounded-lg' : 'hidden'} w-auto md:static md:flex md:items-center gap-4 text-white`}
                >
                    <div
                        className={`cursor-pointer ${pathName === '/about'
                            ? 'text-cyan-400 border-b-2 border-b-cyan-400'
                            : ''
                            }`}
                        onClick={handleAboutClick}
                    >
                        About
                    </div>
                    <div
                        className={`cursor-pointer ${pathName === '/skills'
                            ? 'text-cyan-400 border-b-2 border-b-cyan-400'
                            : ''
                            }`}
                        onClick={handleSkillsClick}
                    >
                        Skills
                    </div>
                    <div
                        className={`cursor-pointer ${pathName === '/projects'
                            ? 'text-cyan-400 border-b-2 border-b-cyan-400'
                            : ''
                            }`}
                        onClick={handleProjectClick}
                    >
                        Projects
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
