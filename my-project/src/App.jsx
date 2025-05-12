import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Programs from './Pages/Programs'; // თქვენი პროგრამების გვერდი

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
