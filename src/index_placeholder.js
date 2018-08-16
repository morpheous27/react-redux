import React, { Component } from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

class PlaceHolder extends Component {
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}
const VideoPlayer = () => (
  <React.Fragment>
    <video width="400" controls>
      <source src="mov_bbb.mp4" type="video/mp4" />
      <source src="mov_bbb.ogg" type="video/ogg" />
      Your browser does not support HTML5 video.
    </video>

    <p>
      Video courtesy of
      <a href="https://www.bigbuckbunny.org/" target="_blank">
        Big Buck Bunny
      </a>.
    </p>
  </React.Fragment>
);
const ImageComponent = () => (
  <svg width="100" height="100">
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="green"
      stroke-width="4"
      fill="yellow"
    />
  </svg>
);
const App = () => (
  <div className="row">
    <div className="col-md-6">
      <PlaceHolder>
        <h1>Today Movie</h1>
        <VideoPlayer />
      </PlaceHolder>
    </div>
    <div className="col-md-6">
      <PlaceHolder>
        <h1>Today Image</h1>
        <ImageComponent/>
      </PlaceHolder>
    </div>
  </div>
);

render(<App />, root);
