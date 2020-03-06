import React, { useState } from 'react';

// Usage
 function Storedcounter () {
  // Similar to useState but first arg is key to the value in local storage.
  const initialCounter = 0;
  const [counter, setCounter] = useLocalStorage('counter', initialCounter);

  const divstyles ={
    color:"red",
    marginRight:"20px"
  }

  return (     <div className="container">
  <h1>Counter using LocalStorage : {counter}</h1>
  <div>
  <button onClick={()=>{setCounter(counter+1)}} style={divstyles} > increase </button>
  <button onClick={()=>{setCounter(counter-1)}} style={divstyles}> Decrease </button>
  <button onClick={()=>{setCounter(initialCounter)}} style={divstyles}> reset </button>
  </div>
</div>
  );
}

// Hook
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default Storedcounter;