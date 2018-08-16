import React, { Component } from "react";
import { render } from "react-dom";
//string,number,boolean,undefined,NaN,infinity,null,function,object
//null
let x;
let y;
let emp;
let cust = null;
console.log(x);
console.log(y);
console.log(emp);
console.log(cust);

class Counter extends Component {
  state = {
    counter: 1,
    message: ""
  };
  onIncrement = e => {
    //console.log('onCrement is called')
    const counter = this.state.counter + 1;
    //this.setState({ counter });
    this.setState(state => ({ counter }));
  };
  onUpdate = e => {
    const inputElement = e.target;
    console.dir(inputElement.value);
    this.setState(state => ({ message: inputElement.value }));
  };
  sayHello(message){
     alert(message);
  }
  componentDidMount() {
    const myInputRef = this.refs.inputRef;
    myInputRef.focus();
    const myHeader = this.refs.myHeader;
    myHeader.style.backgroundColor = "yellow";
    myHeader.addEventListener("mouseover", () => {
      myHeader.style.backgroundColor = "blue";
    });
  }

  render() {
    console.log(this.state.counter);
    return (
      <div>
        <h1 ref="myHeader">Counter Application</h1>
        <DisplayBoard sayHello={this.sayHello} onIncrement={this.onIncrement} counter={this.state.counter}/>
    
        <br />
        <h1>{this.state.message}</h1>
        <br />
        <input ref="inputRef" onInput={this.onUpdate} placeholder="type" />
      </div>
    );
  }
}

const DisplayBoard = props => (
  <React.Fragment>
    <h2>Counter {props.counter}</h2>
    <button onClick={props.onIncrement}>Increment</button>
    <button onClick={(e)=>props.sayHello('hello')}>sayHello</button>
  </React.Fragment>
);

render(<Counter />, root);
