import React, {useState} from 'react'

export const ObjectCounter = () => {

  const [name, setName] = useLocalStorage("name", {firstName:"", LastName:""})

  return (
    <div>
        <input type="text" value={name.firstName} onChange={(e)=>setName({...name, firstName:e.target.value})} />
        <input type="text" value={name.LastName} onChange={(e)=>setName({...name, LastName:e.target.value})} />
        <h1> first Name :{name.firstName} </h1>
        <h1> Last Name :{name.LastName} </h1>
        <h1>{JSON.stringify(name)}</h1>
    </div>
  )
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
