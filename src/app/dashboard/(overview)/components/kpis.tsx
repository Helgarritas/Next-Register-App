import { UserCheck } from 'lucide-react';
import { UserMinus } from 'lucide-react';
import { UserX } from 'lucide-react';
import { UserPen } from 'lucide-react';

// Components
import Kpi from "@/components/ui/kpi";

// Store
// import useCRDStore from "@/store/useRecordStore/useCRDStore";

// Utils
// import recoKpiMod from "../utils/recoKpiMod";

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
//   }, [kpisDay]);

  const kpis = [
    {
      title: "Total Present",
      value: 10,
      icon: <UserCheck className='w-5 h-5 text-foreground-green'/>,
      color: "green"
    },
    {
      title: "Total Present",
      value: 10,
      icon: <UserMinus className='w-5 h-5 text-foreground-amber'/>,
      color: "amber"
    },
    {
      title: "Total Present",
      value: 10,
      icon: <UserX className='w-5 h-5 text-foreground-red'/>,
      color: "red"
    },
    {
      title: "Total Present",
      value: 10,
      icon: <UserPen className='w-5 h-5 text-foreground-blue'/>,
      color: "blue" 
    },
  ]

  return (
    <div className=" grid grid-cols-4 gap-5">
      {kpis.map((kpi, i) => (
        <Kpi
          key={i} 
          title={kpi.title}
          value={kpi.value.toString()}
          icon={kpi.icon}
        />
      ))}
    </div>
  );
}
