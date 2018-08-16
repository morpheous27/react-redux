import React from "react";
import ReactDOM from "react-dom";

//variable pattern
//create dom element:declartive
/* const uiTree = <h1>Welcome to React!</h1>;
console.log(uiTree);

ReactDOM.render(uiTree,document.getElementById('root')); */

//function pattern
/**
 * using es 5 function
 * using es 6 arrow function
 */
/* function Header() {
  return <h1>Welcome to React!</h1>;
} */
//const Header = () => <h1>Welcome to React!</h1>;
/* function Header() {
    return React.createElement(
      "h1",
      null,
      "Welcome to React!"
    );
} */


class Header extends React.Component {
  render() {
    return <h1>Welcome to React</h1>;
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));
