import { useState } from "react";
import KepBetolto from "./KepBetolto";

function ReactKapcsolo() {
  const [bekapcsolva, setBekapcsolva] = useState<boolean>(false);

  const kepUrl = bekapcsolva
    ? "https://www.w3schools.com/js/pic_bulbon.gif"
    : "https://www.w3schools.com/js/pic_bulboff.gif";

  function kapcsolas() {
    setBekapcsolva((elozoAllapot) => !elozoAllapot);
  }

  return (
    <section className="kapcsolo">
      <h2>izzo kapcsolo</h2>

      <KepBetolto
        kepUrl={kepUrl}
        leiras={bekapcsolva ? "bekapcsolt" : "kikapcsolt"}
      />

      <p className="allapot">
        allapot: {bekapcsolva ? "Be" : "Ki"}
      </p>

      <button
        type="button"
        onClick={kapcsolas}
      >
        {bekapcsolva ? "kikapcsolas" : "bekapcsolas"}
      </button>
    </section>
  );
}

export default ReactKapcsolo;