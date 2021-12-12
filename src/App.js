
// import './App.css';
import StudentProjectBuilder from './Pages/StudentProjectBuilder';
import StudentProfile from './Pages/StudentProfile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/StudentProject' element={<StudentProjectBuilder />} />
          <Route path='/' element={<StudentProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
