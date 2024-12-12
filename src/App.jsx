import { useState } from 'react'
import './App.css'

function App() {
  const [isLike, setisLike] = useState(false);
  const [count, setcount] = useState(0);

  function likebtn(){
    setisLike(!isLike)
    setcount(count+1)
  }

  return (
    <>
    <p>Count={count}</p>
    <h1>Like button!!!</h1>
     <p onClick={likebtn}>{isLike ?<i style={{color:"red"}} class="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>}</p>
    </>
  )
}

export default App
