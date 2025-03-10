import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import  AppBar  from './AppBar/AppBar';

export default function Layout  ({ children })  {
  return (
    <div >
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
