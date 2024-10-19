import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/shared/ui/chart.tsx';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { Typography } from '@/shared/ui/typography.tsx';

const chartData = [
  { month: 'Январь', responses: 186, offers: 80 },
  { month: 'Февраль', responses: 305, offers: 200 },
  { month: 'Март', responses: 237, offers: 120 },
  { month: 'Апрель', responses: 73, offers: 190 },
  { month: 'Май', responses: 209, offers: 130 },
  { month: 'Июнь', responses: 214, offers: 140 },
];

const chartConfig = {
  responses: {
    label: 'Отклики',
    color: '#0b66d5',
  },
  offers: {
    label: 'Приглашения',
    color: '#0bd5a9',
  },
} satisfies ChartConfig;
const UserActivityChart = () => {
  return (
    <section className="my-4">
      <Typography tag="h6">Ваша статистика</Typography>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="responses" fill="var(--color-responses)" radius={4} />
          <Bar dataKey="offers" fill="var(--color-offers)" radius={4} />
        </BarChart>
      </ChartContainer>
    </section>
  );
};

export default UserActivityChart;
