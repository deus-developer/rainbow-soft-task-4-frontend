import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { GeneratorBlock } from './components/GeneratorBlock'


function App() {
  return (
    <div className="App">
      <Header />
      <GeneratorBlock />
    </div>
  );
}

export default App;
