import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@radix-ui/react-checkbox";

import { CirclePlus } from "lucide-react";

interface Props {
  selects: string[];
  placeholder?: string;
}

export default function ActiFiltReco({ selects, placeholder = "Select" }: Props) {
  return (
    <>
      <Select>
        <SelectTrigger className="w-min px-4 bg-card">
          <CirclePlus className="w-4 h-4"/>
          <SelectValue placeholder={placeholder}/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {/* <SelectLabel>{init}</SelectLabel> */}
            {selects.map((value: string, i) => (
              <SelectItem 
                key={i} 
                value={value}
                className="capitalize"
              > 
                <Checkbox/>
                {value}
              </SelectItem>
            ))}
          </SelectGroup>  
        </SelectContent>
      </Select>
    </>
  )
}
