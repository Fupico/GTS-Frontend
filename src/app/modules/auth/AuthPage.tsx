import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

const AuthPage = () => (
  <Routes>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    {/* <Route path="forgot-password" element={<ForgotPassword />} /> */}
    <Route index element={<Login />} />
  </Routes>
);

export { AuthPage };
