import React,{useState,useEffect} from 'react';

const Counter = () => {

  const [counter, setcounter] = useState(0);

  const divstyles ={
    color:"red",
    marginRight:"20px"
  }
  
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${counter} times`;
  });
  return (
    <div className="Container">
      <h1>Simple counter:{counter}</h1>
      <div>
      <button onClick={()=>{setcounter(counter+1)}} style={divstyles} > increase </button>
      <button onClick={()=>{setcounter(counter-1)}} style={divstyles}> Decrease </button>
      <button onClick={()=>{setcounter(0)}} style={divstyles}> reset </button>
      </div>
    </div>
  );
};

export default Counter;