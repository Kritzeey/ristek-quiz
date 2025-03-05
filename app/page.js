

import CardContainer from "./Components/CardContainer";
import Menu from "./Components/Menu.js";
import { neon } from '@neondatabase/serverless';

export default function Home() {
  async function create(formData) {
    "use server";

    const sql = neon(`${process.env.DATABASE_URL}`);
    const comment = formData.get('comment');

    await sql('INSERT INTO comments (comment) VALUES ($1)', [comment]);
  }

  const status = "menu";

  return (
    <>
      {status === "menu" && <Menu />}
      {status === "quiz" && <CardContainer />}  

      <form action={create} className="flex h-screen bg-[#fafafa]">
        <input type="text" placeholder="write a comment" name="comment" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}