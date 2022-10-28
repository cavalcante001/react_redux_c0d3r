import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import Intervalo from './component/Intervalo';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Card title="Card 2" green>x</Card>
        <Card title="Card 3" blue>y</Card>
        <Card title="Card 4" purple>y</Card>
      </div>
    </div>
  );
}

export default App;
