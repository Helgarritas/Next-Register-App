"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { SelectComp } from "@/components/ui/selectComp";


const chartData = [
  { day: "Monday", present: 186, late: 80, absent: 40 },
  { day: "Tuesday", present: 305, late: 200, absent: 120 },
  { day: "Wednesday", present: 237, late: 120, absent: 130 },
  { day: "Thursday", present: 73, late: 190, absent: 100 },
  { day: "Friday", present: 209, late: 130, absent: 140 },
  { day: "Saturday", present: 214, late: 140, absent: 170 },
  { day: "Sunday", present: 214, late: 140, absent: 200 },
]

const chartConfig = {
  present: {
    label: "Present",
    color: "hsl(var(--green-1))",
  },
  late: {
    label: "Late",
    color: "hsl(var(--amber-1))",
  },
  absent: {
    label: "Absent",
    color: "hsl(var(--red-1))",
  },
} satisfies ChartConfig

function ChartWeek() {
  return (
    <Card className="min-w-[400px]">
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle>Chart - Weekly</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </div>
        <div>
          <SelectComp 
            selects={["1st Week", "2nd Week", "3rd Week", "4th Week", "5th Week"]}
            placeholder="Week"
          />
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="present"
              type="monotone"
              stroke="var(--color-present)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="late"
              type="monotone"
              stroke="var(--color-late)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="absent"
              type="monotone"
              stroke="var(--color-absent)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this week <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 7 days
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default ChartWeek; 