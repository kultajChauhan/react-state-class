import { useState } from 'react'
import './App.css'
import LikeBtn from './LikeBtn'
import Ludo from './LudoBoard'
import TodoList from './TodoList'
import Lotter from './Lottery'

function App() {
 
  return (
    <>
   {/* <LikeBtn/> */}
   {/* <Ludo/> */}
   {/* <TodoList/> */}
   <Lotter n={4} winingNum={20}/>
    </>
  )
}

export default App
