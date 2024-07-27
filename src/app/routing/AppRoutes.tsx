import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthPage } from "../modules/auth/AuthPage";

const { BASE_URL } = import.meta.env;
const AppRoutes: FC = () => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route>
          <>
            <Route path="auth/*" element={<AuthPage />} />
            <Route path="*" element={<Navigate to="/auth" />} />
          </>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
