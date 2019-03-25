# boilerplate-react-component
> boilerplate-react-component-description

## install:
```shell
npm install -S afeiship/boilerplate-react-component
```

## usage:
1. import css
  ```scss
  @import "~boilerplate-react-component/style.scss";

  // customize your styles:
  $boilerplate-react-component-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import BoilerplateReactCompnent from 'boilerplate-react-component';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <BoilerplateReactCompnent />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## docs:
- https://afeiship.github.io/boilerplate-react-component/

## resouces:
- https://github.com/adamreisnz/replace-in-file
- https://www.robinwieruch.de/minimal-react-webpack-babel-setup/
- https://www.valentinog.com/blog/react-webpack-babel/
- https://jestjs.io/docs/en/tutorial-react#snapshot-testing-with-mocks-enzyme-and-react-16
- https://testing-library.com/docs/react-testing-library/api
