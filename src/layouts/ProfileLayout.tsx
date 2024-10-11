import {
  FaLock,
  FaRegEdit,
  FaTruck,
  FaUser,
  FaUserGraduate,
} from "react-icons/fa";
import Header from "../components/shared/headers/Header";
import {
  Link,
  Outlet,
  useLocation,
  // useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Footer from "../components/shared/footers/Footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { useEffect, useState } from "react";
import { MUser } from "../types/app";
import { SGetUserInfo } from "../services/CommonService";
import { setCurrentUser } from "../redux/reducers/appReducer";
import ProfileSibarSke from "../components/skeleton/ProfileSibarSke";
import DefaultSke from "../components/skeleton/DefaultSke";
import { useTranslation } from "react-i18next";
function ProfileLayout() {
  const {t} = useTranslation()
  const { username } = useParams();
  const [userInfo, setUserInfo] = useState<MUser>();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const pathUrl = location.pathname;
  const { user,isLogin } = useSelector((state: RootState) => state.authReducer);
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
   
    if (username) {
      const check_username = username?.split("@")[1];
      if (check_username == user.username) {
        setUserInfo(user);
        dispatch(setCurrentUser(user));
      } else {
        setIsLoading(true);
        SGetUserInfo(check_username).then((res) => {
          setIsLoading(false);
          if (res.status) {
            document.title =
              res.data.first_name + " " + res.data.last_name + " | Quin Course";
            setUserInfo(res.data);
            dispatch(setCurrentUser(res.data));
          } else {
            navigate("/error");
          }
        });
      }
    } else {
      setUserInfo(user);
      dispatch(setCurrentUser(user));
    }
  }, [user]);
  // const [currentUrl, setCurrentUrl] = useState("");

  // const location = useLocation();
  // useEffect(() => {
  //   const url = location.pathname + location.search;
  //   setCurrentUrl(url);
  // }, []);
  if(!isLogin){
    navigate("/login");
    return;
  }

  return (
    <div className="flex flex-col w-full text-grey-900 min-h-[100vh] bg-[#fefefe]">
      <Header />
      <div className="flex-1 mb-8">
        <div className="flex flex-col md:flex-row md:w-content w-full  m-auto gap-5">
          <div className="md:w-20 w-full border-r border-l border-b rounded-b-lg shadow-sm bg-white h-fit">
            {isLoading ? (
              <ProfileSibarSke />
            ) : (
              <>
                <div className=" flex-col items-center py-5 border-b hidden md:flex">
                  <div className="w-[116px] h-[116px] border rounded-full shadow-sm">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={
                        userInfo?.avatar_url ??
                        "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="font-bold mt-2 text-primary-900">
                    {userInfo?.first_name + " " + userInfo?.last_name }
                  </div>

                  {userInfo?.id == user.id && (
                    <div className="flex justify-center items-center gap-2 text-primary-500 text-sm hover:cursor-pointer hover:text-primary-600">
                      <FaRegEdit /> {t('profile.edit')}
                    </div>
                  )}
                </div>

                <div className="py-4 flex md:flex-col">
                  <Link
                    to={"/account/@" + userInfo?.username}
                    title="Tài khoản"
                    className={
                      "flex items-center gap-3 px-3 py-2 font-bold text-gray-500 hover:text-primary-500 border-l-2 hover:border-primary-500  hover:bg-primary-50" +
                      (pathUrl == "/account/@" + userInfo?.username &&
                        " text-primary-500 border-primary-500 bg-primary-50")
                    }
                  >
                    <FaUser /><div className=" "> {t('profile.profile')}</div>
                  </Link>
                  <Link
                  title="Khóa học"
                    to={"/account/@" + userInfo?.username + "/courses"}
                    className={
                      "flex items-center gap-3 px-3 py-2 font-bold text-gray-500 hover:text-primary-500 border-l-2 hover:border-primary-500  hover:bg-primary-50 " +
                      (pathUrl ==
                        "/account/@" + userInfo?.username + "/courses" &&
                        " text-primary-500 border-primary-500 bg-primary-50")
                    }
                  >
                    <FaUserGraduate /> <div className=" ">{t('profile.course')}</div>
                  </Link>
                  {user && userInfo?.id == user.id && (
                    <>
                      <Link
                      title="Lịch sử đơn hàng"
                        to={"/account/orderhistory"}
                        className={
                          "flex items-center gap-3 px-3 py-2 font-bold text-gray-500 hover:text-primary-500 border-l-2 hover:border-primary-500  hover:bg-primary-50" +
                          (pathUrl == "/account/orderhistory" &&
                            " text-primary-500 border-primary-500 bg-primary-50")
                        }
                      >
                        <FaTruck /> <div className=" ">{t('profile.history')}</div>
                      </Link>
                      {/* <Link
                        to={"/account/voucher"}
                        className={
                          "flex items-center gap-3 px-3 py-2 font-bold text-gray-500 hover:text-primary-500 border-l-2 hover:border-primary-500  hover:bg-primary-50" +
                          (pathUrl == "/account/voucher" &&
                            " text-primary-500 border-primary-500 bg-primary-50")
                        }
                      >
                        <FaGift /> Ưu đãi
                      </Link> */}
                      <Link
                      title="Bảo mật"
                        to={"/account/sercurity"}
                        className={
                          "flex items-center gap-3 px-3 py-2 font-bold text-gray-500 hover:text-primary-500 border-l-2 hover:border-primary-500  hover:bg-primary-50" +
                          (pathUrl == "/account/sercurity" &&
                            " text-primary-500 border-primary-500 bg-primary-50")
                        }
                      >
                        <FaLock /> <div className=" ">{t('profile.security')}</div>
                      </Link>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
          <div className="flex-1 border-l border-r border-b shadow-sm bg-white p-5">
            {isLoading ?<DefaultSke/>:<Outlet />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfileLayout;
