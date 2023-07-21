import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from '../pages/Signup';
import Login from '../pages/login';
import Home from '../pages/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
