// import React from 'react';
import axios from 'axios';
import useSWR from 'swr';
import './App.css';

console.log(import.meta.env.VITE_BASE_API);

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
});

const fetcher = (url: string) => api.get(url).then(({data}) => data);

const App = () => {
  const { data: temperatures } = useSWR('/rooms/1/current', fetcher, { suspense: true});

  return (
    <>
      <h1>Weather</h1>
      {temperatures && temperatures.current.temperature}
    </>
  )
}

export default App;
