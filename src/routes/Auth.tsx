import { useEffect } from "react";
import { me } from "../services/UserService";
import { useDispatch } from "react-redux";
import { setIsLogin, setUser } from "../redux/reducers/authReducer";

// class Auth{
//   isLogin = ():boolean => {
//     const dispatch = useDispatch();
//     const token = localStorage.getItem("USER_TOKEN");
//     if (!token) {
//       return false;
//     }
//     useEffect(()=>{
//       me().then((res) => {
//         if(res.status){
//           dispatch(
//             setUser(res.data.user)
//           );
//           return true;
//         }else{
//           return false;
//         }
//       });
//     },[])
//   };
// }
class Auth {
  isLogin = (): Promise<boolean> => {
    return new Promise((resolve) => {
      const dispatch = useDispatch();
      const token = localStorage.getItem("USER_TOKEN");
      
      if (!token) {
        resolve(false);
      }

      useEffect(() => {
        me().then((res) => {
          if (res.status) {
            dispatch(setUser(res.data.user));
            localStorage.setItem("IS_LOGIN",JSON.stringify(true))
            dispatch(setIsLogin(true));
            resolve(true);
          } else {
            localStorage.setItem("IS_LOGIN",JSON.stringify(false))
            dispatch(setIsLogin(false));
            resolve(false);
          }
        });
      }, []);

    });
  };
}

export default new Auth();
