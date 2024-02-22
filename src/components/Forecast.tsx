import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from '../lib/api';
import { ICON_MAP } from '../lib/config';

const REFRESH_TIME = 1000 * 60;

interface Forecast {
  icon_detailed: string;
  temperature: number;
}

const Forecast = () => {
  const { data: temperatures } = useSWR(`/forecast`, fetcher<Forecast>, {
    suspense: true,
    refreshInterval: REFRESH_TIME,
  });

  const [myTime, setMyTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), REFRESH_TIME);
    
    return () => clearInterval(timerID);
  }, [myTime, temperatures]);
  
  function tick() {
    const date = new Date();
    setMyTime(date);
  }

  return (
    <>
      {temperatures && (<img className="weather-icon" src={ICON_MAP[temperatures.icon_detailed]} alt="Weather" width="200" />)}
      <h2>Outdoor: {temperatures && Math.round(temperatures.temperature)}&deg;</h2>
    </>
  )
}

export default Forecast;
