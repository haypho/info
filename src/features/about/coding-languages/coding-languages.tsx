import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useMemo } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const CODING_LANGUAGES_DATA = [
  { id: "TypeScript", YoE: 7, fill: "var(--chart-1)" },
  { id: "JavaScript", YoE: 7, fill: "var(--chart-2)" },
  { id: "HTML", YoE: 7, fill: "var(--chart-3)" },
  { id: "CSS", YoE: 7, fill: "var(--chart-4)" },
  { id: "Java", YoE: 5, fill: "var(--chart-5)" },
  { id: "C#", YoE: 3, fill: "var(--chart-1)" },
  { id: "Python", YoE: 2, fill: "var(--chart-2)" },
].sort((a, b) => a.YoE - b.YoE || a.id.localeCompare(b.id));

const CHART_CONFIG = {} satisfies ChartConfig;

export function CodingLanguages() {
  return (
    <ChartContainer config={CHART_CONFIG} className="w-full min-h-52">
      <BarChart
        accessibilityLayer
        data={CODING_LANGUAGES_DATA}
        layout="vertical"
      >
        <CartesianGrid horizontal={false} />
        <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
        <XAxis
          type="number"
          dataKey="YoE"
          label={{
            value: "Years of Experience (YoE)",
            position: "insideBottom",
            offset: -2,
          }}
        />
        <YAxis type="category" dataKey="id" />
        <Bar dataKey="YoE" />
      </BarChart>
    </ChartContainer>
  );
}
