import React from 'react';
import Counter from "./Components/Counter"
import './App.css';
import Storedcounter from './Components/Strinnghooks';
import {ObjectCounter} from './Components/ObjectHooks';
import {ArrayHooks} from "./Components/ArrayHooks";
import ClassCounter from './Components/ClassCounter';
import MouseHook from './Components/MouseHook';
import IntervelCounter from './Components/IntervelCounter';
import {IntervelHookCounter} from './Components/IntervelHookCounter'

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Storedcounter />
      <hr />
      <ObjectCounter />
      <hr />
      <ArrayHooks />
      <hr />
      <ClassCounter />
      <hr />
      <MouseHook />
      <hr />
      <IntervelCounter />
      <hr />
      <IntervelHookCounter />
    </div>
  );
}

export default App;
