import React, { Component, Fragment } from "react";
import { render } from "react-dom";

class App extends Component {
  theme = {
    backgroundColor: "black",
    color: "white"
  };
  render() {
    return <Toolbar theme={this.theme} />;
  }
}

function Toolbar(props) {
  // The Toolbar component must take an extra "theme" prop
  // and pass it to the ThemedButton. This can become painful
  // if every single button in the app needs to know the theme
  // because it would have to be passed through all components.
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

function ThemedButton(props) {
  return <Button theme={props.theme} />;
}
function Button(props) {
  return <button style={props.theme}>Theme</button>;
}

render(<App />, root);