import React from 'react';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export function ToggleBuy() {
    return (
        <ToggleGroup type="single" variant="outline">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
                Buy
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
                Sell
            </ToggleGroupItem>
        </ToggleGroup>
    );
}
