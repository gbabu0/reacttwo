import { useMemo } from "react";
import { useCallback, useEffect, useState } from "react";

function CallBack() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0); // Declare count1 state
  const [item, setItem] = useState([5, 41, 57, 66, 88, 108]);
  const [sort, setSort] = useState("asc");

  const sortedItems =useMemo(() => {
    console.log("Number is sorted");
    return  item.sort((a,b)=>{
        return sort === "asc" ? a - b : b - a;
    })
   
  });

  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const add1 = () => {
    setCount1(count1 + 1); // Update count1 correctly
  };

  useEffect(() => {
    console.log("Count has changed");
  }, [count]); // Monitor count instead of add

  return (
    <>
      <h1>useState</h1>
      <p>{count}</p>
      <button onClick={add}>click me +</button>
      <p>{count1}</p>
      <button onClick={add1}>click me +</button>

      <h1>Sorted Items</h1>
      <p>{sortedItems}</p> 
      <button onClick={()=>setSort(sort==="asc"?"desc":"asc")}>Toggle</button>
    </>
  );
}

export default CallBack;