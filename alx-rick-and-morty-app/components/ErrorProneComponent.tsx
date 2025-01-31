import React from 'react';

const ErrorProneComponent: React.FC = () => {
  // This intentional error is for testing the ErrorBoundary component
  throw new Error('This is a test error from ErrorProneComponent!');
};

export default ErrorProneComponent;
