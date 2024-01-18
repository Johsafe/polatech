import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, token, ...rest }) => {
  const isAuthenticated = !!token;
  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? <Element /> : <Navigate to="/login" replace={true} />
      }
    />
  );
};
export default PrivateRoute;
