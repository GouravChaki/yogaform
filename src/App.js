import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import View from './components/View/View';

function App() {
  const card=useState()
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Routes>
        <Route path="/register" element={<Register card={card}/>}></Route>
      </Routes>
      <Routes>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      <Routes>
        <Route path="/card" element={<Card card={card}/>}></Route>
      </Routes>
      <Routes>
        <Route path="/view" element={<View/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
