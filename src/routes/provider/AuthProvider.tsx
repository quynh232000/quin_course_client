import { createContext, FC, ReactNode, useContext, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import {  UserLogin } from "../../types/user";
import { me } from "../../services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin, setUser } from "../../redux/reducers/authReducer";
import { RootState } from "../../redux/reducers";
import { UserModel } from "../../types/post";
interface AuthContextType {
  isLogin: boolean;
  user: UserModel | null;
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
        localStorage.setItem("TOKEN", JSON.stringify(res.token));
        navigate("/dashboard");
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
  useEffect(() => {
    me().then((res) => {
      if (res.status) {
        dispatch(setUser(res.data.user));
        dispatch(setIsLogin(true));
        localStorage.setItem("CURRENT_USER", JSON.stringify(res.data.user));
      } else {
        localStorage.setItem("IS_LOGIN", JSON.stringify(false));
        dispatch(setIsLogin(false));
      }
    });
  }, []);

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
