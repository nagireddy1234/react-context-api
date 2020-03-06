import React, {useState, useEffect } from 'react';

const MouseHook = () => {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const clientChanges = e => {
    console.log("mousecalls")
    setX(e.clientX) 
    setY(e.clientY)
  }

  useEffect (()=>{
    console.log("useeffect called")
    window.addEventListener("mousemove",clientChanges)
  },[])
  return (
    <div>
    <h1> Hooks  x-{x}, y-{y} </h1>
    </div>
  );
};

export default MouseHook;
