import logo from "./logo.svg";
import "./App.css";
import ClickedCounter from "./ClickedCounter";
import HoverCounter from "./HoverCounter";
import Count from "./Count";
import User from "./User";

function App() {
  return (
    <div className="App">
      <Count
        render={(incrementCounter, count) => (
          <ClickedCounter incrementCounter={incrementCounter} count={count} />
        )}
      />
      <br />
      <Count
        render={(incrementCounter, count) => (
          <HoverCounter incrementCounter={incrementCounter} count={count} />
        )}
      />
      {/* one sample example */}
      <User render={(isLogin) => (isLogin ? "Rajanish" : "Guest")} />
      

      {/* OR 2nd Type we can pass props through children props*/}
      {/* 
      <Count>
        {(incrementCounter, count) => (
          <HoverCounter incrementCounter={incrementCounter} count={count} />
        )}
      </Count> */}
    </div>
  );
}

export default App;
