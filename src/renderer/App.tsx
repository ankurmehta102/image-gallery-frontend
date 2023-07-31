import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from '../pages/Signup';
import Login from '../pages/login';
import Home from '../pages/Home';
import Albums from '../pages/Albums';
import Settings from '../pages/Settings';
import Uploads from '../pages/Uploads';
import MainLayout from '../components/layouts/MainLayout';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="albums" element={<Albums />} />
          <Route path="settings" element={<Settings />} />
          <Route path="uploads" element={<Uploads />} />
        </Route>
      </Routes>
    </Router>
  );
}
