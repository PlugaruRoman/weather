import Image from 'next/image';
import { IWeather } from 'api/index';

export interface CountryCardProps {
  data: IWeather | undefined;
}

export const CountryCard: React.FC<CountryCardProps> = ({ data }) => {
  return (
    <div className='card'>
      <h1>
        {data?.city.name}, {data?.city.country}
      </h1>
      <div className='card-body'>
        {data ? (
          <Image
            height={60}
            width={60}
            alt='clouds'
            src={`/${data?.list[0].weather[0].id}.svg`}
          />
        ) : (
          ''
        )}
        {data?.list[0].main.temp}°C
        <div>{data?.list[0].weather[0].description}</div>
      </div>
    </div>
  );
};
