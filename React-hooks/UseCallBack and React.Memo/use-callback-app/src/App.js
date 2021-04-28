import React,{useState,useCallback} from 'react'
import "./App.css";
import Button from "./Button";
import Title from './Title';
import View from './View';

function App() {
  const [counter, setCounter] = useState(0);
  const [age,setAge]=useState(0);

  const handelCounter=useCallback(()=>{
    setCounter(prev=>prev+1)
  },[counter])

  const handelAge=useCallback(()=>{
    setAge(prev=>prev+1)
  },[age])

  return (
    <div className="App">
      <Title/>
      <Button handelClick={handelCounter} typeData={'counter'}>Increment Counter</Button>
      <View data={counter} typeData={'counter'}/>

{/* TypeData props is added only for to check the console which component is re rendering */}
{/* Here UseCall back is using for stop rerendring based on  state*/}
{/* React.Memo is used only for make the component pure component but it only perform the shallow comparison 
when props type is only primitive ex:=string,Number */}
{/* So for deep comperison we can use UseCallBack for propstype nonprimitive ex:array,object,function etc */}


      <br />
      <Button handelClick={handelAge} typeData={'Age'}>Increment Age</Button>
      <View data={age} typeData={'Age'}/>
    </div>
  );
}

export default App;
