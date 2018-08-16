import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import React, { Component } from "react";
import { render } from "react-dom";

const employee = {};
//object aumentation:during runtime you can add,delete,update,iterate object
employee.id = 1;
//update: if prop exits update,else add
employee.id = 90;
employee.salary = 900;
delete employee.salary;

console.log(employee);
for (var e in employee) {
  console.log(e, employee[e]);
}

const Card = ({profile}) => (
  <div className="card">
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
class Profile extends Component {
  render() {
    const { title, author } = this.props;
    return (
      <div className="container">
        <h1 className="title">{title}</h1>
        <Card profile={profile}/>
      </div>
    );
  }
}
/* const Profile = ({ author, title }) => {
  // const { author, title } = props;
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
    </div>
  );
}; */
//Profile({})
render(<Profile author="Sapient" title="Sapient Profile Manager" />, root);
