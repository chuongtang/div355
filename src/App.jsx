import { Routes, Route } from 'react-router-dom';
import { MainPg } from './components/MainPg';
import  ZoomSurvey  from './components/ZoomSurvey';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<MainPg />} />
        <Route path="/virtual" element={<ZoomSurvey />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  )
}

export default App
