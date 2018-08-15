// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap-theme.css";
import React,{Component} from "react";
import { render } from "react-dom";

//simple data binding
const title = "Profile Info";
const profile = {
  id: 1,
  name: "Subramanian",
  status: true
};

const Card = () => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{profile.name} details</h5>
      <p className="card-text">
        <span className="badge">{profile.id}</span>
      </p>
      <p className="card-text">
        <span>{profile.status ? "Active" :"Not Active"}</span>
      </p>
      <p className="card-text">
        <small className="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
);

const Profile = () => (
  <div className="container">
    <h1 className="title">{title}</h1>
    <Card />
  </div>
);

render(<Profile />, root);