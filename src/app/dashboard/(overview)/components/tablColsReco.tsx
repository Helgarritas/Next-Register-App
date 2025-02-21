import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronsUpDown } from "lucide-react";

const itemCol = [
  { text: '', icon: false },
  { text: 'employee', icon: true },
  { text: 'date', icon: true },
  { text: 'check-in', icon: true },
  { text: 'check-out', icon: true },
  { text: 'state', icon: true },
];

export default function TablColsReco() {
  return (
    <TableHeader>
      <TableRow className="capitalize">
        {itemCol.map(({ text, icon }, i) => (
          <TableHead 
            key={i} 
            className={i === 1 ? "text-start" : "text-center"}
          >
            {text}
            {icon && (
              <ChevronsUpDown className="w-4 h-4 text-muted-foreground inline-block ml-2" />
            )}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
