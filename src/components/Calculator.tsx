import { useState } from "react";

function Calculator() {
  const [szam1, setSzam1] = useState("");
  const [szam2, setSzam2] = useState("");
  const [muvelet, setMuvelet] = useState("+");
  const [eredmeny, setEredmeny] = useState<number | null>(null);
  const [hiba, setHiba] = useState("");

  function szamol() {
    setHiba("");
    setEredmeny(null);

    const a = Number(szam1);
    const b = Number(szam2);

    if (
      szam1.trim() === "" ||
      szam2.trim() === "" ||
      !Number.isFinite(a) ||
      !Number.isFinite(b)
    ) {
      setHiba("adj meg ket ervenyes szamot!");
      return;
    }

    if (muvelet === "/" && b === 0) {
      setHiba("nullaval nem lehert osztani!");
      return;
    }

    if (muvelet === "+") {
      setEredmeny(a + b);
    } else if (muvelet === "-") {
      setEredmeny(a - b);
    } else if (muvelet === "*") {
      setEredmeny(a * b);
    } else {
      setEredmeny(a / b);
    }
  }

  return (
    <div className="container my-4">
      <input
        className="form-control mb-3"
        type="number"
        step="any"
        placeholder="Elso szam"
        value={szam1}
        onChange={(e) => setSzam1(e.target.value)}
      />

      <select
        className="form-select mb-3"
        value={muvelet}
        onChange={(e) => setMuvelet(e.target.value)}
      >
        <option value="+">osszeadas</option>
        <option value="-">kivonas</option>
        <option value="*">szorzas</option>
        <option value="/">osztas</option>
      </select>

      <input
        className="form-control mb-3"
        type="number"
        step="any"
        placeholder="Masodik szam"
        value={szam2}
        onChange={(e) => setSzam2(e.target.value)}
      />

      <button className="btn btn-primary" onClick={szamol}>
        szamolas
      </button>

      {hiba !== "" && (
        <p className="alert alert-danger mt-3">{hiba}</p>
      )}

      {eredmeny !== null && (
        <p className="alert alert-success mt-3">
          eredmeny: {eredmeny}
        </p>
      )}
    </div>
  );
}

export default Calculator;