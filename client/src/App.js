import './App.css';
import { Routes, Route} from 'react-router-dom';
import Init from './views/landing/landing';
import Home from './views/home/home';
import Details from './views/detail/details';
import Form from './views/form/form';
import NavBar from './componentes/navBar/navBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
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
