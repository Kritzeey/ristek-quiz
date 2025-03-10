"use server";

import Card from "./Card";
import { neon } from "@neondatabase/serverless";
import Link from "next/link";

export default async function CardContainer() {
    try {
        async function readData() {
            const sql = neon(process.env.DATABASE_URL);
            const data = await sql`SELECT id, title, description, duration FROM tryouts`

            const items = data.map(quiz => 
                <Link href={`../Quizpage/${quiz.id}`}>
                    <Card key={quiz.id} title={quiz.title} duration={quiz.duration + " Minutes"} questions={0 + " Questions"}/>
                </Link>)

            return items
        }

        const items = readData()

        return (
            <div className="flex flex-col text-[#fafafa] mt-32 gap-4 font-[Roboto_Mono] w-screen text-center">
                <span className="text-4xl">Available Quizzes</span>
                <span className="text-xl">Can't find your quiz? Try refreshing.</span>
                <div className="flex mt-8 flex-wrap gap-4 w-screen items-center justify-center">
                    {items}
                </div>
            </div>
        );
    } catch(e) {
        return (
            <div className="flex text-[#fafafa] h-screen font-[Roboto_Mono] justify-center items-center text-center">
                It seems like there's an error.
            </div>
        )
    }
}