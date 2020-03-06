import React from 'react';
import Counter from "./Components/Counter"
import './App.css';
import Storedcounter from './Components/Storedcounter';
import {ObjectCounter} from './Components/ObjectCounter';
import {ArrayHooks} from "./Components/ArrayHooks"

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <hr />
      <Storedcounter />
      <hr />
      <ObjectCounter />
      <hr /> */}
      <ArrayHooks />
    </div>
  );
}

export default App;
