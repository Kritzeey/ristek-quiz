"use client"

import { useRouter } from "next/navigation";

export default function EditButton(props) {
    const router = useRouter()

    return (
        <button className={`p-4 duration-250 cursor-pointer hover:text-[#09090b] hover:bg-[#fafafa] text-center text-xl flex items-center justify-center border-2 border-[#fafafa] ${props.className}`} 
        onClick={() => 
        {
            props.onClick
            router.push(props.url)
        }}>
            {props.text}
        </button>
    );
}