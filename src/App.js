import React, {useState} from 'react';
import Counter from './Counter';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`${theme} container`}>
      <Counter
        theme={theme}
        counter={counter}
        setCounter={setCounter}
      />
      <br/>
      <br/>
      <button
        className={theme}
        onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}
      >
        Toggle theme
      </button>
    </div>
  );
}

export default App;
