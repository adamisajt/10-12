//import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
import Fejlec from "./components/Fejlec";
import ReactKapcsolo from "./components/ReactKapcsolo";
import Lablec from "./components/Lablec";

function App() {
  return (
    <div className="alkalmazas">
      <Fejlec />

      <main>
        <ReactKapcsolo />
      </main>

      <Lablec />
    </div>
  );
}

export default App;