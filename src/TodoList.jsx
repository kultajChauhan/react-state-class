import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todoInput, setTodoInput] = useState("");
  let [todoArr, setTodoArr] = useState([
    { task: "Sample", id: uuidv4(), isDone: false },
  ]);

  function inputTodo(event) {
    // console.log(event.target.value)
    setTodoInput(event.target.value);
  }

  function addInput() {
    // setTodoArr([...todoArr,todoInput]);
    setTodoArr((prevTodoArr) => {
      return [...prevTodoArr, { task: todoInput, id: uuidv4(), isDone: false }];
    });
    setTodoInput("");
  }

  function deleteTodo(id) {
    setTodoArr((prevTodoArr) => prevTodoArr.filter((item) => item.id != id));
  }

  //   function upperCaseAll() {
  //     setTodoArr((prevArr) => {
  //        prevArr.map((item) => {
  //         return { ...item, task: item.task.toUpperCase() };
  //       });
  //     });
  //   }

  function upperCaseAll() {
    setTodoArr((prevArr) =>
      prevArr.map((item) => {
        return { ...item, task: item.task.toUpperCase() };
      })
    );
  }

  function upperCaseOne(id) {
    setTodoArr((prevArr) =>
      prevArr.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            task: item.task.toUpperCase(),
          };
        } else {
          return item;
        }
      })
    );
  }

  function done(id, event) {
    setTodoArr((prevArr) =>
      prevArr.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            isDone:true,
          }
        }else{
          return{
            ...item,
          }
        }
      })
    );
  }

function allDone(){
setTodoArr((preArr)=>preArr.map((item)=>{return{...item,isDone:true}}))
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
        {todoArr.map((list) => (
          <li key={list.id}>
            <span style={list.isDone?{textDecoration:"line-through"}:{}}>{list.task}</span> &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(list.id)}>Delete</button>
            <button onClick={() => upperCaseOne(list.id)}>
              Upper Case one
            </button>
            <button onClick={(event) => done(list.id, event)}>Done!</button>
          </li>
        ))}
      </ul>

      <button onClick={upperCaseAll}>UPPER CASE ALL!</button>
      <button onClick={allDone}>All Done</button>
    </>
  );
}
