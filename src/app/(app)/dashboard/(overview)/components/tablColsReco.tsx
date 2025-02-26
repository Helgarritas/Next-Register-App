"use client"

import { useState } from "react";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronsUpDown } from "lucide-react";
// Store
import recordsStore from "@/store/recordsStore";

const itemCol = [
  { key: 'att', text: '', icon: false },
  { key: 'name', text: 'employee', icon: true },
  { key: 'date', text: 'date', icon: true },
  { key: 'checkIn', text: 'check-in', icon: true },
  { key: 'checkOut', text: 'check-out', icon: true },
  { key: 'att.status', text: 'status', icon: true },
];

export default function TablColsReco() {
  const records = recordsStore((state) => state.records);
  const setFilteredRecords = recordsStore((state) => state.setFilteredRecords);

  const [sortConfig, setSortConfig] = useState<{ key: string, direction: 'asc' | 'desc' } | null>(null);

  const handleSort = (key: string) => {
    const newDirection = sortConfig?.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';

    const sorted = [...records].sort((a, b) => {
      const valueA = key.split('.').reduce((obj, k) => obj?.[k], a);
      const valueB = key.split('.').reduce((obj, k) => obj?.[k], b);

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return newDirection === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      }
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return newDirection === 'asc' ? valueA - valueB : valueB - valueA;
      }
      if (valueA instanceof Date && valueB instanceof Date) {
        return newDirection === 'asc'
          ? valueA.getTime() - valueB.getTime()
          : valueB.getTime() - valueA.getTime();
      }
      return 0;
    });

    setSortConfig({ key, direction: newDirection });
    setFilteredRecords(sorted);
  };

  return (
    <TableHeader>
      <TableRow className="capitalize">
        {itemCol.map(({ key, text, icon }, i) => (
          <TableHead key={key} className={i === 1 ? "text-start" : "text-center"}>
            {text}
            {icon && (
              <button
                onClick={() => handleSort(key)}
                aria-label={`Sort by ${text}`}
                className="ml-2 inline-flex items-center"
              >
                <ChevronsUpDown
                  className={`w-4 h-4 cursor-pointer transition-all ${
                    sortConfig?.key === key ? "text-foreground" : "text-muted-foreground"
                  } hover:text-foreground`}
                />
              </button>
            )}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
