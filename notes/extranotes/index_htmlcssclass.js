import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import React from "react";
import {render} from 'react-dom';

const Welcome = () => (
  <div className="container">
    <h1 className="title">Hello</h1>
    <small className="text-muted">With faded secondary text</small>
  </div>
);

render(<Welcome />, root);
