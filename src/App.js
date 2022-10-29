import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Media from './component/Media';
import Soma from './component/Soma';
import Sorteio from './component/Sorteio';
import Intervalo from './component/Intervalo';

function App() {
  
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo onMinChange={setMin} onMaxChange={setMax} min={min} max={max}></Intervalo>
      </div>
      <div className="linha">
        <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio>
      </div>
    </div>
  );
}

export default App;
