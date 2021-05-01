import logo from "./logo.svg";
import "./App.css";
import React, { useMemo, useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [age, setAge] = useState(0);

  const incrementCount = () => {
    setCounter((prev) => prev + 1);
  };

  const incrementAge = () => {
    setAge((prev) => prev + 1);
  };

  const isEven = useMemo(() => {
    console.log("isEven Trigger");
    let i = 0;
    while (i < 2000000000) i++;
  }, [counter]);

  return (
    <div className="App">
      <button onClick={incrementCount}>increment Count</button>
      <p>Type is : {isEven}</p>
      <p>Inceremented Count ({counter})</p>

      <button onClick={incrementAge}>increment Age</button>
      <p>Inceremented Age ({age})</p>
    </div>
  );
}

export default App;

/* 
In the above example we have used UseMemo hooks which will memoize the value of count and execute the isEven methode

if we remove useMemo in that case for age incement also the isEven will execute and the while loop will take time to excute 
which not required for age increment

we only need this to be execute whne incrementing count

Which will help to optmize the performance

*/
