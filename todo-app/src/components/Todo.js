import styles from "./Todo.module.css";
function Todo(props) {
  return (
    <div className={styles.todoflex}>
      <input type="checkbox"  className={styles.taskDone}/>
      <p>{props.todo}</p>
    </div>
  );
}
export default Todo;
