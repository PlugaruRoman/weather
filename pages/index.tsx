import Head from 'next/head';
import { useQuery } from 'react-query';
import 'ebs-design/dist/styles/index.scss';
import { Chart, CountryCard, WeatherTable } from 'components/index';
import { WeatherService } from 'api/index';

export default function Home() {
  const { data } = useQuery('weather', WeatherService.getWeather);
  console.log(data);
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
