import React, { useState } from "react";
import Button from "./Button";
import Operation from "./Operation";
import Output from "./Output";

function Calculator() {
  const [inputStore, setinputStore] = useState(0);
  const [result, setresult] = useState("");

  const clickBtnHandler = value => {
    if (value === "AC") {
      setinputStore(0);
      setresult("");
    } else {
      if (inputStore === 0) {
        setinputStore(value);
      } else {
        setinputStore(inputStore + value);
      }
      
    }
  };
  return (
    <div className="calculator-area">
      <div className="button-area">
        <div className="row">
          <Button clickBtnHandler={clickBtnHandler} id={"seven"}>
            7
          </Button>
          <Button clickBtnHandler={clickBtnHandler} id={"eight"}>
            8
          </Button>
          <Button clickBtnHandler={clickBtnHandler} id={"nine"}>
            9
          </Button>
        </div>
        <div className="row">
          <Button clickBtnHandler={clickBtnHandler} id={"four"}>
            4
          </Button>
          <Button clickBtnHandler={clickBtnHandler} id={"five"}>
            5
          </Button>
          <Button clickBtnHandler={clickBtnHandler} id={"six"}>
            6
          </Button>
        </div>
        <div className="row">
          <Button clickBtnHandler={clickBtnHandler} id={"one"}>
            1
          </Button>
          <Button clickBtnHandler={clickBtnHandler} id={"two"}>
            2
          </Button>
          <Button clickBtnHandler={clickBtnHandler} id={"three"}>
            3
          </Button>
        </div>
        <div className="row">
          <Button clickBtnHandler={clickBtnHandler} id={"clear"}>
            AC
          </Button>
          <Button clickBtnHandler={clickBtnHandler} id={"zero"}>
            0
          </Button>
          <Button clickBtnHandler={clickBtnHandler} id={"decimal"}>
            .
          </Button>
        </div>
      </div>
      <div className="output-area">
        <div className="display">
          <Output output={inputStore} />
          <Output output={result} />
        </div>
        <div className="operation">
          <div className="row">
            <Operation id={"add"}>+</Operation>
            <Operation id={"subtract"}>-</Operation>
            <Operation id={"multiply"}>*</Operation>
            <Operation id={"divide"}>/</Operation>
          </div>
          <div className="row">
            <Operation id={"equals"}>=</Operation>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
