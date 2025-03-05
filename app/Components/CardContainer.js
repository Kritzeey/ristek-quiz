import Card from "./Card";

export default function CardContainer() {
    const quizList = [
        {
            id: "1",
            title: "JavaScript",
            duration: "30",
            questions: "45",
        }, {
            id: "2",
            title: "Python",
            duration: "24",
            questions: "30",
        },
    ];

    const listItems = quizList.map(quiz => <Card title={quiz.title} key={quiz.id} duration={quiz.duration + " Minutes"} questions={quiz.questions + " Questions"}/>)

    return (
        <div className="flex flex-col text-[#fafafa] mt-32 gap-16 font-[Roboto_Mono] w-screen text-center">
            <span className="text-4xl">Available Quizzes</span>
            <div className="flex flex-wrap gap-4 w-screen items-center justify-center">
                {listItems}
            </div>
        </div>
    );
}