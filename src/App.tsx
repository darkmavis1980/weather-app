
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Layout from './Layout';
import './App.css';



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="room/:roomId" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
