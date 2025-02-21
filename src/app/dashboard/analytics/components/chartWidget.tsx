import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { 
  CardHeader,
  CardTitle,
  CardDescription 
} from "@/components/ui/card";
import { SelectComp } from "@/components/ui/selectComp";

import { TrendingUp } from "lucide-react";
// import { TrendingDown } from "lucide-react";

const widgetdash = [
  {
    name: "Aaron Mendoza",
    trend: "-20% this month",
    value: 20,
  },
  {
    name: "Aaron Mendoza",
    trend: "-20% this month",
    value: 20,
  },
  {
    name: "Aaron Mendoza",
    trend: "-20% this month",
    value: 20,
  },
  {
    name: "Aaron Mendoza",
    trend: "-20% this month",
    value: 20,
  },
  {
    name: "Aaron Mendoza",
    trend: "-20% this month",
    value: 20,
  },
  {
    name: "Aaron Mendoza",
    trend: "-20% this month",
    value: 20,
  },
  {
    name: "Aaron Mendoza",
    trend: "-20% this month",
    value: 20,
  },
]


export default function ChartWidget() {
    
//   const widgetdash = useWidgetStore((state) => state.widgetDash)
  return (
    <>
      <section className="min-w-[400px] max-h-[381px] flex flex-col border rounded-[10px] bg-card">
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <div className="grid space-y-1.5 ">
            <CardTitle>Range of Absences</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </div>
          <div>
            <SelectComp
              selects={["5", "10", "20", "30"]}
              placeholder="Range"
            />
          </div>
        </CardHeader>
        <div className="p-6 pt-0 flex flex-col gap-4 overflow-y-scroll">
          {widgetdash.length > 0
            ? (widgetdash.map((obj, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 text-sm space-y-0.5">
                      <h3 className="">{obj.name}</h3>
                      <p className="flex items-center gap-2 text-foreground-red opacity-90">
                        {obj.trend} 
                        <TrendingUp className="w-3 h-3"/>
                      </p>
                    </div>
                  </div> 
                  <p className="text-lg font-medium">{obj.value}</p>            
                </div>
              )))
            : (<p className="w-full text-sm text-center text-tertiary-foreground">Not found records.</p>)
          }
        </div>
      </section>
    </>
  )
}
