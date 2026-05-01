"use client";
import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/shared/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/shared/components/ui/chart";

export const description = "A donut chart";

const chartConfig = {
  correct: {
    label: "correct",
  },
  incorrect: {
    label: "incorrect",
  },
} satisfies ChartConfig;

export function ResultChart({
  correctAnswer,
  worngAnswer,
}: {
  correctAnswer: number;
  worngAnswer: number;
}) {
  const chartData = [
    { name: "correct", value: correctAnswer, fill: "var(--color-emerald-600)" },
    { name: "incorrect", value: worngAnswer, fill: "var(--color-red-500)" },
  ];
  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-62.5"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={50}
              outerRadius={80}
              isAnimationActive={false}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
