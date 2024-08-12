// frontend/src/components/PrivateRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if token exists

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element {...rest} /> : <Navigate to="/" replace />} // Use Navigate instead of Redirect
    />
  );
};

export default PrivateRoute;