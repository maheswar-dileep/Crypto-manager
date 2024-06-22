import React from 'react';

import {
    ResponsiveContainer,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
    LineChart,
} from 'recharts';

import { growthChartData } from '@/utils/Constants';
import { ToggleDate } from './toggleDate';
import { ToggleBuy } from './toggleBuy';
import { CurrencySelect } from './CurrencySelect';
import { Card } from './card';

const GrowthChart = () => {
    return (
        <div className="flex gap-6 justify-start w-full flex-wrap">
            <div className="w-full md:w-5/12 h-96">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-medium text-gray-600 ms-2">Growth</h2>
                    <div className="flex items-center">
                        <ToggleDate />
                    </div>
                </div>
                <ResponsiveContainer className="mt-4 -ms-4" width="100%" height="100%">
                    <LineChart width={500} height={300} data={growthChartData}>
                        <CartesianGrid strokeDasharray="3" />
                        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="uv" stroke="#FF8F00" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="md:w-6/12 w-full h-96 flex-row justify-start">
                <div className="flex items-center">
                    <ToggleBuy />
                </div>
                <div className="flex justify-between items-center mt-4">
                    <h2 className="text-xl font-medium text-gray-600 ms-2">Bitcoin/BTC</h2>
                    <CurrencySelect />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <Card className="w-full h-fit p-2 px-4 flex justify-between">
                        <p>0.211131231</p>
                        <p>BTC</p>
                    </Card>
                    <Card className="w-full h-fit p-2 px-4 flex justify-between">
                        <p>0.211131231</p>
                        <p>BTC</p>
                    </Card>
                    <Card className="w-full h-fit p-2 px-4 flex justify-between">
                        <p>0.211131231</p>
                        <p>BTC</p>
                    </Card>
                    <Card className="w-full h-fit p-2 px-4 flex justify-between">
                        <p>0.211131231</p>
                        <p>BTC</p>
                    </Card>
                    <Card className="w-full h-fit p-2 bg-blue-200 text-center font-medium text-blue-700">
                        Buy Now
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default GrowthChart;
