import { createContext, FC, ReactNode, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../../types/user";
import { me } from "../../services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin, setUser } from "../../redux/reducers/authReducer";
import { RootState } from "../../redux/reducers";
import { MUser } from "../../types/app";
interface AuthContextType {
  isLogin: boolean;
  user: MUser | null;
  loginAction: (data: UserLogin) => void;
  logOut: () => void;
}
interface AuthProviderProps {
  children: ReactNode;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const auth = useSelector((state: RootState) => state.authReducer);
  const navigate = useNavigate();

  const loginAction = async (data: UserLogin) => {
    try {
      const response = await fetch("your-api-endpoint/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res.data) {
        // setUser(res.data.user);
        // setToken(res.token);
        localStorage.setItem("USER_TOKEN", JSON.stringify(res.token));
        navigate("/");
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };
  const dispatch = useDispatch();
  const isLogin = auth.isLogin;
  const user = auth.user;
  const token = localStorage.getItem("USER_TOKEN") ?? "";
  useEffect(() => {
    if (token) {
      me().then((res) => {
        if (res.status) {
          dispatch(setUser(res.data));
          dispatch(setIsLogin(true));
          localStorage.setItem("CURRENT_USER", JSON.stringify(res.data));
          localStorage.setItem("IS_LOGIN", JSON.stringify(true));
        } else {
          dispatch(setIsLogin(false));
          dispatch(setUser(null));
          localStorage.removeItem("CURRENT_USER");
          localStorage.removeItem("USER_TOKEN");
          localStorage.setItem("IS_LOGIN", JSON.stringify(false));
        }
      });
    }
  }, [token]);

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("site");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isLogin, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
