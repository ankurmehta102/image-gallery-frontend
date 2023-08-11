import { Component, ReactNode } from 'react';
import FallBack from './FallBack';

type ErrorBoundaryProps = {
  children: ReactNode;
};

class ErrorBoundry extends Component<ErrorBoundaryProps> {
  state = { hasError: false, errMsg: '' };

  static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
      errMsg: error?.message || 'error message not found',
    };
  }
  componentDidCatch(error: any, info: any) {
    console.log('componentDidCatch error', error);
    console.log('componentDidCatch info', info);
  }
  render() {
    if (this.state.hasError) {
      return <FallBack errMsg={this.state.errMsg} />;
    }
    return this.props.children;
  }
}
export default ErrorBoundry;
