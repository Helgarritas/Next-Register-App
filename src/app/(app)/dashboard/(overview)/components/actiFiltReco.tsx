"use client"

import { useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@radix-ui/react-checkbox";
// Store
import recordsStore from "@/store/recordsStore";
// Icons
import { CirclePlus } from "lucide-react";

const filters = [
  {
    options: ["All", "Present", "Late", "Absent", "Excused"],
    placeholder: "Status",
  },
];

export default function ActiFiltReco() {
  const records = recordsStore((state) => state.records);
  const setFilteredRecords = recordsStore((state) => state.setFilteredRecords);

  const handleFiltered = useCallback(
    (value: string) => {
      if (value === "All") {
        // Restauramos todos los registros si se selecciona "Todos"
        setFilteredRecords(records);
      } else {
        const filtered = records.filter(
          (record) =>
            record.att.status.toLowerCase() === value.toLowerCase()
        );
        setFilteredRecords(filtered);
      }
    },
    [records, setFilteredRecords]
  );

  return (
    <>
      {filters.map((obj, i) => (
        <Select 
          key={i}
          onValueChange={(value: string) => handleFiltered(value)}
        >
          <SelectTrigger className="w-max text-foreground bg-card">
            <SelectValue placeholder={obj.placeholder}/>
            <CirclePlus className="w-4 h-4"/>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {obj.options.map((value, j) => (
                <SelectItem key={j} value={value}>
                  {value}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      ))}
    </>
  );
}
