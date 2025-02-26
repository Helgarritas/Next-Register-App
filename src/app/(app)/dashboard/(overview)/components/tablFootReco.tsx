"use client"
// Hooks
import { useState, useEffect, useCallback } from "react";
// Components
import { TableCell, TableFooter, TableRow } from "@/components/ui/table";
import { SelectComp } from "@/components/ui/selectComp";
// Icons
import { ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight } from "lucide-react";
// Store 
import recordsStore from "@/store/recordsStore";

const icons = [
  { icon: <ChevronsLeft className="w-4 h-4" />, limit: "prev" },
  { icon: <ChevronLeft className="w-4 h-4" />, limit: "prev" },
  { icon: <ChevronRight className="w-4 h-4" />, limit: "next" },
  { icon: <ChevronsRight className="w-4 h-4" />, limit: "next" }
];

export default function TablFootReco() {
  const [marker, setMarker] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const records = recordsStore((state) => state.records);
  const countedRecordsFn = recordsStore((state) => state.countedRecords);
  const setFilteredRecords = recordsStore((state) => state.setFilteredRecords);

  const { total, verified } = countedRecordsFn();
  const totalPages = Math.ceil(total / marker);

  const updateFilteredRecords = useCallback((page: number, rowsPerPage: number) => {
    const start = (page - 1) * rowsPerPage;
    const filtered = records.slice(start, start + rowsPerPage);
    setFilteredRecords(filtered);
  }, [records, marker]);

  useEffect(() => {
    setCurrentPage(1);
    updateFilteredRecords(1, marker);//* modificar en un futuro cuando el back yba este implementado 
  }, [marker]);

  const handleSelect = (value: number) => {
    setMarker(value);
  };

  const handlePageChange = (direction: "prev" | "next") => {
    let newPage = currentPage;
    if (direction === "prev" && currentPage > 1) {
      newPage = currentPage - 1;
    } else if (direction === "next" && currentPage < totalPages) {
      newPage = currentPage + 1;
    }
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
      updateFilteredRecords(newPage, marker);
    }
  };

  const isDisabled = (limit: "prev" | "next"): boolean =>
    limit === "prev" ? currentPage === 1 : currentPage === totalPages;

  return (
    <TableFooter>
      <TableRow>
        <TableCell colSpan={7} className="text-muted-foreground">
          <div className="flex items-center justify-between">
            <p>{verified} of {total} row(s) selected.</p>
            <div className="flex">
              <div className="flex items-center gap-2">
                <span>Rows</span>
                <SelectComp 
                  handleSelect={handleSelect}
                  selects={[10, 20, 30, 40]} 
                  defaultValue={String(marker)}
                />
              </div>
              <div className="ml-8 flex items-center gap-2">
                <span>Page {currentPage} of {totalPages}</span>
                <div className="ml-2 flex gap-2">
                  {icons.map((item: {[key: string]: any}, i) => (
                    <button 
                      key={i}
                      disabled={isDisabled(item.limit)}
                      onClick={() => handlePageChange(item.limit)}
                      className="p-2 border rounded-[8px] hover:text-foreground cursor-pointer disabled:opacity-50"
                    >
                      {item.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}
