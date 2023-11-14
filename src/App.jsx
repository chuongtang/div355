import { Routes, Route } from 'react-router-dom';
import { MainPg } from './components/MainPg';
import  Login  from './components/Auth/Login';
import  Register  from './components/Auth/Register';
import  ZoomSurvey  from './components/ZoomSurvey';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<MainPg />} />
        <Route path="/virtual" element={<ZoomSurvey />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  )
}

export default App
