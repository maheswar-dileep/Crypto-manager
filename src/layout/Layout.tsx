import React from 'react';
import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

const Header = lazy(() => import('@/components/layout/Header'));
const Layout = () => {
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <main className="px-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
