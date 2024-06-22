import React, { useEffect, useState } from 'react';

import { Line, LineChart, ResponsiveContainer } from 'recharts';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { cryptoData } from '@/api/getCryptoData';
import { chartCardData } from '@/utils/Constants';
import { Button } from './button';

export function CryptoTable() {
    const [tableData, setTableData] = useState([]);

    const getTableData = async () => {
        const data = await cryptoData();
        setTableData(data);
        console.log(data);
    };
    useEffect(() => {
        getTableData();
    }, []);
    return (
        <Table>
            <TableHeader className="bg-gray-200 rounded-lg">
                <TableRow>
                    <TableHead className="w-3/12">Currency Name</TableHead>
                    <TableHead className="w-2/12">Price</TableHead>
                    <TableHead className="w-2/12">high 24</TableHead>
                    <TableHead className="w-2/12">low 24</TableHead>
                    <TableHead className="w-2/12">last 7 Days</TableHead>
                    <TableHead className="text-right w-2/12">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableData.map((data: any) => (
                    <TableRow key={data.id}>
                        <TableCell className="font-medium text-nowrap">{data.name}</TableCell>
                        <TableCell>$ {data.current_price}</TableCell>
                        <TableCell className="text-green-500">{data.high_24h}%</TableCell>
                        <TableCell className="text-red-500">{data.low_24h}%</TableCell>
                        <TableCell className="text-red-500 w-full">
                            <div className="w-4/5 h-10">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={chartCardData}>
                                        <Line
                                            type="monotone"
                                            dataKey="pv"
                                            stroke="#FF8F00"
                                            strokeWidth={2}
                                            dot={false}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </TableCell>
                        <TableCell className="">
                            <Button variant={'outline'}>Buy Now</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
