"use client"

import { useRouter } from "next/navigation";

export default function DeleteButton(props) {
    const router = useRouter()

    return (
        <button className={`h-[4rem] duration-250 cursor-pointer hover:text-[#09090b] hover:bg-[#fafafa] text-center text-xl flex items-center justify-center w-[14rem] border-2 border-[#fafafa] ${props.className}`} 
        onClick={() => 
        {
            props.onClick
            router.push("../Quiz")
        }}>
            {props.text}
        </button>
    );
}