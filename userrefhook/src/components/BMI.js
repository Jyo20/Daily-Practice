import "../css/App.css";
import { useRef } from "react";
import { useState } from "react";
function BMI() {
  let heightInput = useRef();
  let weightInput = useRef();
  let [bmi, setBmi] = useState("💪🏻🏋️‍♀️");
  //   let [name, setName] = useState("");
  let [buttonstatus, setButton] = useState(true);
  function calculateBmiHandler() {
    let bmis =
      weightInput.current.value /
      (((heightInput.current.value / 100) * heightInput.current.value) / 100);

    if (bmis <= 18.5) {
      setBmi("UnderWeight 🍟");
    } else if (bmis > 18.5 && bmis <= 24.9) {
      setBmi("Normal 😍");
    } else if (bmis > 25 && bmis <= 29.9) {
      setBmi("OverWeight 🏋");
    } else if (bmis > 30 && bmis <= 35) {
      setBmi("Obesity 🙏");
    } else {
      setBmi("Severe Obesity 😤");
    }
  }
  return (
    <div className="container">
      <h1>{bmi}</h1>
      <h2>Calculate your BMI </h2>
      <div className="flex">
        <input type="text" placeholder="Enter your height" ref={heightInput} />
        <input type="text" placeholder="Enter your weight" ref={weightInput} />
      </div>

      <button
        className={buttonstatus === true ? "btn" : "d-none"}
        onClick={calculateBmiHandler}
      >
        Submit
      </button>
    </div>
  );
}

export default BMI;
