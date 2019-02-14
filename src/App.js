import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import * as Containers from './Containers';
import T from 'i18n-react';
import axios from 'axios';

import './Stylesheets/main.scss';

import * as Layouts from './Layouts';
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }
  }

  componentWillMount() {
    var language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
    const AVAILABLE_LANG = ['en'];

    if (language.length > 2) {
      language = language.split("-")[0];
      language = language.split("_")[0];
    }
    console.log(language)
    if (AVAILABLE_LANG.indexOf(language) < 0) {
      language = "en";
    }

    axios.get("/lang/" + language + ".json").then(function (response) {
      T.setTexts(response.data);
      if (response.data.direction === 'rtl') {
        var root = document.getElementsByTagName('html')[0];
        root.setAttribute('dir', 'rtl');
      }
      this.setState({
        loaded: true
      })

    }.bind(this));

  }

  render() {

    if (!this.state.loaded) {
      return <div />;
    }

    return (
      <Router>
        <Switch>
          {/* Non - Private */}
          <Layouts.NonPrivateRoute exact path="/login" component={Containers.Login} />

          {/* Private */}
          <Layouts.PrivateRoute exact path="/" component={Containers.Home} />
          {/* <Route component={Containers.NotFound} /> */}
        </Switch>
      </Router>
    );
  }
}