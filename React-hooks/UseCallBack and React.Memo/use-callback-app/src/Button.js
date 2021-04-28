import React,{memo} from 'react';

function Button({handelClick,children,typeData}){

console.log(typeData+' BUtton is rendering')
    return(
        <button onClick={handelClick}>
            {children}
        </button>
    )

}

export default memo(Button);