import React, {useState} from 'react';
import './App.css';



function App() {
  const [valor, setValor] = useState(1);

  const add = () => {
    setValor(valor + 1)
  };
 return(
  <>
    <h1>{valor}</h1>
    <button onClick={add}>Clique em mim</button>
  </>
 );
}

export default App;
