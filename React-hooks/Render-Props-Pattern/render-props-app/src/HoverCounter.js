import React, { useState } from "react";

function HoverCounter({incrementCounter,count}) {

  return (
    <>
      <span onMouseOver={incrementCounter}>Hover counter({count})</span>
    </>
  );
}

export default HoverCounter;
