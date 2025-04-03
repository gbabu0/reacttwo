import React, { useReducer, useState } from 'react';

export  function reducerfn(state,action){
   switch(action.type){
    case "Increment":
            return {count:state.count+1}
    case "decrement":
        return {count:state.count - 1}
    default:
         return state;    
   }

}


function Summa() {
   const [count, setCount] = useState(0);
   const [state,dispatch]=useReducer(reducerfn,{count:0})

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
           <h1>useState Hook Example</h1>
           <p>{state.count}</p>
           <button onClick={add}>Click +</button>
           <button onClick={minus}>Click -</button>
           <button onClick={add1}>Click -</button>
       </>
   );
}

export default Summa;