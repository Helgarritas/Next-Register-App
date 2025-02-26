"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import recordsStore from "@/store/recordsStore";

export default function ActiSearReco() {
  const records = recordsStore((state) => state.records)
  const setFilteredRecords = recordsStore((state) => state.setFilteredRecords)

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filtered = records.filter((record) =>
      record.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecords(filtered);
  }, [searchTerm, records, setFilteredRecords]);

  return (
    <div className="space-y-4">
      <Input
        type="search"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="md:w-[100px] lg:w-[300px] bg-card"
      />
    </div>
  );
}
