import React from 'react';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export function ToggleDate() {
    return (
        <ToggleGroup type="single" variant="outline">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
                1D
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
                1W
            </ToggleGroupItem>
            <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
                1M
            </ToggleGroupItem>
            <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
                1Y
            </ToggleGroupItem>
        </ToggleGroup>
    );
}
