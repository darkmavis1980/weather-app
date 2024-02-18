import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { api } from '../lib/api';
import Cloudy from '../svg/cloudy-day-1.svg';

const REFRESH_TIME = 1000 * 60;

const fetcher = (url: string) => api.get(url).then(({data}) => data);

const Forecast = () => {

    const { data: temperatures } = useSWR(`/forecast`, fetcher, {
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
            <img src={Cloudy} alt="Weather" width="200" />
            <h2>Outdoor: {temperatures && Math.round(temperatures.temperature)}&deg;</h2>
        </>
    )
}

export default Forecast;
