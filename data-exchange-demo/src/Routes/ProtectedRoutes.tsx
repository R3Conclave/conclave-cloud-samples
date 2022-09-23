import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  let currentSession = sessionStorage.getItem("user");

  return currentSession ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
