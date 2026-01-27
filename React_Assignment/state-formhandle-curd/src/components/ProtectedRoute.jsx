import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const loggedIn = localStorage.getItem("loggedIn");

  return loggedIn ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
