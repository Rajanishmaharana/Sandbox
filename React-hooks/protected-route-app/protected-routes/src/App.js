import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Product from "./Product";
import Admin from "./Admin";
import RouteGuards from "./ProtectRoutes/Protected.routes";

function App() {
  let navStyle = {
    padding: "10px",
    border: "1px solid black",
    margin: "20px",
    "margin-top":"30px"
  };

  let layout={
    margin:"20px"
  }
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="">
            <span style={navStyle}>Home</span>
          </Link>
          <Link to="admin">
            <span style={navStyle}>Admin</span>
          </Link>
        </header>
        {/* <Route path='/admin' component={Admin} exact/> */}
        <section style={layout}>
          <Route path="/" component={Product} exact />
          <RouteGuards path="/admin" component={Admin} />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
