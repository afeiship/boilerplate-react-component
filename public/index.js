import ReactDemokit from '@feizheng/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import BoilerplateReactComponent from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/boilerplate-react-component">
        <BoilerplateReactComponent className="mb-5 has-text-white" />
        <button className="button is-primary is-fullwidth">Start~</button>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
