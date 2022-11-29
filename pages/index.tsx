import Head from 'next/head';
import { useQuery } from 'react-query';
import axios from 'axios';
import 'ebs-design/dist/styles/index.scss';
import { Chart } from '../components/organisms/Chart/Chart';
import { WeatherTable } from '../components/organisms/WeatherTable/WeatherTable';

export default function Home() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${47.00367}&lon=${28.907089}&cnt=8&appid=89513552b4f105442d50d8ea3bea505d&units=metric`;

  const { data } = useQuery('weather', () =>
    axios.get(url).then((res) => res.data)
  );

  return (
    <div className='container'>
      <Head>
        <title>Weather Next App</title>
        <meta name='Weather' content='Weather Next App' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main className='main'>
        <Chart data={data} />
        <WeatherTable data={data} />
      </main>
    </div>
  );
}
