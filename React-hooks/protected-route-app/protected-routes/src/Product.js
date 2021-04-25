import React from "react";
import Auth from "./ProtectRoutes/Auth";

function Product(props) {

  const handelLogin = (e) => {
    Auth().login(() => {
        console.log(Auth().getAuthnicatedData())
      props.history.push("/admin");
    });
  };

  return (
    <div>
      <span>Product Home Page is public</span>
      <button
        type="button"
        onClick={(e) => {
          handelLogin(e);
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Product;
