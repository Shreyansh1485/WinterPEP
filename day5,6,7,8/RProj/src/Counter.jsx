import { use } from "react";
import { useState } from "react";

function Counter(){
    const [count,setcount]=useState(0);
    function plus(){
        setcount(count+1)
    }
    return (
        <button onClick={plus}>counter {count}</button>
    )
}

export default Counter;