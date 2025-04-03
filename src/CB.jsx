import React, { useState,useEffect } from 'react'

function CB() {
    const[count,setCount]= useState(0);
       const[count1, setCount1]=useState(0);
       var inc=()=>{
           setCount(count+1);
       }
       var inc1=()=>{
           setCount1(count1+1);
       }
       useEffect((
           console.log("Count value is changed")
       ),[inc]);
  return (
    <>
      
        <h1>count1 value is{count}</h1>
        <button onClick={inc}> click</button>
        <h1>count2 value is {count1}</h1>
        <button onClick={inc1}> click  2 </button>
    </>
  )
}

export default CB