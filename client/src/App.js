import { Routes, Route } from 'react-router-dom';
import './App.css';
import Init from './views/landing/landing';
import Home from './views/home/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Init/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Details/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
