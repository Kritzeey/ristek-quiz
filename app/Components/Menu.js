import Button from "./Button.js"

export default function Menu() {
  return (
    <>
      <div className="gap-[2rem] h-screen top-0 w-screen text-center flex flex-col items-center justify-center text-[#fafafa] font-[Roboto_Mono] font-bold text-7xl top-0">
        Ristek Quiz
        <div className="flex flex-row gap-[2rem]">
          <Button text="Tryout List" onClick={() => 
            window.location.href="/Quiz"
          } />
          <Button text="Create Tryout" onClick={() =>
            window.location.href="/Create"
          } />
        </div>
      </div>
    </>
  )
}
