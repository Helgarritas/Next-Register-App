import { ReactNode } from "react";

interface KPIProps {  
  title: string;
  value: number;
  icon: ReactNode;
  classname?: string;
  color?: string;
  change?: string;
}

export default function Kpi({title, value, icon, classname}: KPIProps) {
  return (
    <>
      <div className={`${classname} rounded-[10px] text-card-foreground border bg-card`}>
        <div className="p-6 pb-0 flex items-center justify-between">
          <p className={`text-sm font-medium`}>{title.toString()}</p>
          {icon}
        </div>
        <div className="p-6 pt-3">
          <div className={`text-2xl font-bold`}>{value}</div>
          {/* <p className="text-xs text-muted-foreground">{change}</p> */}
        </div>
      </div>
    </>
  )
}
