
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./provider/AuthProvider";

const PrivateRoute = () => {
  const user = useAuth();
  if (!user.isLogin) return <Navigate to="/signin" />;
  return <Outlet />;
};

export default PrivateRoute;