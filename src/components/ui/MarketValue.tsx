import React, { useEffect } from 'react';

import { CurrencySelect } from './CurrencySelect';
import { TimeSelect } from './TimeSelect';
import { CryptoTable } from './CryptoTable';

const MarketValue = () => {
    
    return (
        <div className="flex flex-col w-full mt-6 gap-6 px-4">
            <div className="flex justify-between w-full items-center flex-wrap gap-4">
                <h2 className="text-xl font-medium text-gray-600 ms-2">Growth</h2>
                <div className="flex items-center gap-4 flex-wrap">
                    <CurrencySelect />
                    <TimeSelect />
                </div>
            </div>
            <CryptoTable />
        </div>
    );
};

export default MarketValue;
