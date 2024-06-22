import React from 'react';
import { lazy } from 'react';

const CryptoCard = lazy(() => import('@/components/ui/CryptoCard'));
const GrowthChart = lazy(() => import('@/components/ui/GrowthChart'));
const MarketValue = lazy(() => import('@/components/ui/MarketValue'));
const SideBar = lazy(() => import('@/components/layout/SideBar'));

const Home = () => {
    return (
        <div className="w-full min-h-[85vh] border rounded-xl flex">
            <div className="w-1/5 hidden md:flex">
                <SideBar />
            </div>
            <div className="hidden md:flex border-l" />
            <div className="w-full p-6 flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6 justify-between w-full flex-wrap">
                    <CryptoCard color={'#FF8F00'} />
                    <CryptoCard color={'#FFDB00'} />
                    <CryptoCard color={'#26355D'} />
                    <CryptoCard color={'#26355D'} />
                </div>
                <div className="flex justify-between w-full my-8">
                    <GrowthChart />
                </div>
                <div className="flex justify-between w-full mt-12">
                    <MarketValue />
                </div>
            </div>
        </div>
    );
};

export default Home;
