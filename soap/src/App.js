import './styles/App.scss';
import './styles/index.css';
import EstiloGlobal from './styles/styles.jsx';
import Main from './pages/main';
import About from './pages/about';
import Navbar from './components/Navbar';
import Footer from './components/Foorter';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <EstiloGlobal/>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
