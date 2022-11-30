import React from 'react';
import Image from 'next/image';
import { Icon } from 'ebs-design';
import { WeatherInfo } from 'components/index';
import { WeatherList } from 'api/index';

interface WeatherTableDataProps {
  data: WeatherList[] | undefined;
}

export const WeatherTable: React.FC<WeatherTableDataProps> = ({ data }) => {
  const [tableState, setTableState] = React.useState<boolean>(true);
  const [selectedListElement, setSelectedListElement] =
    React.useState<WeatherList>();

  const onClickArrowButton = (prev: WeatherList | undefined) => {
    setTableState((prev) => !prev);
    setSelectedListElement(prev);
  };

  return (
    <ul className={'weather-table__list'}>
      {tableState ? (
        data?.map((i) => (
          <li className='weather-table__list-item' key={i.dt}>
            <div>{i.dt_txt}</div>
            <div>
              <Image
                height={20}
                width={20}
                alt='clouds'
                src={`/${i.weather[0].id}.svg`}
              />
              <span className='weather-table__list-temperature'>
                {Math.round(i.main.temp_min)}°C / {Math.round(i.main.temp_max)}
                °C
              </span>
            </div>
            <div>{i.weather[0].description}</div>
            <Icon
              onClick={() => onClickArrowButton(i)}
              className='arrow-button'
              type='arrow-bottom'
            />
          </li>
        ))
      ) : (
        <WeatherInfo setState={onClickArrowButton} data={selectedListElement} />
      )}
    </ul>
  );
};
