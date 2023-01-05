// import { useEffect, useState } from "react";
// import Api from "./components/api"
import "./App.css";
import ApiTvs from "./components/apiTvs";
import ImgTvs from "./components/imgTvs";
import NavTvs from "./components/navTvs";

function App() {
  // const [valor1, setValor1] = useState(0);
  // const [valor2, setValor2] = useState(0);


  
  // useEffect(() => {
  //   console.log("valores" , valor1, valor2);
  // }, [valor1, valor2]);

  return (
    <div className="App">
      {/* <h1>useEffect</h1>
      <button
        onClick={() => {
          setValor1((valor) => valor + 1);
        }}
      >
        valor1
      </button>
      <button
        onClick={() => {
          setValor2((valor) => valor + 1);
        }}
      >
        valor2
      </button>
      <button
        onClick={() => {
          setValor1((valor) => valor + 1);
          setValor2((valor) => valor + 1);
        }}
      >
        valor Ambos
      </button> */}
      {/* <Api /> */}
      <ImgTvs />
      <NavTvs />
      <ApiTvs  />
    </div>
  );
}

export default App;
