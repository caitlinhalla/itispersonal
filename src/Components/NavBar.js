import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory, IndexLink } from 'react-router';
import LoginForm from './LoginForm.js';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Twitter from './Contact.js';
import Instagram from './Contact.js';

import '../App.css';

class NavBar extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='address' component={Contact} />
          <Route path='/about(/:name)' component={About} />
          <Route path='/login(/:name)' component={LoginForm} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}
const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/about'>About</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/address'>Contact</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/login'>Login</IndexLink>&nbsp;
  </div>
)

const NotFound = () => (
  <h1>404... This page is not found!</h1>
)


// <Route path='/namedComponent' component={NamedComponents}>
//   <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
// </Route>
// const NamedComponents = (props) => (
//   <div>
//     {props.title}<br />
//     {props.subTitle}
//   </div>
// )
//
// const Title = () => (
//   <h1>Hello from Title Component</h1>
// )
// const SubTitle = () => (
//   <h1>Hello from SubTitle Component</h1>
// )

export default NavBar;
