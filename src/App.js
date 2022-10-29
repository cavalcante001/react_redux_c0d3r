import logo from './logo.svg';
import './App.css';
import Media from './component/Media';
import Soma from './component/Soma';
import Sorteio from './component/Sorteio';
import Intervalo from './component/Intervalo';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Media green></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
