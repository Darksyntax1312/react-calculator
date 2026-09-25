import styles from "./Buttons.module.css";
import React from "react";
function Buttonitems({
  toggleButton,
  toggleButtonC,
  handleOperator,
  calculateResult,
}) {
  let buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <React.Fragment>
      <div className={styles.buttonContainer}>
        {buttonNames.map((items, index) => (
          <button
            key={index}
            className={styles.Button}
            onClick={() => {
              if (items === "C") {
                toggleButtonC(items);
              } else if (["+", "-", "*", "/"].includes(items)) {
                handleOperator(items);
              } else if (items === "=") {
                calculateResult();
              } else {
                toggleButton(items);
              }
            }}
          >
            {items}
          </button>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Buttonitems;
