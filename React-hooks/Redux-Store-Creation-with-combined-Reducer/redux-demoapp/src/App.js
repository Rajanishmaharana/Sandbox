import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Home from "./component/Home";
import Withdraw from "./component/Withdraw";
import Deposit from "./component/Deposit";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/deposit">Deposit</NavLink>
            </li>
            <li>
              <NavLink to="/withdraw">Withdraw</NavLink>
            </li>
          </ul>

          <Route path="/home" exact component={Home} />
          <Route path="/withdraw" exact component={Withdraw} />
          <Route path="/deposit" exact component={Deposit} />
        </header>
      </BrowserRouter>
    </div>
  );
}


export default App;
