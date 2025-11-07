import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        Hello Word com <span class="vite">Vite</span> e{" "}
        <span class="react">React</span>!
      </h1>
      <p>Por: Welberth Oliveira!</p>
    </>
  );
}

export default App;
