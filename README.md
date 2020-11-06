# boilerplate-react-component
> boilerplate-react-component-description

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @boilerplate-scope/boilerplate-react-component
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@boilerplate-scope/boilerplate-react-component/dist/style.css";

  // or use sass
  @import "~@boilerplate-scope/boilerplate-react-component/dist/style.scss";

  // customize your styles:
  $boilerplate-react-component-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@feizheng/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import BoilerplateReactComponent from '@feizheng/boilerplate-react-component';
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

  ```

## documentation
- https://afeiship.github.io/boilerplate-react-component/


## license
Code released under [the MIT license](https://github.com/afeiship/boilerplate-react-component/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/boilerplate-react-component
[version-url]: https://npmjs.org/package/@feizheng/boilerplate-react-component

[license-image]: https://img.shields.io/npm/l/@feizheng/boilerplate-react-component
[license-url]: https://github.com/afeiship/boilerplate-react-component/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/boilerplate-react-component
[size-url]: https://github.com/afeiship/boilerplate-react-component/blob/master/dist/boilerplate-react-component.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/boilerplate-react-component
[download-url]: https://www.npmjs.com/package/@feizheng/boilerplate-react-component
