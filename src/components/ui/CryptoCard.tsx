import React from 'react';

import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { chartCardData } from '../../utils/Constants';

type Props = {
    color: string;
};

export default function CryptoCard({ color }: Props) {
    return (
        <Card className="w-full h-fit pe-2">
            <CardHeader className="flex flex-row">
                <div className="w-1/2">
                    <CardTitle>BTC/USD</CardTitle>
                    <CardDescription className="flex justify-between">
                        <div>
                            <p>$442,2002</p>
                            <p>17%</p>
                        </div>
                    </CardDescription>
                </div>
                <div className="w-1/2 h-20">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartCardData}>
                            <Line
                                type="monotone"
                                dataKey="pv"
                                stroke={color}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardHeader>
        </Card>
    );
}
