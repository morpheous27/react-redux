import React, { Component } from "react";
import { render } from "react-dom";

//const Header = () => <h1>Welcome to React!</h1>;

class Header extends Component {
  render() {
    return <h1>Welcome to React</h1>;
  }
}

//ReactDOM.render(<Header/>,document.getElementById('root'))
render(<Header />, root);
