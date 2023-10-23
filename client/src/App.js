import { Routes, Route } from 'react-router-dom';
import './App.css';
import Init from './views/landing/landing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Init/>}/>
        <Route/>
        <Route/>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
