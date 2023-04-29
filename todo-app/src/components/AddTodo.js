import styles from "./AddTodo.module.css";
import Todo from "./Todo";
import { useRef, useState } from "react";

function AddTodo() {
  let [todo, setTodo] = useState([]);
  const TaskInput = useRef(null);

  function addTaskHandler() {
    const task = TaskInput.current.value;
    const newTodo = [...todo, task];
    setTodo(newTodo);
    console.log("full Map", newTodo);
  }
  return (
    <div className={styles.container}>
      {todo.map((todo, index) => {
        return <Todo key={index} todo={todo} />;
      })}
      <h1>
        Manage your task <span className={styles.grey}>@jyotsna</span>
      </h1>
      <p>Start by adding your first task #taskManager #productivity </p>
      <input
        type="text"
        ref={TaskInput}
        placeholder="e.g. Complete unit assignmemts"
        className={styles.input}
      />
      <button className={styles.btn} onClick={addTaskHandler}>
        Add New Task
      </button>
    </div>
  );
}
export default AddTodo;
