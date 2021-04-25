import logo from "./logo.svg";
import "./App.css";
import React,{useState} from 'react';
import useCustomHooks from './customHooks';
function App() {

  const [firstName,bindFirstName,resetFirstName]=useCustomHooks('');

  const [password,bindPassword,resetPassword]=useCustomHooks('');


  
  const onSubmitForm=(e)=>{
    e.preventDefault();
      console.log(firstName);
      console.log(password);
      resetFirstName();
      resetPassword();

  }

  return (
    <div className="App">

      <form onSubmit={e=>onSubmitForm(e)}>
        <label>UserName</label>
        <input type="text" placeholder="Enter UserName" className='userName' {...bindFirstName}/>
        <br />
        <label>Password</label>
        <input type="password" placeholder="Enter Password" className='password' {...bindPassword}/>
        <br/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
