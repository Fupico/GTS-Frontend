import { Routes, Route } from 'react-router-dom';
import Login from './modules/auth/components/Login';
import Register from './modules/auth/components/Register';

const AppRoutes = () => (
  <Routes>
    {/* <Route path="/" element={<HomePage />} />
    <Route path="/dashboard" element={<DashboardPage />} /> */}
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

export default AppRoutes;
