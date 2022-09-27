import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/navbar';
import Footer from './components/footer';
import Home from './components/index';
import Dest from './components/destinations/destHome'
import DestInfo from './components/destinations/destInfo';
import SubDestInfo from './components/destinations/subdestInfo';
import Inspiration from "./Inspiration/inspirationCat";
import Buddy from './components/travelbuddy/buddyHome';
import Chat from './components/chat/chat';
import Login from './components/login';
import Signup from './components/signup';
import Stories from './Inspiration/stories';
import { auth } from "./services/firebase";
import {Redirect} from "react-router-dom";
// import Landing from './components/Landing'

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
      }
    />
  );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
            <Redirect to="/chat" />
          )
      }
    />
  );
}

  

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false
        });
      }
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/destinations" component={Dest} />
              <Route exact path="/destinfo" component={DestInfo} />
              <Route exact path="/subdestinfo" component={SubDestInfo}/>
              <Route exact path="/buddy" component={Buddy}/>
              <Route exact path="/inspirations" component={Inspiration}/>
              <Route exact path="/stories" component={Stories}/>
              <PrivateRoute
              path="/chat"
              authenticated={this.state.authenticated}
              component={Chat}
            />
            <PublicRoute
              path="/signup"
              authenticated={this.state.authenticated}
              component={Signup}
            />
            <PublicRoute
              path="/login"
              authenticated={this.state.authenticated}
              component={Login}
            />
          </Switch>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App