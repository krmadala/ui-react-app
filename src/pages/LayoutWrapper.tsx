import React from 'react';
import { Outlet } from 'react-router-dom';
import AppLayout from './AppLayout'; // Adjust the path if needed

const LayoutWrapper: React.FC = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default LayoutWrapper;
