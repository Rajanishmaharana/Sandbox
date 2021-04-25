import React, { useState } from "react";
// Here the common functionality has written in a separate file

function Count({render,children}) {

    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount((prev)=>{
            console.log(prev)
           return prev+1;
        })
    };

    return(
        <>
        {render(incrementCounter,count)}
        

        {/* OR */}

        {/* {children(incrementCounter,count)} */}

        </>
    )

}

export default Count;
