import React from "react";

let isAuthnicated = false;

function Auth() {
  return {
    login(call) {
      isAuthnicated = true;
      call();
    },
    logout(call) {
      isAuthnicated = false;
      call()
    },
    getAuthnicatedData() {
      return isAuthnicated;
    },
  };
}

export default Auth;