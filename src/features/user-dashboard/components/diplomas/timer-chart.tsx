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

const chartConfig = {
  remaining: { label: "Remaining" },
  elapsed: { label: "Elapsed" },
} satisfies ChartConfig;

interface TimerChartProps {
  totalMinutes?: number;
  countDown?: boolean;
  examDuration?: string;
  onTimeUp?: () => void;
}
// Number(examDuration)
export function TimerChart({
  countDown = true,
  examDuration,
  totalMinutes = Number(examDuration),
  onTimeUp,
}: TimerChartProps) {
  const totalSeconds = totalMinutes * 60;
  const [elapsed, setElapsed] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setElapsed((prev) => {
        if (prev >= totalSeconds) {
          clearInterval(interval);
          onTimeUp?.();
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [totalSeconds]);

  const displaySeconds = countDown ? totalSeconds - elapsed : elapsed;
  const minutes = Math.floor(displaySeconds / 60);
  const seconds = displaySeconds % 60;
  const timeLabel = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  const chartData = [
    {
      name: "remaining",
      value: totalSeconds - elapsed,
      fill: "var(--color-blue-600)",
    },
    { name: "elapsed", value: elapsed, fill: "var(--color-blue-100)" },
  ];

  return (
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig} className="mx-auto w-16 h-16">
          <PieChart width={65} height={65}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={20}
              outerRadius={30}
              isAnimationActive={false}
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
                          style={{
                            fontSize: "10px",
                            fill: "#000",
                            fontWeight: 500,
                          }}
                        >
                          {timeLabel}
                        </tspan>
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
