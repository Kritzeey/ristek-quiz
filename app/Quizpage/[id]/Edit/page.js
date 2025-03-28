import { neon } from "@neondatabase/serverless"
import SubmitButton from "../../../Components/SubmitButton";

export default async function Home({ params }) {
  async function update(formData) {
    "use server";

    const { id } = await params;
    const sql = neon(`${process.env.DATABASE_URL}`);

    const title = formData.get("title");
    const description = formData.get("description");
    const duration = formData.get("duration");

    await sql(`UPDATE Tryouts SET Title='${title}' WHERE id='${id}'`);
    await sql(`UPDATE Tryouts SET Description='${description}' WHERE id='${id}'`);
    await sql(`UPDATE Tryouts SET Duration='${duration}' WHERE id='${id}'`);
  }

  return (
    <>
      <form action={update} className="mb-24 mt-32 h-screen w-screen text-center flex flex-col items-center justify-center text-[#fafafa] font-[Roboto_Mono] font-bold text-7xl">
        Create Quiz

        <label className="text-xl mt-24 w-128 text-center">Enter Your Quiz Title</label>
        <input type="text" placeholder="Title" className="text-xl border-2 p-4 w-128 mt-4" name="title" id="title"/>

        <label className="text-xl mt-16 w-128 text-center">Make a Short Description</label>
        <input type="text" placeholder="Description" className="text-xl border-2 p-4 w-128 mt-4" name="description" id="description"/>

        <label className="text-xl mt-16 w-128 text-center">Enter Your Quiz Duration</label>
        <div className="flex gap-16">
          <input type="number" placeholder="Minutes" className="text-xl border-2 p-4 w-48 mt-4" name="duration" id="duration" min="1" max="999"/>
        </div>

        <div className="flex gap-4 mt-16">
          <button type="reset" 
            className="bg-[#fafafa] h-[4rem] text-[#09090b] duration-250 cursor-pointer hover:text-[#fafafa] hover:bg-[#09090b] text-center text-xl flex items-center justify-center w-[8rem] border-2 border-[#fafafa]"
          >
            Reset
          </button>
          <SubmitButton text="Update!" url="../../Quiz"/>
        </div>
      </form>
    </>
  );
}
