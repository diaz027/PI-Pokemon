import './App.css';
import { Routes, Route, useLocation} from 'react-router-dom';
import Init from './views/landing/landing';
import Home from './views/home/home';
import Details from './views/detail/details';
import Form from './views/form/form';
import NavBar from './componentes/navBar/navBar';
import Combate from './views/combate/combate';


function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar/>}
      <Routes>
        <Route path='/' element={<Init/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Details/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/combate' Component={Combate}/>
      </Routes>
    </div>
  );
}

export default App;
