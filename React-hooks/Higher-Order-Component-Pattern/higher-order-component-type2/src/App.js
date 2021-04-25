import logo from "./logo.svg";
import "./App.css";
import ClickedCounter from "./ClickedCounter";
import HoveredCounter from "./HoveredCounter";

function App() {
  return (
    <div className="App">
      <ClickedCounter />
      <br />
      <HoveredCounter />
    </div>
  );
}

export default App;
