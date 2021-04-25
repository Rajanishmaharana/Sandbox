const intialState={
    balance:0
}

function reducer(state=intialState,action){

    switch(action.type){
        case 'WITHDRAW':
            return {balance:state.balance-action.payload};

        case 'DEPOSIT':
            return {balance:state.balance+action.payload}
        
        default:return state;

    }
}
export default reducer;