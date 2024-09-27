
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./provider/AuthProvider";

const PrivateRoute = () => {
  const user = useAuth();
  const location = useLocation();
  if (!user.isLogin) {
    const currentUrl = location.pathname + location.search;
    return <Navigate to={"/login?redirect="+currentUrl} />;
  }
  return <Outlet />;
};

export default PrivateRoute;