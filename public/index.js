import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { AppContainer } from 'react-hot-loader';

import App from './src/components/App';
import Setup from './src/components/Setup';

const Using = () => {
  return (<div></div>);
}

const render = (Component) => {
  ReactDOM.render(<AppContainer>
    <Router>
      <div>
        <Route exact path='/' component={Component} />
        <Route path="/setup" component={Setup}/>
        <Route path="/using" component={Using}/>
      </div>
    </Router>
  </AppContainer>, document.querySelector('.attach'));
}

render(Setup);

if(module.hot) {
  module.hot.accept('./src/components/App', () => {
    render(Setup);
  });
}
