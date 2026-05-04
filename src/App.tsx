import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EasyQuote from './pages/EasyQuote';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/easyquote" element={<EasyQuote />} />
      </Routes>
    </Router>
  );
}