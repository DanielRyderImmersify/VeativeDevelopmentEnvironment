import React from 'react';
import PropTypes from 'prop-types'
import { ErrorPage } from '../Error/error';

const ErrorComponent = () => {
  

  return (
    <><ErrorPage /></>
  )
  
  
};

export class AppError extends React.Component {
  
  state = {
    hasError: false,
  };

  static getDerivedStateFromError = error => {
    console.log(error)
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    this.setState({ error, info });
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorComponent /> : children;
  }
}

AppError.propTypes = {
  children: PropTypes.any
}