import Image from "next/image";
import clock from "../Assets/Clock.svg"

export default function Card(props) {
    return(
        <div className="relative rounded-xl size-64 border-2 border-[#fafafa] flex flex-col items-center justify-center">
            <div className="m-4 rounded-xl absolute top-0 h-32 w-56 bg-[#fafafa] ">

            </div>
            <div className="absolute top-40 text-2xl font-[#fafafa]">
                {props.title}
            </div>
            <div className="absolute bottom-4 flex justify-between w-48">
                <span className="text-[0.6rem] flex items-center justify-center">
                    {props.questions}
                </span>
                <div className="flex items-center justify-center gap-2">
                    <Image src={clock} alt="" width={16} height={16}/>
                    <span className="text-[0.6rem]">
                        {props.duration}
                    </span>
                </div>
            </div>
        </div>
    );
}