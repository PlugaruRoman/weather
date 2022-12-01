import { axios } from '../axios';
import { AxiosResponse } from 'axios';
import { IWeather } from './weather.types';

export const WeatherService = {
  getWeather: async (): Promise<IWeather> =>
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${47.00367}&lon=${28.907089}&cnt=8&appid=89513552b4f105442d50d8ea3bea505d&units=metric`
      )
      .then((res) => res.data),
};
