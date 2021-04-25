import React,{useState} from 'react';

function User({render,children}){

const [isLogin,setIsLogin]=useState(true);

    return(
        <>
            {render(isLogin)}


            {/* OR */}
            {/* {children(isLogin)} */}
        </>
    )
}

export default User;