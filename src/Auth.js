import React, { Component } from "react";
import Cookies from "js-cookie";
import App from "./App";

let token = Cookies.getJSON("acc");
const url = "https://staging.bintex.id/api/is-auth";
const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: token,
  },
};

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      status: -1,
    };
  }

  async componentDidMount() {
    const res = await fetch(url, options);
    const data = await res.status;
    this.setState({ status: data });
    console.log(this.state.status);
  }

  render() {
    const status = this.state;
    //console.log(status);
    //console.log(status.status === 200);
    if (status.status > 0) {
      if (status.status === 200) {
        return <App />;
      } else {
        return (window.location.href = "http://bintex.id/login");
      }
    } else {
      return null;
    }
  }

  //render() {
  //const { status } = this.state;
  //console.log(status);
  //console.log(status != null && status === 200);
  //return(<App/>)
  //window.location.href = "http://localhost:8000/login";
}

export default Auth;
