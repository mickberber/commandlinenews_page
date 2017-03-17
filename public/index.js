import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { AppContainer } from 'react-hot-loader';

import App from './src/components/App';
import Setup from './src/components/Setup';

const render = (Component) => {
  ReactDOM.render(<AppContainer>
    <Router>
      <div>
        <Route exact path='/' component={Component} />
        <Route path="/setup" component={Setup}/>
      </div>
    </Router>
  </AppContainer>, document.querySelector('.attach'));
}

render(App);

if(module.hot) {
  module.hot.accept('./src/components/app', () => {
    render(App);
  });
}
