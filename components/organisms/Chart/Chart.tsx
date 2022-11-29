import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface WeatherChartDataProps {
  data: any;
}

export const Chart: React.FC<WeatherChartDataProps> = (data) => {
  return (
    data?.data && (
      <div className='chart-content'>
        <h3 className='chart-title'>Hourly forecast</h3>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            width={650}
            height={400}
            data={data?.data?.list?.map((el: any) => ({
              name: el.dt_txt,
              min: el.main['temp_min'],
              max: el.main['temp_max'],
            }))}
            margin={{
              top: 5,
              right: 30,
              left: -10,
              bottom: 15,
            }}
          >
            <CartesianGrid horizontal={true} vertical={false} />
            <XAxis dataKey='name' />
            <YAxis
              type='number'
              tickFormatter={(temp) => `${temp} °C`}
              tick={{ stroke: 'white' }}
            />
            <Tooltip />

            <Line
              type='monotone'
              dataKey='min'
              stroke='#8884d8'
              strokeWidth={3}
              dot={false}
            />
            <Line
              type='monotone'
              dataKey='max'
              stroke='#82ca9d'
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  );
};
