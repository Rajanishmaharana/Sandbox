import React from 'react';
import Auth from './ProtectRoutes/Auth';

function Admin(props){
const handelLogout=()=>{
    Auth().logout(()=>{
        props.history.push('/')
    })
}
    
    return(
        <div>
            <span>Admin page is protected only for authorized person</span>
            <button onClick={()=>handelLogout()}>Logout</button>
        </div>
    )
}

export default Admin;