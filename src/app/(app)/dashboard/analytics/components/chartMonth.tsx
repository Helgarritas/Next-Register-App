"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { date: "2024-04-01", present: 222, late: 150, absent: 0, excused: 0 },
  { date: "2024-04-02", present: 97, late: 180, absent: 0, excused: 0 },
  { date: "2024-04-03", present: 167, late: 120, absent: 0, excused: 0 },
  { date: "2024-04-04", present: 242, late: 260, absent: 0, excused: 0 },
  { date: "2024-04-05", present: 373, late: 290, absent: 0, excused: 0 },
  { date: "2024-04-06", present: 301, late: 340, absent: 0, excused: 0 },
  { date: "2024-04-07", present: 245, late: 180, absent: 0, excused: 0 },
  { date: "2024-04-08", present: 409, late: 320, absent: 0, excused: 0 },
  { date: "2024-04-09", present: 59, late: 110, absent: 0, excused: 0 },
  { date: "2024-04-10", present: 261, late: 190, absent: 0, excused: 0 },
  { date: "2024-04-11", present: 327, late: 350, absent: 0, excused: 0 },
  { date: "2024-04-12", present: 292, late: 210, absent: 0, excused: 0 },
  { date: "2024-04-13", present: 342, late: 380, absent: 0, excused: 0 },
  { date: "2024-04-14", present: 137, late: 220, absent: 0, excused: 0 },
  { date: "2024-04-15", present: 120, late: 170, absent: 0, excused: 0 },
  { date: "2024-04-16", present: 138, late: 190, absent: 0, excused: 0 },
  { date: "2024-04-17", present: 446, late: 360, absent: 0, excused: 0 },
  { date: "2024-04-18", present: 364, late: 410, absent: 0, excused: 0 },
  { date: "2024-04-19", present: 243, late: 180, absent: 0, excused: 0 },
  { date: "2024-04-20", present: 89, late: 150, absent: 0, excused: 0 },
  { date: "2024-04-21", present: 137, late: 0, absent: 0, excused: 0 },
  { date: "2024-04-22", present: 224, late: 170, absent: 0, excused: 0 },
  { date: "2024-04-23", present: 138, late: 230, absent: 0, excused: 0 },
  { date: "2024-04-24", present: 387, late: 290, absent: 0, excused: 0 },
  { date: "2024-04-25", present: 215, late: 250, absent: 0, excused: 0 },
  { date: "2024-04-26", present: 75, late: 130, absent: 0, excused: 0 },
  { date: "2024-04-27", present: 383, late: 420, absent: 0, excused: 0 },
  { date: "2024-04-28", present: 122, late: 180, absent: 0, excused: 0 },
  { date: "2024-04-29", present: 315, late: 240, absent: 0, excused: 0 },
  { date: "2024-04-30", present: 454, late: 380, absent: 0, excused: 0 },
  { date: "2024-05-01", present: 165, late: 220, absent: 0, excused: 0 },
  { date: "2024-05-02", present: 293, late: 310, absent: 0, excused: 0 },
  { date: "2024-05-03", present: 247, late: 190, absent: 0, excused: 0 },
  { date: "2024-05-04", present: 385, late: 420, absent: 0, excused: 0 },
  { date: "2024-05-05", present: 481, late: 390, absent: 0, excused: 0 },
  { date: "2024-05-06", present: 498, late: 520, absent: 0, excused: 0 },
  { date: "2024-05-07", present: 388, late: 300, absent: 0, excused: 0 },
  { date: "2024-05-08", present: 149, late: 210, absent: 0, excused: 0 },
  { date: "2024-05-09", present: 227, late: 180, absent: 0, excused: 0 },
  { date: "2024-05-10", present: 293, late: 330, absent: 0, excused: 0 },
  { date: "2024-05-11", present: 335, late: 270, absent: 0, excused: 0 },
  { date: "2024-05-12", present: 197, late: 240, absent: 0, excused: 0 },
  { date: "2024-05-13", present: 197, late: 160, absent: 0, excused: 0 },
  { date: "2024-05-14", present: 448, late: 490, absent: 0, excused: 0 },
  { date: "2024-05-15", present: 473, late: 380, absent: 0, excused: 0 },
  { date: "2024-05-16", present: 338, late: 400, absent: 0, excused: 0 },
  { date: "2024-05-17", present: 499, late: 420, absent: 0, excused: 0 },
  { date: "2024-05-18", present: 315, late: 350, absent: 0, excused: 0 },
  { date: "2024-05-19", present: 235, late: 180, absent: 0, excused: 0 },
  { date: "2024-05-20", present: 177, late: 230, absent: 0, excused: 0 },
  { date: "2024-05-21", present: 82, late: 140, absent: 0, excused: 0 },
  { date: "2024-05-22", present: 81, late: 120, absent: 0, excused: 0 },
  { date: "2024-05-23", present: 252, late: 290, absent: 0, excused: 0 },
  { date: "2024-05-24", present: 294, late: 220, absent: 0, excused: 0 },
  { date: "2024-05-25", present: 201, late: 250, absent: 0, excused: 0 },
  { date: "2024-05-26", present: 213, late: 170, absent: 0, excused: 0 },
  { date: "2024-05-27", present: 420, late: 460, absent: 0, excused: 0 },
  { date: "2024-05-28", present: 233, late: 190, absent: 0, excused: 0 },
  { date: "2024-05-29", present: 78, late: 130, absent: 0, excused: 0 },
  { date: "2024-05-30", present: 340, late: 280, absent: 0, excused: 0 },
  { date: "2024-05-31", present: 178, late: 230, absent: 0, excused: 0 },
  { date: "2024-06-01", present: 178, late: 0, absent: 0, excused: 0 },
  { date: "2024-06-02", present: 470, late: 410, absent: 0, excused: 0 },
  { date: "2024-06-03", present: 103, late: 160, absent: 0, excused: 0 },
  { date: "2024-06-04", present: 439, late: 380, absent: 0, excused: 0 },
  { date: "2024-06-05", present: 88, late: 140, absent: 0, excused: 0 },
  { date: "2024-06-06", present: 294, late: 250, absent: 0, excused: 0 },
  { date: "2024-06-07", present: 323, late: 370, absent: 0, excused: 0 },
  { date: "2024-06-08", present: 385, late: 320, absent: 0, excused: 0 },
  { date: "2024-06-09", present: 438, late: 480, absent: 0, excused: 0 },
  { date: "2024-06-10", present: 155, late: 0, absent: 0, excused: 0 },
  { date: "2024-06-11", present: 92, late: 150, absent: 0, excused: 0 },
  { date: "2024-06-12", present: 492, late: 420, absent: 0, excused: 0 },
  { date: "2024-06-13", present: 81, late: 130, absent: 0, excused: 0 },
  { date: "2024-06-14", present: 426, late: 380, absent: 0, excused: 0 },
  { date: "2024-06-15", present: 307, late: 350, absent: 0, excused: 0 },
  { date: "2024-06-16", present: 371, late: 310, absent: 0, excused: 0 },
  { date: "2024-06-17", present: 475, late: 520, absent: 0, excused: 0 },
  { date: "2024-06-18", present: 107, late: 170, absent: 0, excused: 0 },
  { date: "2024-06-19", present: 341, late: 290, absent: 0, excused: 0 },
  { date: "2024-06-20", present: 408, late: 450, absent: 0, excused: 0 },
  { date: "2024-06-21", present: 169, late: 210, absent: 0, excused: 0 },
  { date: "2024-06-22", present: 317, late: 270, absent: 0, excused: 0 },
  { date: "2024-06-23", present: 480, late: 530, absent: 0, excused: 0 },
  { date: "2024-06-24", present: 132, late: 180, absent: 0, excused: 0 },
  { date: "2024-06-25", present: 141, late: 190, absent: 0, excused: 0 },
  { date: "2024-06-26", present: 434, late: 380, absent: 0, excused: 0 },
  { date: "2024-06-27", present: 448, late: 490, absent: 0, excused: 0 },
  { date: "2024-06-28", present: 149, late: 0, absent: 0, excused: 0 },
  { date: "2024-06-29", present: 103, late: 160, absent: 0, excused: 0 },
  { date: "2024-06-30", present: 446, late: 400, absent: 0, excused: 0 },
]

import { useState } from "react"
import { SelectComp } from "@/components/ui/selectComp"

const chartConfig = {
  views: {
    label: "Page Views",
  },
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
  excused: {
    label: "Excused",
    color: "hsl(var(--blue-1))",
  },
} satisfies ChartConfig

function ChartMonth() {
  const [colorChart, setColorChart] = useState("present")

  function handleSelect(value: string) {
    setColorChart(value.toLowerCase())
  }

  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Chart - General</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="pr-6 flex items-center gap-2">
          <SelectComp 
            handleSelect={handleSelect}
            selects={["Last month", "Last 3 month", "Last 6 month", "Last year"]}
            defaultValue="Last month"
          />
          <SelectComp 
            handleSelect={handleSelect}
            selects={["Present", "Late", "Absent", "Excused"]}
            defaultValue="Present"
          />
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
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
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Line
              dataKey={colorChart}
              type="monotone"
              stroke={`var(--color-${colorChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>

      </CardContent>
    </Card>
  )
}

export default ChartMonth;