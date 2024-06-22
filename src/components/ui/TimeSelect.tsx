import * as React from 'react';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export function TimeSelect() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="USD" defaultValue="USD" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="apple">24Hours</SelectItem>
                    <SelectItem value="banana">1Month</SelectItem>
                    <SelectItem value="blueberry">3Months</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
