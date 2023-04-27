import "../css/App.css";
import { useRef } from "react";
import { useState } from "react";
function App() {
  let nameInput = useRef();
  let [name, setName] = useState("");
  let [buttonstatus, setButton] = useState(true);
  function submitNameHandler() {
    setName(nameInput.current.value);
    setButton(false);
  }
  return (
    <div className="container">
      <h1>Welcome to react bootcamp {name}! </h1>
      <input type="text" placeholder="Enter your name" ref={nameInput} />
      <button
        className={buttonstatus === true ? "btn" : "d-none"}
        onClick={submitNameHandler}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
