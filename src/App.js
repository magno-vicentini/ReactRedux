import logo from './logo.svg';

import React from 'react'
import './App.css';
import Média from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import Intervalo from './components/Intervalo'

function App() {

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
        <div className='linha'>
          <Intervalo ></Intervalo>
        </div>
        <div className='linha'>
          <Média ></Média>
          <Soma ></Soma>
          <Sorteio ></Sorteio>
        </div>
    </div>
  );
}

export default App;
