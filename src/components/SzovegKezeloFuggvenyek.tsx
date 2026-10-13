import { useState } from "react";

function SzovegKezeloFuggvenyek() {
  const [szoveg, setSzoveg] = useState("");
  const [eredmeny, setEredmeny] = useState("");

  function visszaallit() {
    setSzoveg("");
    setEredmeny("");
  }

  return (
    <div className="container my-4">
      <input
        className="form-control"
        type="text"
        placeholder="irj be egy szoveget"
        value={szoveg}
        onChange={(e) => {
          setSzoveg(e.target.value);
          setEredmeny(e.target.value);
        }}
      />

      <p className="mt-3">
        {szoveg.length === 0
          ? "nem irt meg be semmit"
          : `beirt karakterek szama: ${szoveg.length}.`}
      </p>

      <div className="d-flex justify-content-center gap-2 flex-wrap">
        <button
          className="btn btn-primary"
          onClick={() => setEredmeny(eredmeny.toUpperCase())}
        >
          Nagybetus
        </button>

        <button
          className="btn btn-success"
          onClick={() => setEredmeny(eredmeny.toLowerCase())}
        >
          Kisbetus
        </button>

        <button className="btn btn-danger" onClick={visszaallit}>
          Visszaallit
        </button>
      </div>

      <div className="alert alert-secondary mt-3 text-break">
        Eredmeny: {eredmeny}
      </div>
    </div>
  );
}

export default SzovegKezeloFuggvenyek;