import React, { useRef, useEffect, useState } from 'react';

function Component01() {
    const [count, setCount] = useState(5); // For count management
    const [newProduct, setProduct] = useState([
        { id: 1, pname: "Apple", price: "60" },
        { id: 2, pname: "Banana", price: "30" },
        { id: 3, pname: "Grapes", price: "70" },
        { id: 4, pname: "Orange", price: "50" },
        { id: 5, pname: "Mango", price: "90" },
        { id: 6, pname: "Pineapple", price: "120" },
        { id: 7, pname: "Watermelon", price: "80" },
        { id: 8, pname: "Strawberry", price: "150" },
        { id: 9, pname: "Guava", price: "40" },
        { id: 10, pname: "Papaya", price: "60" },
        { id: 11, pname: "Kiwi", price: "130" }
    ]);

    const inputRef = useRef(); // For keeping track of a number (not related to state)
    var focus =()=>{
        inputRef.current.focus();
    }
    const inc = () => setCount(count + 1);
    const dec = () => setCount(count - 1);
    const reset = () => setCount(0);

    const Erase = (id) => {
        const updatedProducts = newProduct.filter((x) => x.id !== id);
        setProduct(updatedProducts);
    };

    // // const add = () => {
    // //     inputRef.current += 1; // Updates the ref value
    // //     console.log("InputRef value: ", inputRef.current);
    // // };

    // useEffect(() => {
    //     console.log("Component mounted!");
    // }, []);

    return (
    //     // <div>
    //     //     <h1>Use State Example</h1>
    //     //     <p>Count: {count}</p>
    //     //     <button onClick={inc}>Increase</button>
    //     //     <button onClick={dec}>Decrease</button>
    //     //     <button onClick={reset}>Reset</button>
    //     //     {/* <p>Ref Value: {inputRef.current}</p>
    //     //     <button onClick={add}>Add to Ref</button> */}
    //     //     <input type='text' ref={inputRef} />
    //     //     <button onClick={focus}>Focus</button>

    //     //     {newProduct.map((product) => (
    //     //         <div key={product.id}>
    //     //             <h2>Product Name: {product.pname}</h2>
    //     //             <p>Price: {product.price}</p>
    //     //             <button onClick={() => Erase(product.id)}>Erase</button>
    //     //         </div>
    //     //     ))}
    //     // </div>
        <div>BAbu</div>

    );
}

export default Component01;