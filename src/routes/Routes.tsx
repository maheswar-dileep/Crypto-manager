import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Layout = lazy(() => import('@/layout/Layout'));
const Home = lazy(() => import('@/pages/Home'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
