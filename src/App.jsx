import { Routes, Route } from 'react-router-dom';
import { MainPg } from './components/MainPg';
import  Exec  from './components/Exec';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<MainPg />} />
        {/* <Route path="/Exec" element={<Exec />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  )
}

export default App
