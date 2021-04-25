import React, { useState } from "react";

function ClickedCounter({incrementCounter,count}) {

  return (
    <>
      <button onClick={incrementCounter}>Clikced counter({count})</button>
    </>
  );
}

export default ClickedCounter;
