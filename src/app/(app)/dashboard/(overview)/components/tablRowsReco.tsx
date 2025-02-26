"use client"
// Hooks
// import { useEffect } from 'react';

// Dependencies
// import { format } from '@formkit/tempo';

// Components
import { TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
// import StatusTag from "@/components/StateTag";
// import DropdownMenus from "@/components/DropDownMenus";
import BadgeComp from "@/components/ui/badgeComp";

// import useUnitStore from "@/store/useUnitsStore/useUnitsStore";
import recordsStore from "@/store/recordsStore";
// import useCRDStore from "@/store/useRecordStore/useCRDStore";
// import useCRWStore from "@/store/useRecordStore/useCRWStore";

// CustomHooks
// import useFetch from '@/hooks/useFetch';

// Utils
// import { handleChange } from '../utils/recoTablFetch';

export default function TablRowsReco() {
  // Store
  // const units = useUnitStore((state) => state.units);
  // const records = useRecordStore((state) => state.records);
  // const updateRecords = useRecordStore((state) => state.updateRecords);
  // const fetchRecords = useRecordStore((state) => state.fetchRecords)
  // const fetchKpisDay = useCRDStore((state) => state.fetchKpisDay);
  // const fetchKpisWeek = useCRWStore((state) => state.fetchKpisWeek);
  
  // CustomHooks
  // const { fetchData } = useFetch();

  // useEffect(() => {
  //   if(records.length === 0) {
  //     fetchRecords();
  //   }
  // }, []);

  type state = 'present' | 'late' | 'absent' | 'excused';

  const records = recordsStore((state) => state.records)
  const filteredRecords = recordsStore((state) => state.filteredRecords)

  return (
    <TableBody>
      {filteredRecords.map((obj, i: number) => (
        <TableRow key={i}>
          <TableCell className="pl-4 w-[44px]">
            <Checkbox
              checked={obj.att?.verified || false} 
              // onCheckedChange={(checked: boolean) => handleChange(
              //   checked, 
              //   obj._id,
              //   fetchData,
              //   units,
              //   updateRecords,
              //   fetchKpisDay,
              //   fetchKpisWeek,
              // )}
            />
          </TableCell>
          <TableCell>{obj.name}</TableCell>
          <TableCell className="w-[180px] text-center">{"10/02/2025"}</TableCell>
          <TableCell className="w-[180px] text-center">{"10:20 am"}</TableCell>
          <TableCell className="w-[180px] text-center">{"18:00 pm"}</TableCell>
          {/* <TableCell className="w-[180px] text-center">{obj.att?.date ? format(obj.att.date, "DD/MM/YYYY") : ""}</TableCell>
          <TableCell className="w-[180px] text-center">{obj.att?.checkIn ? format(obj.att.checkIn, "HH:mm a") : ""}</TableCell>
          <TableCell className="w-[180px] text-center">{obj.att?.checkOut ? format(obj.att.checkOut, "HH:mm a") : ""}</TableCell> */}
          <TableCell className="w-[180px] text-center">
            <BadgeComp status={(obj.att.status as state) || 'absent'} />
          </TableCell>
          <TableCell className="pr-4 w-[65px]">
            <div className="flex justify-end">
              {/* <DropdownMenus options={["delete"]}/> */}
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
