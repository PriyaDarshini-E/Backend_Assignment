import { Navigate } from "react-router-dom";

const ProtectedRoute = (WrappedComponent) => {
  return function Protected(props) {
    const isAuth = localStorage.getItem("isAuth");

    if (!isAuth) {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default ProtectedRoute;
