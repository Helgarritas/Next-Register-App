// Components
import { TableCell, TableFooter, TableRow } from "@/components/ui/table";
import { SelectComp } from "@/components/ui/selectComp";
// Icons
import { ChevronLeft } from "lucide-react";
import { ChevronsLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChevronsRight } from "lucide-react";

const icons = [
  {
    icon: <ChevronLeft className="w-4 h-4"/>,
  },   
  {
    icon: <ChevronsLeft className="w-4 h-4"/>,
  },   
  {
    icon: <ChevronRight className="w-4 h-4"/>,
  },   
  {
    icon: <ChevronsRight className="w-4 h-4"/>,
  }
] 

export default function TablFootReco() {
  return (
    <TableFooter>
      <TableRow>
        <TableCell colSpan={7} className="text-muted-foreground">
          <div className="flex items-center justify-between">
            <p>0 of 100 row(s) selected.</p>
            <div className="flex">
              <div className="flex items-center gap-2">
                <span>Rows</span>
                <SelectComp selects={["10", "20", "30", "40"]} placeholder="10" />
              </div>
              <div className="ml-8 flex items-center gap-2">
                <span>Page 1 of 10</span>
                <div className="ml-2 flex gap-2">
                {icons.map((item, i) => (
                    <div 
                    key={i}
                    className="p-2 border rounded-[8p] hover:text-foreground cursor-pointer"
                    >
                    {item.icon}
                    </div>
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
