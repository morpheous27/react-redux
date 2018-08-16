import { createStore } from "redux";
import React, { Component } from "react";
import { render } from "react-dom";
import { Provider, connect } from "react-redux";

import {
    INCREMENT,
    DECREMENT,
    DECREMENT_ACTION,
    INCREMENT_ACTION
  } from "./actions";

  
const CounterReduer = (counter = 10, action) => {
  switch (action.type) {
    case INCREMENT:
      return counter + 1;
    case DECREMENT:
      return counter - 1;
    default:
      return counter;
  }
};
const appStore = createStore(CounterReduer);
////////////////////////////////////////////////
//Mapping:
function mapStateToProps(counter) {
  return {
    counter
  };
}

//Dispatcher mapping

function mapDispatchToProps(dispatch) {
  return {
    //reactProp:reduxState
    onInCrement: function() {
      dispatch(INCREMENT_ACTION);
    },
    onDeCrement: function() {
      dispatch(DECREMENT_ACTION);
    }
  };
}
//Container Components
class Counter extends Component {
  render() {
    console.log(this.props);
    return <CounterDisplayBoard {...this.props} />;
  }
}
//Create HOC :Container Component:
const CounterApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
const CounterDisplayBoard = ({ counter, onInCrement, onDeCrement }) => (
  <div>
    <h1>Counter React-Redux</h1>
    <h2>Counter {counter}</h2>
    <button onClick={onInCrement}>Increment</button>
    <button onClick={onDeCrement}>Decrement</button>
  </div>
);
const App = () => (
  <Provider store={appStore}>
    <CounterApp />
  </Provider>
);
render(<App />, root);
