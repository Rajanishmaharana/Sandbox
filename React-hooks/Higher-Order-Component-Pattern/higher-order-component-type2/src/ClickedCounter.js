import React from "react";
import HigherOrderCounter from "./HigherOrderCounter";

function ClickedCounter({ count, incrementCounter }) {
  return <button onClick={incrementCounter}>Clicked ({count})</button>;
}

export default HigherOrderCounter(ClickedCounter, 0);
