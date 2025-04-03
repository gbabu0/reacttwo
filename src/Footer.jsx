import React, { useState, useTransition } from 'react'

function Footer() {

  const [Inputs,setinput]= useState('');
  const [List,setList]= useState([]);
  const List_size =1000;
  const [ispending,settransition]=useTransition();

  function handleChange(e){
     settransition(()=>{

       setinput(e.target.value);
       const L =[];
       for(var i=0;i<List_size;i++){
         L.push(e.target.value);
       }
       setList(L)
     })
  } 

  return (
   <>
   <h1>Use Transition</h1>

   
   <input type="text" value={Inputs} onChange={handleChange} />


   <h1>
    the rendered below 
   </h1>


   {
    (ispending)?<p>loading....</p>
     :List.map((item,index)=>{
     return <p key={index}>{item}</p>
    }
  )
   }
   </>
    
  )
}

export default Footer