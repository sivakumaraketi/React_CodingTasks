/* created by Siva Kumar Aketi on 29th January 2025
6. Implement error boundaries for error handling in a React app. */

/*
In React, Error Boundaries are a way to handle JavaScript errors in a component tree. 
They catch errors in any child component and log those errors, display a fallback UI, 
and prevent the entire component tree from crashing. 
You can use error boundaries to catch both runtime errors in your components and render errors.
 */
/* class based Error boundaries */

import React, { Component } from 'React';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false,
            error: null,
            errorInfo: null};
    }

    getderviedstatefromerror(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        // Log error information to an error reporting service (optional)
    console.error('Error caught by Error Boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
              <div>
                <h1>Something went wrong.</h1>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </details>
              </div>
            );
          }
          return this.props.children;
    }
}
export default ErrorBoundary;

/* usage of ErrorBoundary in a component and usage same as class component */
import ErrorBoundary from './ErrorBoundary';

class MyComponent extends React.Component {
  render() {
    throw new Error('An error occurred in MyComponent!');
    return <div>My Component</div>;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}

/* functional based Error boundaries */

const ErrorBoundaryFunctional = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    const handleError = (event) => {
      setHasError(true);
      setError(event.error);
      setErrorInfo(event.errorInfo);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleError);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleError);
    };
  }, []);

  if (hasError) {
    return (
      <div>
        <h1>Something went wrong.</h1>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {error && error.toString()}
          <br />
          {errorInfo && errorInfo.componentStack}
        </details>
      </div>
    );
  }

  return children;
};

/* Alternative: Using a Third-Party Library for Functional Components */

import { ErrorBoundary } from 'react-error-boundary';

const MyComponent = () => {
  throw new Error('Something went wrong in MyComponent!');
  return <div>My Component</div>;
};

const FallbackUI = ({ error }) => (
  <div>
    <h1>Something went wrong: {error.message}</h1>
  </div>
);

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackUI}>
      <MyComponent />
    </ErrorBoundary>
  );
};

