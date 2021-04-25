import React from "react";
import { Route ,Redirect} from "react-router";
import Auth from "./Auth";

function RouteGuards({ component:Component, ...rest }) {
   
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(Auth().getAuthnicatedData())
        if (Auth().getAuthnicatedData()) {
          return <Component {...props} />;
        } else {
            console.log("else")
          return <Redirect to="/" />;
        }
      }}
    />
  );
}

export default RouteGuards;
