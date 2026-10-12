import { useState } from "react";

function ColorChanger() {
  const [szin, setSzin] = useState("white");

  function ujSzin() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setSzin(`rgb(${r}, ${g}, ${b})`);
  }

  return (
    <main style={{ backgroundColor: szin }}>
      <button onClick={ujSzin}>uj szin</button>
    </main>
  );
}

export default ColorChanger;