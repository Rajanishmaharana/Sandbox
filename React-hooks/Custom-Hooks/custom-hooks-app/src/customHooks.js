import React, { useState } from "react";

function useCustomHooks(intialValue) {
  const [value, setValue] = useState(intialValue);

  const reset = (e) => {
    setValue(intialValue);
  };

  const bind = {
    value,
    onChange: (e) => setValue(e.target.value),
  };

  return [value, bind, reset];
}

export default useCustomHooks;
