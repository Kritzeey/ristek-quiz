"use client"

import { useState } from 'react';
import CardContainer from "./Components/CardContainer";
import Menu from "./Components/Menu.js";

export default function Home() {
  const [status, setStatus] = useState("menu");

  return (
    <>
      {status === "menu" && <Menu setStatus={setStatus} />}
      {status === "quiz" && <CardContainer />}  
    </>
  );
}