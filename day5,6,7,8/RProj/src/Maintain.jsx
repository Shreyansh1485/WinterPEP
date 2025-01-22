import { useState } from "react";
function Maintain(){
    const[name,setName]=useState("Lpu punjab");
    return(
        <>
        <p>
            my name is {name}
        </p>
        <button onClick={()=>{
            setName("Lovely")
        }}>Update</button>
        </>
    )
}
export default Maintain;