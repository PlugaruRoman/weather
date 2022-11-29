import React from 'react';
import Image from 'next/image';
import { Icon } from 'ebs-design';
import { WeatherInfo } from '../WeatherInfo/WeatherInfo';

interface WeatherTableDataProps {
  data: any;
}

export const WeatherTable: React.FC<WeatherTableDataProps> = (props) => {
  const [tableState, setTableState] = React.useState(true);
  const [selectedListElement, setSelectedListElement] = React.useState();

  const onClickArrowButton = (el: any) => {
    setTableState((prev) => !prev);
    setSelectedListElement(el);
  };

  return (
    <ul className={'weather-table__list'}>
      {tableState ? (
        props?.data?.list.map((el: any) => (
          <li className='weather-table__list-element' key={el?.dt}>
            <div>{el?.dt_txt}</div>
            <div>
              <Image
                height={20}
                width={20}
                alt='clouds'
                src={`/${el?.weather[0]['id']}.svg`}
              />
              <span className='weather-table__list-temperature'>
                {Math.round(el?.main['temp_min'])}°C /{' '}
                {Math.round(el?.main['temp_max'])}°C
              </span>
            </div>
            <div>{el?.weather[0]['description']}</div>
            <Icon
              onClick={() => onClickArrowButton(el)}
              className='arrow-button'
              type='arrow-bottom'
            />
          </li>
        ))
      ) : (
        <WeatherInfo setState={setTableState} data={selectedListElement} />
      )}
    </ul>
  );
};
