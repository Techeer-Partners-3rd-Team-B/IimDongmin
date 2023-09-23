import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Ad1 from './components/Ad1'
import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/ad1' element={<Ad1/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
