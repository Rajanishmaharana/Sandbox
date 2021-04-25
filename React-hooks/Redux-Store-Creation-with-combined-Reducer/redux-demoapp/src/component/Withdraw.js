import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Withdraw() {
  let dispatch = useDispatch();
  let balance = useSelector( state=>state.reducer.balance);
  let buttonHandel = (e) => {
    dispatch({ type: "WITHDRAW", payload: 10 });
  };
  return (
    <>
      Blance: {balance} <br/>
      WithDraw:<button onClick={(e) => buttonHandel(e)}>Get</button>
    </>
  );
}
export default Withdraw;
