import { Caveat_Brush } from "next/font/google";

const caveatBrush = Caveat_Brush({
    subsets: ['latin'],
    weight: '400',
});

const Navbar = () => {
    return (
        <div className="flex justify-between p-3 px-8">
            <div className={`${caveatBrush.className} text-xl text-white`}>
                Kaustubh.dev
            </div>
            <div className="flex justify-around gap-4 text-white">
                <div>
                    About
                </div>
                <div>
                    Skills
                </div>
                <div>
                    Projects
                </div>
            </div>
        </div>
    );
};

export default Navbar;
