import './App.css';
import {BarterLink, MainLayout, Error, Team, Apis, Ocr, Trans, PDF, AI} from './pages/index';
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
        <Route path='/apipage/ocr' element={<Ocr />} />
        <Route path='/apipage/translate' element={<Trans/>} />
        <Route path='/apipage/pdf' element={<PDF/>}/>
        <Route path='/apipage/aiartist' element={<AI/>}/>
        <Route path='/api/barterlink' element={<BarterLink/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
