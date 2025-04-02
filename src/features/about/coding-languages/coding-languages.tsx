import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const CODING_LANGUAGES_DATA = [
  { id: "TypeScript", yeo: 7, fill: "var(--chart-1)" },
  { id: "JavaScript", yeo: 7, fill: "var(--chart-1)" },
  { id: "HTML", yeo: 7, fill: "var(--chart-1)" },
  { id: "CSS", yeo: 7, fill: "var(--chart-1)" },
  { id: "Java", yeo: 5, fill: "var(--chart-2)" },
  { id: "C#", yeo: 3, fill: "var(--chart-3)" },
  { id: "Python", yeo: 2, fill: "var(--chart-4)" },
];

const CHART_CONFIG = {} satisfies ChartConfig;

export function CodingLanguages() {
  return (
    <ChartContainer config={CHART_CONFIG} className="w-full min-h-52">
      <BarChart
        accessibilityLayer
        data={CODING_LANGUAGES_DATA.sort((a, b) => a.yeo - b.yeo)}
        layout="vertical"
      >
        <CartesianGrid />
        <XAxis
          type="number"
          dataKey="yeo"
          label={{
            value: "Years of Experience (YoE)",
            position: "insideBottom",
            offset: -5,
          }}
        />
        <YAxis type="category" dataKey="id" />
        <Bar dataKey="yeo" />
      </BarChart>
    </ChartContainer>
  );
}
