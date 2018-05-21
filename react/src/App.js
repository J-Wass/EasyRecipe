import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Navbar, Nav, NavItem,FormGroup,FormControl,InputGroup} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import RecipeListing from './Components/RecipeListing.js';
import Recipe from './Components/Recipe.js';

//REGION - ROUTER
const MainRouter = () => (
  <Router>
    <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link className="nav-link" to="/home">Easy Recipe</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventkey={1} componentClass={Link} role="button" href="/recipes" to="/recipes">
              Recipes
            </NavItem>
            <NavItem eventkey={2} componentClass={Link} role="button" href="/help" to="/help">
              Help
            </NavItem>
          </Nav>
          <Nav pullRight>
             <Navbar.Form eventkey={3} pullLeft>
              <FormGroup>
                <InputGroup>
                  <FormControl id="search" type="text" placeholder="Search (recipe, ingredients, author, etc...)" />
                  <InputGroup.Addon>
                    <FontAwesome name='search' />
                  </InputGroup.Addon>
                </InputGroup>
              </FormGroup>
            </Navbar.Form>
            <NavItem eventkey={4} componentClass={Link} role="button" href="/recipe/1" to="/recipe/1">
              Login
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Route path="/recipe/:id" component={Recipe} />
      <Route path="/home" component={HomeComponent} />
      <Route path="/help" component={HelpComponent} />
      <Route path="/recipes" component={RecipeListing} />
    </div>
  </Router>
);

class HelpComponent extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

class HomeComponent extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default MainRouter;
