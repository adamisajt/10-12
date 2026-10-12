//import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
import Fejlec from "./components/Fejlec";
import ReactKapcsolo from "./components/ReactKapcsolo";
import Lablec from "./components/Lablec";
//colorchanger
import FejlecColorChanger from "./components/FejlecColorChanger";
import ColorChanger from "./components/ColorChanger";
import LablecColorChanger from "./components/LablecColorChanger";

function App() {
  return (
    <div className="alkalmazas">
      <Fejlec />
      <ReactKapcsolo />
      <Lablec />

      <FejlecColorChanger />
      <ColorChanger />
      <LablecColorChanger />
    </div>
  );
}

export default App;