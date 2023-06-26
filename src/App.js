// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
