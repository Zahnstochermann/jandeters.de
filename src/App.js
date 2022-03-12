import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Home from './pages/Home';
// import Footer from './components/footer';
import Impress from './pages/Impressum';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/impressum" element={<Impress />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
