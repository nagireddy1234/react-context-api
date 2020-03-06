import React, { useState } from 'react'

export const ArrayHooks = () => {

  const [arrays, setArrays] = useState([{id:1, name:"nagi", value:parseInt(90)}]);

  
function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

 const addArray = () => {
    setArrays([...arrays,{
        id:arrays.length,
        name:makeid(5),
        value:Math.floor((Math.random())*10 +20)
    }])
  }
  return (
    <div className= "container">
        <button onClick={addArray}> Add object</button>
      {arrays.map((array)=>(
           <ul>
           <li key={array.id}>{array.value} : {array.name}</li>
           </ul>
      )
          
         
      )}

      
    </div>
  )
}


