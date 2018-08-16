import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import React, { Component } from "react";
import { render } from "react-dom";

const myStyle = {
    backgroundColor:'yellow'
}
const Parent=()=>(
    <h1 style={myStyle}>Hello</h1>
);
render(<Parent />, root);
