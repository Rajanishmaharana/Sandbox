import React, { useState } from "react";

const HigherOrderCounter = (BaseComponent, intialCount) => {
  function CreateCounter(props) {
    const [count, setCount] = useState(intialCount);
    const incrementCounter = () => {
      setCount((prev) => prev + 1);
    };

    return (
      <BaseComponent
        {...props}
        count={count}
        incrementCounter={incrementCounter}
      />
    );
  }
  return CreateCounter;
};

export default HigherOrderCounter;
