import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Routes, Route, Link } from "react-router-dom";
import Main from './pages/Main';
import Success from './pages/Success';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Main' element={<Main />}/>
        <Route path='/Success' element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
