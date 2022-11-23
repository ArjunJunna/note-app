import React from 'react';
import { useAuth } from '../../src/context/authContext';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

const AuthorizedRoutes = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth.isAuthorized ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default AuthorizedRoutes;
