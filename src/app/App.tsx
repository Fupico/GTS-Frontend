// import { BrowserRouter as Router } from "react-router-dom";
// import AppRoutes from "./routes";
import "./App.css";
import { AuthInit } from "./contexts/auth/Auth";
import AppRoutes from "./routing/AppRoutes";
const App = () => (
  <AuthInit>
    <AppRoutes />
  </AuthInit>
);

export default App;
