import React from "react";
import HigherOrderCounter from "./HigherOrderCounter";

function HoveredCounter({ count, incrementCounter }) {
  return (
    <span onMouseOver={(e) => incrementCounter()}>Hovered Count ({count})</span>
  );
}

export default HigherOrderCounter(HoveredCounter, 0);
