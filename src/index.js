import React, { Component, Fragment } from "react";
import { render } from "react-dom";

//const ThemeContext = React.createContext('dark');
const { Provider, Consumer } = React.createContext("dark");

class App extends Component {
  theme = {
    backgroundColor: "yellow",
    color: "white"
  };
  render() {
    return (
      <Provider value={this.theme}>
        <Toolbar />
      </Provider>
    );
  }
}

function Toolbar(props) {
  // The Toolbar component must take an extra "theme" prop
  // and pass it to the ThemedButton. This can become painful
  // if every single button in the app needs to know the theme
  // because it would have to be passed through all components.
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton(props) {
  return <Consumer>{theme => <Button theme={theme} />}</Consumer>;
}
function Button(props) {
  return <button style={props.theme}>Theme</button>;
}

render(<App />, root);