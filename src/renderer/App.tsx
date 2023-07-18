import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from '../pages/Signup';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </Router>
  );
}
