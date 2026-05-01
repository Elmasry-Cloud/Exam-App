"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/shared/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/shared/components/ui/chart";

export const description = "A donut chart with text";

const chartData = [
  { browser: "x", visitors: 500, fill: "var(--color-blue-600)" },
  { browser: "y", visitors: 200, fill: "var(--color-blue-100)" },
  //   remaining: { label: "Remaining" },
  // elapsed: { label: "Elapsed" },
];

const chartConfig = {
  remaining: { label: "Remaining" },
  elapsed: { label: "Elapsed" },
  // visitors: {
  //   label: "Visitors",
  // },
  // chrome: {
  //   label: "Chrome",
  //   color: "var(--chart-1)",
  // },
  // safari: {
  //   label: "Safari",
  //   color: "var(--chart-2)",
  // },
} satisfies ChartConfig;

export function ChartPieDonutText() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig} className="mx-auto w-16 h-16 ">
          <PieChart width={65} height={65}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={20} // فتحة صغيرة جوه الدائرة
              outerRadius={30}
              width={65}
              height={65}
              // strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="text-black text-xs font-normal"
                        >
                          {/* {totalVisitors.toLocaleString()} */}
                          05:13
                        </tspan>
                        {/* <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="text-black text-xs font-normal"
                        >
                          05:13
                        </tspan> */}
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
