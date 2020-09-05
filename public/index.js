import NxOfflineSw from '@feizheng/next-offline-sw';
import ReactGithubCorner from '@feizheng/react-github-corner';
import ReactSwUpdateTips from '@feizheng/react-sw-update-tips';
import React from 'react';
import ReactDOM from 'react-dom';
import BoilerplateReactComponent from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = { hasUpdate: false };

  componentDidMount() {
    NxOfflineSw.install({
      onUpdateReady: () => {
        this.setState({ hasUpdate: true });
      }
    });
  }

  render() {
    return (
      <div className="p-3 app-container">
        <BoilerplateReactComponent className="bg-gray-800 mb-5 text-white" />
        <button className="button">I am a button</button>
        <ReactSwUpdateTips value={this.state.hasUpdate} />
        <ReactGithubCorner value="https://github.com/afeiship/boilerplate-react-component" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
