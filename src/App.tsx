import { Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import Temperature from './components/Temperature';
import Forecast from './components/Forecast';
import Loading from './components/Loading';
import './App.css';

const App = () => {
  const [searchParams] = useSearchParams();

  const room = searchParams.get('room') || '1'; 

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Forecast />
        <Temperature room={room} />
      </Suspense>
    </>
  )
}

export default App;
