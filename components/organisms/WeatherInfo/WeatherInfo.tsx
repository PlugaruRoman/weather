import React from 'react';
import { Icon } from 'ebs-design';
import Image from 'next/image';
import { WeatherList } from 'api/index';

interface WeatherInfoProps {
  data: WeatherList | undefined;
  setState: (prev: WeatherList | undefined) => void;
}

export const WeatherInfo: React.FC<WeatherInfoProps> = ({ data, setState }) => {
  return (
    <>
      <div className='weather-info__header'>
        <div>{data?.dt_txt}</div>
        <Icon onClick={() => setState(data)} type='arrow-top' />
      </div>
      <div className='weather-info__body'>
        <div>
          <Image
            height={50}
            width={50}
            alt='clouds'
            src={`/${data?.weather[0].id}.svg`}
          />
          Feels like {Math.round(data!.main.feels_like)}°C ,{' '}
          {data?.weather[0].description}
        </div>
        <div>
          The high will be {data!.main.temp_max}°C , the low will be{' '}
          {data!.main.temp_min}°C.
        </div>
        <div>
          <Image height={50} width={50} alt='clouds' src={`/wind.svg`} />
          <span>Wind: {data!.wind.speed.toFixed(1)}m/s</span>
        </div>
        <div>
          <Image height={50} width={50} alt='clouds' src={`/humidity.svg`} />
          <span>Humidity: {data?.main.humidity}%</span>
        </div>
        <div>Visibility {(data!.visibility / 1000).toFixed(1)}km</div>
      </div>
    </>
  );
};
