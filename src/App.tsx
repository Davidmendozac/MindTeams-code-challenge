import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import { NotFound } from './containers/Errors'
import Home from './containers/Home';
import CodeReview from './containers/CodeReview';
import POO from './containers/POO';
import Modificadores from './containers/Modificadores';
import PatronesDeArquitectura from './containers/PatronesDeArquitectura';
import PatronesDeDisenho from './containers/PatronesDeDisenho';
import SOLID from './containers/SOLID';
import WebAPIs from './containers/WebAPIs';
import TDD from './containers/TDD';
import Users from './containers/Users';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/cc/code-review" render={() => <CodeReview />} />
            <Route path="/cc/poo" render={() => <POO />} />
            <Route path="/cc/modificadores" render={() => <Modificadores />} />
            <Route path="/cc/patrones-de-arquitectura" render={() => <PatronesDeArquitectura />} />
            <Route path="/cc/patrones-de-disenho" render={() => <PatronesDeDisenho />} />
            <Route path="/cc/solid" render={() => <SOLID />} />
            <Route path="/cc/apis" render={() => <WebAPIs />} />
            <Route path="/cc/test-drive-development" render={() => <TDD />} />
            <Route path="/users" render={() => <Users />} />
            <Route component={NotFound} />
          </Switch>
      </Fragment>
    );
  }
}

export default App;
