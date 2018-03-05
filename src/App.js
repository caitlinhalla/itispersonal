import React, { Component } from 'react';
import './App.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router'
import LoginForm from './components/LoginForm.js';
//import axios from 'axios'

class App extends Component {
  // constructor() {
  //   super()
  //
  //   this.state = {lambdaResponse: ''}
  //
  //   this.invokeLambda = this.invokeLambda.bind(this);
  //}

  // invokeLambda() {
  //   axios.get("https://83679zfrwf.execute-api.us-west-2.amazonaws.com/Prod")
  //   .then(response => this.setState({lambdaResponse: response.data}))
  // }

  // componentDidMount() {
  //   this.invokeLambda();
  // }
  // {this.state.lambdaResponse}

  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='address' component={Address}>
            <IndexRoute component={Twitter} />
            <Route path='instagram' component={Instagram} />
          </Route>
          <Route path='/namedComponent' component={NamedComponents}>
            <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
          </Route>
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

const Home = () => <h1>Something something non-profit something</h1>

const Address = (props) => <div>
  <br />
  <IndexLink activeClassName='active' to='/address'>Twitter</IndexLink>&nbsp;
  <IndexLink activeClassName='active' to='/address/instagram'>Instagram</IndexLink>
  <h1>We are located at 555 Jackson St.</h1>
  {props.children}
</div>

const Instagram = () => <h3>Instagram</h3>
const Twitter = () => <h3>Twitter</h3>

const NamedComponents = (props) => (
  <div>
    {props.title}<br />
    {props.subTitle}
  </div>
)

const Title = () => (
  <h1>Hello from Title Component</h1>
)
const SubTitle = () => (
  <h1>Hello from SubTitle Component</h1>
)
const About = (props) => (
  <div>
    <h3>Welcome to the About Page</h3>
  </div>
)

const Login = (props) => (
  <div>
    <h3>Login!</h3>
    <form>
      <label>
        Name:
        <input type="text" name="name" /><br/>
        Password:
        <input type="text" name="password" />
      </label><br/>
      <input type="submit" value="Submit" />
    </form>
    { props.params.name && <h2>Hello, {props.params.name}. LOGIN! </h2>}
  </div>
)

const NotFound = () => (
  <h1>404... This page is not found!</h1>)

export default App;
