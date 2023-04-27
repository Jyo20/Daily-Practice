import { useState } from "react";
function Hook() {
  const [counter, setCounter] = useState(0);
  function incrementHandler() {
    setCounter(counter + 1);
  }
  function decrementHandler() {
    setCounter(counter - 1);
  }
  return (
    <div className="App">
      <h1>Introduction to State Hook</h1>
      <h4 className="heading">{counter}</h4>
      <button className="btn" onClick={incrementHandler}>
        Increment
      </button>
      <button className="btn" onClick={decrementHandler}>
        Decrement
      </button>
    </div>
  );
}
export default Hook;
