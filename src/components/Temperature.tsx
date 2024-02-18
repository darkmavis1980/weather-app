import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { api } from '../lib/api';

const REFRESH_TIME = 1000 * 60;

const fetcher = (url: string) => api.get(url).then(({data}) => data);

const Temperature = () => {
    const { data: temperatures } = useSWR('/rooms/2/current', fetcher, {
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
            <h1>{temperatures && Math.round(temperatures.current.temperature)}&deg;</h1>
            <span>{myTime.toDateString()}</span>
        </>
    )
}

export default Temperature;
