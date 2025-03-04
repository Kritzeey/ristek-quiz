import Image from "next/image";
import logo from "../Assets/Icon Inverted.svg"

export default function Navbar() {
    return(
        <nav className="font-[Roboto_Mono] font-bold p-4 flex items-center justify-between text-[#fafafa] w-screen fixed bg-[#09090b] top-0">
            <a className="flex items-center justify-center gap-4 ml-10 text-2xl cursor-pointer"
                href="/"
            >
                <Image src={logo} alt="" width={56} height={56}/>
                RISTEK QUIZ
            </a>

            <button className="p-3 rounded-xl border-2 border-[#fafafa] mr-10 flex items-center justify-center text-2xl cursor-pointer hover:bg-[#fafafa] duration-250 hover:text-[#09090b]">
                Login
            </button>
        </nav>
    );
}