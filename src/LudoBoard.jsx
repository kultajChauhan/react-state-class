import { useState } from "react"

export default function Ludo(){
    let [moves,setMoves]=useState({
        red:0,
        green:0,
        blue:0,
        yellow:0
    })

    function redLudo(){
        setMoves({...moves, red:moves.red+1})
    }

    function greenLudo(){
        setMoves((currvalue)=>{
           return {...currvalue,green:moves.green+1}
        })
    }
    return(
        <>
        <div className="board">
            <p>red count={moves.red}</p>
            <button style={{backgroundColor:"red"}} onClick={redLudo}>+1</button>

            <p>green count={moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={greenLudo}>+1</button>

            <p>yellow count=0</p>
            <button style={{backgroundColor:"yellow", color:"black"}}>+1</button>

            <p>blue count=0</p>
            <button style={{backgroundColor:"blue"}}>+1</button>
        </div>
        </>
    )
}