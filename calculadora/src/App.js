import './App.css';
import React, { useState } from'react';

function App() {
  const [display, setDisplay] = useState('0');
  const [valorAnterior, setValorAnterior] = useState(0);
  const [operacao, setOperacao] = useState('');


  const handleClick = (value) => {
    setDisplay(display === '0' ? value : display + value);
  };

  const handleOperacao = (value) => {
    setValorAnterior(display);
    setOperacao(value);
    setDisplay('0');
  }

  const handleIgual = () => {
   switch (operacao) {
     case '+':
      setDisplay(parseFloat(valorAnterior) + parseFloat(display));
      break;
      case '-':
        setDisplay(parseFloat(valorAnterior) - parseFloat(display));
        break;
        case '*':
        setDisplay(parseFloat(valorAnterior) * parseFloat(display));
        break;
        case '/':
        setDisplay(parseFloat(valorAnterior) / parseFloat(display));
        break;
      default:
        break;
   }
  }

  const handleClear = () => {
    setDisplay('0');
    setValorAnterior(0);
    setOperacao('');
  }

  return(
 <>
 <body>
  
   <div className='calculadora'>
   <div>
    <h1>Calculadora</h1>
    <div className="app">{display}</div>
     <div className='botoes'>
   <button className="botao" onClick={() => handleClick('7')}>7</button>
   <button className="botao" onClick={() => handleClick('8')}>8</button>
   <button className="botao" onClick={() => handleClick('9')}>9</button>
   <button className="botao" onClick={() => handleClick('0')}>0</button>
   <button className="botao" onClick={() => handleClick('4')}>4</button>
   <button className="botao" onClick={() => handleClick('5')}>5</button>
   <button className="botao" onClick={() => handleClick('6')}>6</button>
   <button className="botao" onClick={() => handleOperacao('+')}>+</button>
   <button className="botao" onClick={() => handleClick('1')}>1</button>
   <button className="botao" onClick={() => handleClick('2')}>2</button>
   <button className="botao" onClick={() => handleClick('3')}>3</button>
   <button className="botao" onClick={() => handleOperacao('-')}>-</button>
   <button className="botao" onClick={() => handleOperacao('*')}>*</button>
   <button className="botao" onClick={() => handleOperacao('/')}>/</button>
   <button className="botao grande1" onClick={() => handleIgual()}>=</button>
   <button className="botao grande2" onClick={() => handleClear()}>reset</button>
     </div>
    </div>
  </div>
 </body>
 </>
)
}

export default App;