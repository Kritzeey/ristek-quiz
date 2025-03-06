import Card from "./Card";
import { neon } from "@neondatabase/serverless";

export default async function CardContainer() {
    async function readData() {
        "use server";

        const sql = neon(process.env.DATABASE_URL);
        const data = await sql`SELECT title, description, duration FROM tryouts`

        const items = data.map(quiz => <Card title={quiz.title} duration={quiz.duration + " Minutes"} questions={0 + " Questions"}/>)

        return (
            <div className="flex flex-col text-[#fafafa] mt-32 gap-16 font-[Roboto_Mono] w-screen text-center">
                <span className="text-4xl">Available Quizzes</span>
                <div className="flex flex-wrap gap-4 w-screen items-center justify-center">
                    {items}
                </div>
            </div>
        );
    }

    return readData()
}