"use client"
// Components
import { useMemo, useState } from "react";
import { format} from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// CustomHooks
// import useFetch from "@/hooks/useFetch";

// Store
// import useRecordStore from "@/store/useRecordStore/useRecordStore";
// import useUnitStore from "@/store/useUnitsStore/useUnitsStore";
// import useCRDStore from "@/store/useRecordStore/useCRDStore"

export default function HeadDatePick() {
  // CustomHooks
//   const { fetchData } = useFetch()
  
  // Store
// s
    
  const [datePick, setDatePick] = useState(() => {
    return  new Date();
  });

  const [popoverOpen, setPopoverOpen] = useState(false);

//   const fetchAndDispatch = useCallback(async () => {
//     try {
//       const result = await fetchData(
//         `/att?date=${decodeURIComponent(datePick.toISOString())}&department=${units?.department}`, {}
//       );
//       // console.log(result);
//       fetchKpisDay(datePick.toISOString());
//       updateRecords(result);
//     } catch (error) {
//       console.error("Error fetching and dispatching data:", error);
//     }
//   }, [datePick]);

//   useEffect(() => {
//     const unitsDate = new Date(units?.date);
//     if (datePick.getDate() !== unitsDate.getDate()) {
//       fetchAndDispatch();
//       updateUnits({ date: datePick.toISOString(), department: units.department });
//     }
//   }, [datePick]);

  const formattedDate = useMemo(() => {
    return format(datePick, "PPP");
  }, [datePick]);

  
  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size={"default"}
          className={cn("w-[280px] gap-2.5 text-muted-foreground justify-start bg-card")}
        >
          <CalendarIcon/>
          { formattedDate }
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={datePick}
          onSelect={(newDate) => {
            if (newDate) {
              setDatePick(newDate)
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
