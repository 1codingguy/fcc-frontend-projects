import { useState, useEffect } from "react";
import "./App.css";
import Btn from "./Btn";

function App() {
  const [input, setInput] = useState({});
  const [currentValue, setCurrentValue] = useState("0");
  const [formula, setFormula] = useState(null);
  const [hasDecimal, setHasDecimal] = useState(false);
  const [lastIsOperator, setLastIsOperator] = useState(false);
  const [lastIsnegative, setLastIsNegative] = useState(false);

  // const operators = ["+", "-", "x", "/"];

  useEffect(() => {
    // console.log(input.value);

    // clear and reset
    if (input.className === "clear") {
      console.log("running 1. clear block");
      setCurrentValue("0");
      setFormula(null);
      setHasDecimal(false);
      setLastIsOperator(false);
      setLastIsNegative(false);
      return;
    }
    // duplicated 0
    if (input.value === "0" && currentValue === "0") {
      console.log("running 2. duplicated zeros block");
      setCurrentValue("0");
      setFormula("0");
      return;
    }
    // no duplicated decimals
    if (!hasDecimal && input.value === ".") {
      console.log("running 5th decimal block");
      setHasDecimal(true);
      setCurrentValue(currentValue + input.value);
      if (!formula) {
        setFormula("0" + input.value);
      } else {
        setFormula(formula + input.value);
      }
      return;
    }
    // program initiated, when currentValue is "0"
    if (Object.keys(input).length !== 0 && currentValue === "0") {
      console.log("running 3rd program init block");
      setCurrentValue(input.value);
      setFormula(input.value);

      if (input.className === "operators") {
        setLastIsOperator(true);
        return;
      }

      setLastIsOperator(false);
      return;
    }
    // after program init, currentValue is set
    if (Object.keys(input).length !== 0 && input.className === "numbers") {
      console.log("running 4th block");

      if (lastIsOperator || lastIsnegative) {
        setCurrentValue(input.value);
      } else {
        setCurrentValue(currentValue + input.value);
      }

      setFormula(formula + input.value);
      setLastIsOperator(false);
      setLastIsNegative(false);
      return;
    }
    // adding operators
    if (input.className === "operators") {
      console.log("running operators block");

      let formulaValue = input.value == "x" ? "*" : input.value;
      console.log(formulaValue);

      if (lastIsOperator && lastIsnegative && input.value !== "-") {
        console.log("remove the last two operators");
        setCurrentValue(input.value);
        setFormula(formula.slice(0, -2) + formulaValue);
        setLastIsNegative(false);
        setHasDecimal(false);
        return;
      }

      if (lastIsOperator && lastIsnegative && input.value === "-") {
        console.log("last two are operators, current minus, do nothing.");
        return;
      }

      if (lastIsOperator && input.value === "-") {
        console.log("last is an operator, current is minus");
        setCurrentValue(input.value);
        setFormula(formula + formulaValue);
        setLastIsNegative(true);
        setHasDecimal(false);

        return;
      }

      if (lastIsOperator) {
        // replace the last operator with current one
        console.log("last is an operator");
        setCurrentValue(input.value);
        setFormula(formula.slice(0, -1) + formulaValue);
        setHasDecimal(false);

        return;
      }
      // default case
      setCurrentValue(input.value);
      setFormula(formula + formulaValue);
      setLastIsOperator(true);
      setHasDecimal(false);
    }

    if (input.className === "equals") {
      const answer = eval(formula);
      setFormula(formula + `= ${answer}`);
      setCurrentValue(answer);
    }
  }, [input]);

  return (
    <div className="background">
      <div className="outer-container">
        <div className="calculator">
          <div className="screen formula-screen">{formula}</div>
          <div className="screen output-screen" id="display">
            {currentValue}
          </div>
          <Btn setInput={setInput} />
        </div>
        <div className="author">
          <p>Coded by</p>
          <p>
            <a href="#">coding-guy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
