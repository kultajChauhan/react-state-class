import { useState } from "react";

export default function TodoList() {

    let [todoInput,setTodoInput]=useState('');
    let [todoArr,setTodoArr]=useState([]);

    function inputTodo(event){
        // console.log(event.target.value)
        setTodoInput(event.target.value);

    }

    function addInput(){
        setTodoArr([...todoArr,todoInput]);
        setTodoInput('');
    }

  return (
    <>
      <input type="text" value={todoInput} onChange={inputTodo} />
      <button onClick={addInput}>Add</button>
      <br />
      <br />
      <hr />
      {/* list */}
      <ul>
        {todoArr.map((list)=>(<li>{list}</li>))}
      </ul>
    </>
  );
}
