import './App.css';
import {MainLayout, Error, Team, Apis, Ocr} from './pages/index';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainLayout />} />
        <Route path='/404' element={<Error />} />
        <Route path='/team' element={<Team />} />
        <Route path='/apis' element={<Apis />} />
        <Route path='/apis' element={<Apis />} />
        <Route path='/APIpages/Ocr' element={<Ocr />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
