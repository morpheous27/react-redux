import React, { Component } from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  HashRouter,
  Link,
  Route,
  Switch
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

class Profile extends React.Component {
  state = {
    profiles: [],
    profile: {}
  };
  componentDidMount() {
    this.getAllProfiles();
  }
  getAllProfiles() {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then(response => response.json())
      .then(profiles => {
        this.setState({ profiles: profiles });
        this.setState({ isloading: !this.state.isloading });
      })
      .catch(err => console.log(err));
  }
  getProfileById(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url)
      .then(response => response.json())
      .then(profile => {
        this.setState({ profile: profile });
      })
      .catch(err => console.log(err));
  }
  onView(id) {
    this.getProfileById(id);
  }
  render() {
    return (
      <React.Fragment>
        <h1>Profile Data</h1>

        <ul>
          {this.state.profiles.map((profile, index) => {
            return (
              <li key={index}>
                <span>
                  {profile.name}
                  <button
                    onClick={() => {
                      this.onView(profile.id);
                    }}
                  >
                    View
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
        <div>
          <h1>{this.state.profile.id}</h1>
          <h2>{this.state.profile.email}</h2>
        </div>
      </React.Fragment>
    );
  }
}

const Home = () => <h1>Home</h1>;
const Store = () => <h1>Store</h1>;
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Electronics = () => <h1>Electronics</h1>;
const Book = () => <h1>Book</h1>;

class DashBoard extends React.Component {
  state = {
    profiles: [],
    profile: {}
  };
  componentDidMount() {
    this.getAllProfiles();
  }
  getAllProfiles() {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then(response => response.json())
      .then(profiles => {
        this.setState({ profiles: profiles });
        this.setState({ isloading: !this.state.isloading });
      })
      .catch(err => console.log(err));
  }
  getProfileById(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url)
      .then(response => response.json())
      .then(profile => {
        this.setState({ profile: profile });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>DashBoard Data</h1>

        <ul>
          {this.state.profiles.map((profile, index) => {
            return (
              <li key={index}>
                <Link to={`/detail/${profile.id}`}>{profile.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class DashBoardDetail extends React.Component {
  state = {
    profile: {}
  };
  getProfileById(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url)
      .then(response => response.json())
      .then(profile => {
        this.setState({ profile: profile });
      })
      .catch(err => console.log(err));
  }
  componentDidMount() {
    console.log(this.props.match.params);
    this.getProfileById(this.props.match.params.id);
  }
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.profile.name} details </h1>
        <h1>{this.state.profile.email}</h1>
        <button
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          goBack
        </button>
      </React.Fragment>
    );
  }
}

const App = () => {
  return (
    <React.Fragment>
      <h1>MyCart</h1>
      {/**Navigation plans **/}
      <ul>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/books">Book</Link>
        </li>
        <li>
          <Link to="/electronics">Electronics</Link>
        </li>
        <li>
          <Link to="/profiles">Profiles</Link>
        </li>
        <li>
          <Link to="/dashboard">DashBoard</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
      <nav />
      {/** Route Configuration**/}
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/store" component={Store} />
          <Route path="/books" component={Book} />
          <Route path="/electronics" component={Electronics} />
          <Route path="/profiles" component={Profile} />
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/detail/:id" component={DashBoardDetail} />
          <Route path="/topics" component={Topics} />

          <Route render={() => <h1>Some thing Went Wrong</h1>} />
        </Switch>
      </div>
    </React.Fragment>
  );
};

const MainApp = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Fragment>
  );
};
render(<MainApp />, root);
