import React from 'react';
import { Icon } from 'ebs-design';
import Image from 'next/image';
import { Pie, PieChart } from 'recharts';

interface WeatherInfoProps {
  data: any;
  setState: any;
}

export const WeatherInfo: React.FC<WeatherInfoProps> = (props) => {
  console.log(props);

  return (
    <>
      <div className='weather-info__header'>
        <div>{props.data.dt_txt}</div>
        <Icon onClick={props.setState} type='arrow-top' />
      </div>
      <div className='weather-info__body'>
        <Image
          height={50}
          width={50}
          alt='clouds'
          src={`/${props?.data?.weather[0]['id']}.svg`}
        />
        Feels like {Math.round(props.data.main['feels_like'])}°C,
        {props.data.weather[0]['description']}
      </div>
      <PieChart width={400} height={400}>
        <Pie
          dataKey='value'
          startAngle={360}
          endAngle={0}
          data={[{ value: props.data.main['humidity'] }]}
          cx='50%'
          cy='50%'
          outerRadius={80}
          fill='#8884d8'
          label
        />
      </PieChart>
    </>
  );
};
