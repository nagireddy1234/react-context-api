import React, {useState,useEffect} from 'react'

export const IntervelHookCounter = () => {

  const [count, setcount] = useState(0)

  useEffect(()=>{
    const intervel = setInterval(increment,1000);
    return () =>{clearInterval(intervel)}
  },[count])

   const increment = ()=>{
    setcount(count+1)
  }

  return (
    <div>
      <h1>{count} </h1>
    </div>
  )
}
