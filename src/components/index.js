import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'boilerplate-react-component';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.object,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: null,
    onChange: noop
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {};
    console.log(require('assets/images/icon-play.png'));
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classNames(CLASS_NAME, className)} {...props}>
        <p>
          <button className="icon-play">PLAY</button>
        </p>
        <img src={require('assets/images/icon-play.png')} />
        <p>Hello React!!</p>
      </div>
    );
  }
}
