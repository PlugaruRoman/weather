import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

interface WeatherChartDataProps {
  data: any;
}

export const Chart: React.FC<WeatherChartDataProps> = (data) => {
  return (
    data?.data && (
      <LineChart
        width={1000}
        height={400}
        data={data?.data?.list?.map((el: any) => ({
          name: el.dt_txt,
          min: Object.values(el.main)[2],
          max: Object.values(el.main)[3],
        }))}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='min' stroke='#8884d8' strokeWidth={3} />
        <Line type='monotone' dataKey='max' stroke='#82ca9d' strokeWidth={3} />
      </LineChart>
    )
  );
};
