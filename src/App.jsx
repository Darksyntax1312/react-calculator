import styles from "./App.module.css";
import Buttonitems from "../Components/Buttons";
import Inputbox from "../Components/inputbox";
import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [displayValue, updatedValue] = useState(0);
  const [Operator, updateNewValue] = useState(null);
  const [firstNumber, updateFunc] = useState(null);

  let toggleButton = (items) => {
    if (displayValue === 0) {
      updatedValue(items);
    } else {
      updatedValue((prevValue) => prevValue + items);
    }
  };

  let toggleButtonC = (items) => {
    if (items === "C") {
      updatedValue(0);
    }
  };

  let handleOperator = (items) => {
    updateNewValue(items);
    updateFunc(displayValue);
    console.log("First number stored:", displayValue);
    updatedValue(0);
  };

  let calculateResult = () => {
    let secondNumber = displayValue;
    let result;

    if (Operator === "+") {
      result = Number(firstNumber) + Number(secondNumber);
    } else if (Operator === "-") {
      result = Number(firstNumber) - Number(secondNumber);
    } else if (Operator === "*") {
      result = Number(firstNumber) * Number(secondNumber);
    } else if (Operator === "/") {
      result = Number(firstNumber) / Number(secondNumber);
    }

    updatedValue(result);
    updateFunc(result);
    updateNewValue(null);
  };

  return (
    <React.Fragment>
      <div className="boxContainer">
        <div className={styles.calculatorContainer}>
          <Inputbox displayValue={displayValue}></Inputbox>
          <Buttonitems
            toggleButton={toggleButton}
            toggleButtonC={toggleButtonC}
            handleOperator={handleOperator}
            calculateResult={calculateResult}
          ></Buttonitems>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
