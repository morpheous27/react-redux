import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import React, { Component } from "react";
import { render } from "react-dom";

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>Single Direction Data Flow</h1>
        <Child1 {...this.props} />
      </div>
    );
  }
}

class Child1 extends Component {
  render() {

    return (
      <div>
        <Child2 {...this.props} />
      </div>
    );
  }
}
class Child2 extends Component {
  render() {
    return (
      <div>
        <Child3 {...this.props} />
      </div>
    );
  }
}

class Child3 extends Component {
  render() {
    return (
      <div>
        <Card subtitle="Child 3"  {...this.props} />
      </div>
    );
  }
}
//Going to display data
const Card = ({ profile,subtitle }) => (
   <div className="card">
    <h1>{subtitle}</h1>
    <div className="card-body">
      <h5 className="card-title">
      Name {profile.name} details</h5>
      <p className="card-text">
        <span className="badge">{profile.id}</span>
      </p>
      <p className="card-text">
        <span>{profile.status ? "Active" : "Not Active"}</span>
      </p>
      <p className="card-text">
        <small className="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
);
const profile = {
  id: 1,
  name: "Subramanian",
  status: true
};
render(<Parent profile={profile} />, root);
