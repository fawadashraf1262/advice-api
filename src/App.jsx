import React, { useEffect, useState } from 'react'
import './App.css'
import Message from './Message';

const App = () => {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(-1);

  async function getAdvice(){
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function() {
    getAdvice();
  }, [])

  return (
    <div className="App">
      <h1>{advice}</h1>
      <button class="button-5" onClick={getAdvice}>Get Advice</button>
      <Message count={count}/>
    </div>
  );
}

export default App;
