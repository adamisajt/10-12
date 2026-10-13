import { useState } from "react";

function ComplexCalculator() {
  const [kijelzo, setKijelzo] = useState("0");
  const [elsoSzam, setElsoSzam] = useState<number | null>(null);
  const [muvelet, setMuvelet] = useState("");
  const [ujSzam, setUjSzam] = useState(true);
  const [hiba, setHiba] = useState("");

  function szamBeiras(ertek: string) {
    setHiba("");

    if (ujSzam) {
      setKijelzo(ertek === "." ? "0." : ertek);
      setUjSzam(false);
      return;
    }

    if (ertek === "." && kijelzo.includes(".")) {
      return;
    }

    setKijelzo(
      kijelzo === "0" && ertek !== "." ? ertek : kijelzo + ertek
    );
  }

  function muveletValasztas(jel: string) {
    setHiba("");

    if (elsoSzam !== null && !ujSzam) {
      setHiba("nyomd meg az egyenlosegjelet!");
      return;
    }

    setElsoSzam(Number(kijelzo));
    setMuvelet(jel);
    setUjSzam(true);
  }

  function szamol() {
    if (elsoSzam === null || muvelet === "" || ujSzam) {
      setHiba("adj meg ket szamot es egy muveletet!");
      return;
    }

    const masodikSzam = Number(kijelzo);
    let eredmeny: number;

    if (muvelet === "+") {
      eredmeny = elsoSzam + masodikSzam;
    } else if (muvelet === "-") {
      eredmeny = elsoSzam - masodikSzam;
    } else if (muvelet === "*") {
      eredmeny = elsoSzam * masodikSzam;
    } else if (muvelet === "/") {
      if (masodikSzam === 0) {
        setHiba("nullaval nem lehet osztani!");
        return;
      }

      eredmeny = elsoSzam / masodikSzam;
    } else {
      setHiba("hibas muvelet!");
      return;
    }

    if (!Number.isFinite(eredmeny)) {
      setHiba("nem ervenyes szam!");
      return;
    }

    setKijelzo(String(eredmeny));
    setElsoSzam(null);
    setMuvelet("");
    setUjSzam(true);
    setHiba("");
  }

  function torles() {
    setKijelzo("0");
    setElsoSzam(null);
    setMuvelet("");
    setUjSzam(true);
    setHiba("");
  }

  return (
    <div className="complex-szamologep">
      <div className="kijelzo">{kijelzo}</div>

      <div className="szamologep-gombok">
        <button onClick={() => szamBeiras("7")}>7</button>
        <button onClick={() => szamBeiras("8")}>8</button>
        <button onClick={() => szamBeiras("9")}>9</button>
        <button onClick={() => muveletValasztas("/")}>÷</button>

        <button onClick={() => szamBeiras("4")}>4</button>
        <button onClick={() => szamBeiras("5")}>5</button>
        <button onClick={() => szamBeiras("6")}>6</button>
        <button onClick={() => muveletValasztas("*")}>×</button>

        <button onClick={() => szamBeiras("1")}>1</button>
        <button onClick={() => szamBeiras("2")}>2</button>
        <button onClick={() => szamBeiras("3")}>3</button>
        <button onClick={() => muveletValasztas("-")}>−</button>

        <button onClick={() => szamBeiras("0")}>0</button>
        <button onClick={() => szamBeiras(".")}>.</button>
        <button onClick={szamol}>=</button>
        <button onClick={() => muveletValasztas("+")}>+</button>
      </div>

      <button className="torles-gomb" onClick={torles}>
        C – torles
      </button>

      {hiba !== "" && <p className="text-danger mt-3">{hiba}</p>}
    </div>
  );
}

export default ComplexCalculator;