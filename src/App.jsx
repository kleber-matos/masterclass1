/** @format */
// Switch case: https://www.w3schools.com/js/js_switch.asp

import { useState } from "react";

export default function App() {
  //Pega o valor do primeiro input e guarda
  const [primeiroValor, setPrimeiroValor] = useState();

  //Pega o valor do segundo input e guarda
  const [segundoValor, setSegundoValor] = useState();

  //Guarda o resultado
  const [resultado, setResultado] = useState(0);

  function soma() {
    setResultado(Number(primeiroValor) + Number(segundoValor));
  }
  function subtracao() {
    setResultado(Number(primeiroValor) - Number(segundoValor));
  }

  return (
    <div>
      <h2>Calculadora</h2>

      <h1>{resultado}</h1>
      <div>
        {/* Numeros */}
        <input
          onChange={(e) => setPrimeiroValor(e.target.value)}
          type="number"
        />
        <input
          onChange={(e) => setSegundoValor(e.target.value)}
          type="number"
        />

        {/* Botoões */}
        <div>
          <button onClick={() => soma()}>+</button>
          <button onClick={() => subtracao()}>-</button>
          <button>*</button>
          <button>c</button>
        </div>
      </div>
    </div>
  );
}
