import { useState } from 'react';
import './App.css';

export default function App() {
  const [numero, setNumero] = useState(0);

  function aumentar() {
    setNumero(numero + 1);
  }

  function diminuir() {
    setNumero(numero - 1);
  }

  function zerar() {
    setNumero(0);
  }

  function centena() {
    setNumero(numero + 100);
  }

  function centenaneg() {
    setNumero(numero - 100);
  }

  function mil() {
    setNumero(numero + 1000);
  }

  function milneg() {
    setNumero(numero - 1000);
  }

  function dezena() {
    setNumero(numero + 10);
  }

  function dezenaneg() {
    setNumero(numero - 10);
  }

  const obterClasse = () => {
    if (numero > 0) {
      return 'positivo';
    } else if (numero < 0) {
      return 'negativo';
    } else {
      return 'neutro';
    }
  };

  return (
    <section className='geral'>
    <section className={obterClasse()}>
      <h1 className='text'>Contador</h1>
      <p className='number'>{numero}</p>
    

      <h4>
      <button onClick={aumentar}>+1</button>
      <button onClick={dezena}>+10</button>
      <button onClick={centena}>+100</button>
      <button onClick={mil}>+1000</button>
      </h4>
      <h4>
      <button onClick={diminuir}>-1</button>
      <button onClick={dezenaneg}>-10</button>
      <button onClick={centenaneg}>-100</button>
      <button onClick={milneg}>-1000</button>  

      </h4>
      <h4>
      <button onClick={zerar}>clean</button>  
      </h4>
    </section>
    </section>
  );
}
