import Card from "./Card";

export default function CardContainer() {
    return(
        <div className="flex flex-col text-[#fafafa] mt-16 gap-16 font-[Roboto_Mono] w-screen text-center">
            <span className="text-4xl">Available Quizzes</span>
            <div className="flex flex-wrap gap-4 w-screen items-center justify-center">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}