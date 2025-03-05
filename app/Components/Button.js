
export default function Button(props) {
    return (
        <button className="h-[4rem] duration-250 cursor-pointer hover:text-[#09090b] hover:bg-[#fafafa] text-center text-xl flex items-center justify-center w-[14rem] border-2 border-[#fafafa]" onClick={props.onClick}>
            {props.text}
        </button>
    );
}