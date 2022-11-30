import Head from 'next/head';
import { useQuery } from 'react-query';
import 'ebs-design/dist/styles/index.scss';
import { Chart } from 'components/organisms';
import { WeatherTable } from 'components/organisms';
import { WeatherService } from 'api/index';
import { CountryCard } from 'components/organisms';

export default function Home() {
  const { data } = useQuery('weather', WeatherService.getWeather);

  return (
    <div className='container'>
      <Head>
        <title>Weather Next App</title>
        <meta name='Weather' content='Weather Next App' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <CountryCard data={data} />
      <main className='main'>
        <Chart data={data?.list} />
        <WeatherTable data={data?.list} />
      </main>
    </div>
  );
}
