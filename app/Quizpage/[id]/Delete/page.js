import { neon } from "@neondatabase/serverless"
import SubmitButton from "../../../Components/SubmitButton";

export default async function Home({ params }) {
    async function remove() {
        "use server";

        const { id } = await params;
        const sql = neon(`${process.env.DATABASE_URL}`);

        await sql(`DELETE FROM Tryouts WHERE id=${id}`);
    }

    return (
    <>
      <form action={remove} className="h-screen w-screen text-center flex flex-col items-center justify-center text-[#fafafa] font-[Roboto_Mono] font-bold text-4xl">
        <span className="mb-16">Are you sure you want to delete this quiz?</span>
        <SubmitButton text="Yes" url="../../Quiz"/>
      </form>
    </>
  );
}
