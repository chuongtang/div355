import { Routes, Route } from 'react-router-dom';
import { MainPg } from './components/MainPg';
import  ZoomSurvey  from './components/ZoomSurvey';
import  Register  from './components/Register';
import  Tieup  from './components/Tieup';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<MainPg />} />
        <Route path="/virtual" element={<ZoomSurvey />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tieup" element={<Tieup />} />
      </Routes>
    </>
  )
}

export default App
