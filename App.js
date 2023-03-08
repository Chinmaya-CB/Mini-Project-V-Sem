import logo from './logo.svg';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import './App.css';
import FirebaseDemo from './test';
import Marks from './teach_marks';
import View from './view';
import Result from './results';
import Home from './home';
import Login from './login';
import Student from './student';
import Resources from './res_upload';
import ResView from './res_view';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/test' element={<FirebaseDemo/>}/>
          <Route path='/teach_marks' element={<Marks/>}/>
          <Route path='/view' element={<View/>}/>
          <Route path='/results' element={<Result/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/student' element={<Student/>}/>
          <Route path='/res_upload' element={<Resources/>}/>
          <Route path='/res_view' element={<ResView/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
