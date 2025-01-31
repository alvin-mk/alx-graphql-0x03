import React, { ReactNode } from 'react';
import * as Sentry from '@sentry/react';

// Initialize Sentry
Sentry.init({
  dsn: '<your-sentry-dsn-url>', // Replace with your Sentry DSN
  tracesSampleRate: 1.0,
});

interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state to show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to the console
    console.log('Error:', error);
    console.log('Error Info:', errorInfo);

    // Log the error to Sentry
    Sentry.captureException(error, { extra: errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
          <h2 className="text-2xl font-bold text-red-600">Oops, there is an error!</h2>
          <button
            onClick={this.handleReset}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Try Again?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default Sentry.withErrorBoundary(ErrorBoundary, {
  fallback: <h2>Something went wrong.</h2>,
});
