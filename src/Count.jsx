import { useEffect, useState } from "react";

function Count(){

    let [count,setCount]=useState(0);

    function handleCount(){
        setCount((oldCount)=>oldCount+1)
    }

    useEffect(()=>console.log("hello from useEffect"),[])

    return(<>
    <h2>Count : {count}</h2>
    <button onClick={handleCount}>+1</button>
    </>)
}

export default Count;