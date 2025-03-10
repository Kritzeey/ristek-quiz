import { neon } from "@neondatabase/serverless";
import DeleteButton from "@/app/Components/DeleteButton";

export default async function QuizPage({ params }) {
    const { id } = await params;
 
    const sql = neon(process.env.DATABASE_URL)

    const quizData = await sql`SELECT * FROM tryouts WHERE id=${id}`;

    const quiz = quizData[0];

    async function remove() {
        "use server";
        const sql = neon(`${process.env.DATABASE_URL}`);

        await sql(`DELETE FROM Tryouts WHERE id=${id}`);
    }

    return (
        <div className="flex h-screen flex-col items-center justify-center text-[#fafafa] font-[Roboto_Mono]">
            <span className="text-4xl">Title: {quiz.title}</span>
            <span className="text-xl mt-4">Description: {quiz.description}</span>
            <span className="text-xl mt-4">Duration: {quiz.duration} Minutes</span>

            <DeleteButton onClick={remove()} className="mt-8" text="Delete" />
        </div>
    );
}