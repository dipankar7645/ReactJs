import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(10);

  const addvalue = () =>{
    console.log("clicked" , counter)
    setCount(counter + 1);
  }

  const removevalue = () => {
    setCount(counter - 1);
  };

  return (
    <>
      <h1>Chai Code</h1>
      <h2>Counter Value {counter}</h2>

      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  );
}

export default App
