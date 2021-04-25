import React from 'react';
import {useSelector,useDispatch} from 'react-redux';

function Home(){
const balance=useSelector(state=>state.reducer.balance);
const loan=useSelector(state=>state.loadReducer.loanApply);

const dispatch = useDispatch();
let handelButton=()=>{
    dispatch({type:'Apply'})
}
    return(
        <>
        Balance: {balance}
        Loan Status:{loan}

        <button onClick={(e) => handelButton(e)}>loanApply</button>
        </>
    )
}
export default Home;