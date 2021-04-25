import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import reducer from "../Store/reducer";

function Deposit() {
  const balance = useSelector( state=>state.reducer.balance);
  const disptch =useDispatch();

  let handleBalance = (e) => {
    disptch({type:"DEPOSIT",payload:10})
  };

    
  return (
    <>
      Balance :{balance}
      <br/>
      Deposite:<button onClick={(e) => handleBalance(e)}>Add</button>
    </>
  );
}
export default Deposit;
