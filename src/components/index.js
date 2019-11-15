import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'boilerplate-react-component';

export default class extends Component {
  static displayName = CLASS_NAME;

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
  }

  _onClick = (e) => {
    console.log('click me!');
  };

  render() {
    const { className, ...props } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <p>
          <button onClick={this._onClick} className="icon-play">
            PLAY
          </button>
        </p>
        <p>Hello React!!</p>
      </div>
    );
  }
}
