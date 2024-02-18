import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { api } from '../lib/api';
import Cloudy from '../svg/cloudy-day-1.svg';


const REFRESH_TIME = 1000 * 60;

const fetcher = (url: string) => api.get(url).then(({data}) => data);

interface Props {
    room: string;
}

const Temperature = (props: Props) => {
    const { room = '1' } = props;

    const { data: temperatures } = useSWR(`/rooms/${room}/current`, fetcher, {
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
        // const dateFormat = dayjs(date).format('DDTHH MM YYYY');
        setMyTime(date);
    }

    return (
        <>
            <img src={Cloudy} alt="Weather" width="200" />
            <h1>{temperatures && Math.round(temperatures.current.temperature)}&deg;</h1>
            <h2>Room: {temperatures && temperatures.label }</h2>
            <h3>Humidity: {temperatures.current.humidity}%</h3>
            <span>{myTime.toDateString()}</span>
        </>
    )
}

export default Temperature;
