import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

interface Props {
  selects: string[];
  placeholder?: string;
  className?: string
}

export function SelectComp({ selects, placeholder = "Select", className }: Props) {
  return (
    <Select>
      <SelectTrigger className={`w-max ${className} text-foreground bg-transparent`}>
        <SelectValue placeholder={placeholder} />
        <ChevronDown className="w-4 h-4"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>{init}</SelectLabel> */}
          {selects.map((value: string, i) => (
            <SelectItem key={i} value={value}>{value}</SelectItem>
          ))}
        </SelectGroup>  
      </SelectContent>
    </Select>
  )
}
