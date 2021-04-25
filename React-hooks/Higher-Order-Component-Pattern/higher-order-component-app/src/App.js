import logo from "./logo.svg";
import "./App.css";
import Product from "./component/Product";

let hoc = (BaseComponent) => (props) => {
  console.log(BaseComponent);

  let newProps = {
    ...props,
    style: {
      background: "#093478",
    },
  };

  return <BaseComponent {...newProps} />;
};

function App() {
  let NewComp = hoc(Product);
  return (
    <div className="App">
      <NewComp />
      <Product />
    </div>
  );
}

export default App;
