import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Temperature from './Temperature';
import Forecast from './Forecast';
import Loading from './Loading';
import Rooms from './Rooms';

const Home = () => {
  const { roomId } = useParams();

  const room = roomId || '1'; 

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Forecast />
        <Temperature room={room} />
        <Rooms />
      </Suspense>
    </>
  )
}

export default Home;
