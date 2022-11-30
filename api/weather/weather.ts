import { axios } from '../axios';
import { AxiosResponse } from 'axios';
import { IWeather } from './weather.types';

export const WeatherService = {
  getWeather: async (): Promise<IWeather> =>
    axios
      .get(
        `/data/2.5/forecast?lat=${47.00367}&lon=${28.907089}&cnt=8&appid=${
          process.env.NEXT_PUBLIC_WEATHER_KEY
        }&units=metric`
      )
      .then((res) => res.data),
};
