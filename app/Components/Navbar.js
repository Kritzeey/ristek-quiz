import Image from "next/image";
import logo from "../Assets/Icon Inverted.svg"
import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="font-[Roboto_Mono] font-bold p-4 flex items-center justify-between text-[#fafafa] w-full bg-[#09090b] fixed top-0 bg-[#09090b] z-1">
            <Link className="flex items-center justify-center gap-4 ml-10 text-2xl cursor-pointer"
                href="/"
            >
                <Image src={logo} alt="" width={56} height={56}/>
                RISTEK QUIZ
            </Link>

            <button className="p-3 border-2 border-[#fafafa] mr-10 flex items-center justify-center text-2xl cursor-pointer hover:bg-[#fafafa] duration-250 hover:text-[#09090b]">
                Login
            </button>
        </nav>
    );
}