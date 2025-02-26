"use client"

import { UserCheck } from 'lucide-react';
import { UserMinus } from 'lucide-react';
import { UserX } from 'lucide-react';
import { UserPen } from 'lucide-react';

// Components
import Kpi from "@/components/ui/kpi";

// Store
import recordsStore from '@/store/recordsStore';

// Utils
// import recoKpiMod from "../utils/recoKpiMod";
const kpis = [
  {
    type: "present",
    title: "Total Present",
    icon: <UserCheck className='w-5 h-5 text-foreground-green'/>,
    color: "green"
  },
  {
    type: "late",
    title: "Total Late",
    icon: <UserMinus className='w-5 h-5 text-foreground-amber'/>,
    color: "amber"
  },
  {
    type: "absent",
    title: "Total Absent",
    icon: <UserX className='w-5 h-5 text-foreground-red'/>,
    color: "red"
  },
  {
    type: "excused",
    title: "Total Excused",
    icon: <UserPen className='w-5 h-5 text-foreground-blue'/>,
    color: "blue" 
  },
]


export default function Kpis() {
//   const kpisDay = useCRDStore((state) => ( state.kpisDay ));
//   const fetchKpisDay = useCRDStore((state) => ( state.fetchKpisDay ));

//   useEffect(() => {
//     if (Object.keys(kpisDay).length === 0) { 
//       fetchKpisDay(new Date().toISOString());
//     }
//   }, [kpisDay]);

//   const kpis = useMemo(() => {
//     return recoKpiMod.map((kpi) => ({
//       ...kpi,
//       value: kpisDay?.summary?.[kpi.schedule] || 0,
//     }));
//   }, [kpisDay])

  const countedRecords = recordsStore((state) => state.countedRecords);
  const recordCounts: {[key: string]: any} = countedRecords();

  return (
    <div className=" grid grid-cols-4 gap-5">
      {kpis.map((kpi, i) => (
        <Kpi
          key={i} 
          title={kpi.title}
          value={recordCounts[kpi.type]}
          icon={kpi.icon}
        />
      ))}
    </div>
  );
}
