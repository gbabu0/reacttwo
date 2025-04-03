import React, { useState } from 'react'
import { reducerfn } from './Summa';
  

reducerfn

export const Ex12 = () => {
    const [count,setcount] = useState(0);

    const add = () => {
        dispatch({type:"Increment"})
          //  setCount(count + 1);
       };
       const add1 = () => {
        dispatch({type:"Increment"})
          //  setCount(count + 1);
       };
    
       const minus = () => {
         dispatch({type:"decrement"})
          //  setCount(count - 1);
       };

  return (
    <>  
    
    
      <h1>uesReducer hook Example</h1>
    <p>{count}</p>
    <button onClick={add}>Click + </button>
    <button onClick={minus}>Click - </button>

    </>

  )
}
