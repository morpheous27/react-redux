import React from "react";
import { render } from "react-dom";

const Product = () => (
  <div id="product">
    <h1>Product</h1>
  </div>
);
const Section = () => (
  <div id="section">
    <Product />
  </div>
);
const Panel = () => (
  <div id="panel">
    <Section />
  </div>
);
const Container = () => (
  <div id="container">
    <Panel />
  </div>
);
const Application = () => <Container/>;

render(<Application />, root);