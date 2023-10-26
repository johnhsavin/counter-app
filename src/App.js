import { useState } from 'react';     // Hook(start with word use and used at top level of component) that is used regularly
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  //must use square brackets
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Counter</h1>
        <h2>You clicked {counter} times.</h2>
        <div>
          <button onClick={() => setCounter(counter + 1)}>+</button>
          <button onClick={() => setCounter(0)}>Reset</button>
          <button onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>-</button>  
        
        </div>
      </header>
    </div>
  );
}

export default App;
