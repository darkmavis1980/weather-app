import { Suspense } from 'react';
import Temperature from './components/Temperature';
import Loading from './components/Loading';
import './App.css';

const App = () => {
  return (
    <>
      <h1>Weather</h1>
      <Suspense fallback={<Loading />}>
        <Temperature />
      </Suspense>
    </>
  )
}

export default App;
