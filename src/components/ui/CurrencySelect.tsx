import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CurrencySelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="USD" defaultValue='USD' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">USD</SelectItem>
          <SelectItem value="banana">INR</SelectItem>
          <SelectItem value="blueberry">AED</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
