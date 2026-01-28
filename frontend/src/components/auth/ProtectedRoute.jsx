import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AppLayout from "../layout/AppLayout"; // path adjust karo

const ProtectedRoute = () => {
  const isAuthenticated = true; // auth state (context / redux / localStorage)
  const loading = false; // auth loading state

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
