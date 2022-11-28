interface WeatherTableDataProps {
  data: any;
}

export const Table: React.FC<WeatherTableDataProps> = (props) => {
  console.log(props);

  return (
    <>
      {props?.data?.list.map((el: any) => (
        <li className='list' key={el?.dt}>
          <span>{el?.dt_txt}</span>
          <span>{el?.main['temp_min']}/</span>
          <span>{el?.main['temp_max']}</span>
          <span>{el?.weather[0]['description']}</span>
        </li>
      ))}
    </>
  );
};
