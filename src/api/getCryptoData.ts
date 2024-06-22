import axios from 'axios';
import { cryptoRes } from '@/utils/Markets';

export const cryptoData = async () => {
    try {
        const res = await axios.get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        );
        return res.data;
    } catch (error) {
        return cryptoRes;
    }
};
