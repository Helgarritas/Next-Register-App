"use client";

import React, { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
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
import { chartData, chartConfig, weekOptions, getCurrentWeek } from "../lib/constants";

function ChartWeek() {
  const [selectedWeek, setSelectedWeek] = useState<string>("");
  useEffect(() => {
    setSelectedWeek(getCurrentWeek());
  }, []);

  const handleSelect = (value: string) => {
    setSelectedWeek(value);
  };

  return (
    <Card className="min-w-[400px]">
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle>Chart - Weekly</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </div>
        {selectedWeek && (
          <SelectComp
            handleSelect={handleSelect}
            selects={weekOptions}
            defaultValue={selectedWeek}
          />
        )}
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
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
            {Object.entries(chartConfig).map(([key, { color }]) => (
              <Line
                key={key}
                dataKey={key}
                type="monotone"
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>

      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this week <TrendingUp className="h-4 w-4" />
            </div>
            <p className="text-muted-foreground">Showing total visitors for the last 7 days</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ChartWeek;
