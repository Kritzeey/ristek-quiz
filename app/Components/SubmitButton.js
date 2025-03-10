"use client"

import { useRouter } from "next/navigation";

export default function SubmitButton() {
    const router = useRouter();

    return (
        <button type="submit" onClick={() => 
        router.push("./Quiz")
        } className="bg-[#fafafa] h-[4rem] text-[#09090b] duration-250 cursor-pointer hover:text-[#fafafa] hover:bg-[#09090b] text-center text-xl flex items-center justify-center w-[12rem] border-2 border-[#fafafa]">
            Create Now!
        </button>
    );
};