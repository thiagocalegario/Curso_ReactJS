import './App.css';
import Carros from "./componentes/Carros";

function App() {
    const Modelos = [
        {id: 1, modelo: "fiat", cor: "azul", km: 2031},
        {id: 2, modelo: "camaro", cor: "amarelo", km: 100000},
        {id: 3, modelo: "ferrari", cor: "vermelha", km: 0},
        {id: 4, modelo: "quantum", cor: "roxa", km: 230000}
    ]
  return (
    <div className="App">
      <><h1>Showroom de Carros</h1></>
        <div>
            <Carros props={Modelos}/>
        </div>
    </div>
  );
}

export default App;
