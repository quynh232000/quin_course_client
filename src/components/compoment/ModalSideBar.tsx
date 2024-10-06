import React from "react";
import { Drawer, Button, IconButton } from "@material-tailwind/react";
import logo from "../../assets/logo/logo-new.png";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegBell, FaRegNewspaper } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { clearCart } from "../../redux/reducers/appReducer";
import { IoLogOutOutline } from "react-icons/io5";
type props = {
  isOpenSidebar: boolean;
  setIsOpenSidebar: (isOpen: boolean) => void;
};
function ModalSideBar({ isOpenSidebar, setIsOpenSidebar }: props) {
  const closeDrawer = () => setIsOpenSidebar(false);
  const { user, isLogin } = useSelector(
    (state: RootState) => state.authReducer
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("USER_TOKEN");
    localStorage.removeItem("CURRENT_USER");
    localStorage.removeItem("IS_LOGIN");
    dispatch(clearCart());
    navigate("/login");
    window.location.reload();
  };
  return (
    <React.Fragment>
      <Drawer open={isOpenSidebar} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Link to={"/"} className="w-[91px]">
            <img className="w-full h-full" src={logo} alt="" />
          </Link>

          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div>
          {isLogin && user && (
            <Link to={'/account/@'+user.username} className="flex gap-2 items-center py-3 border-t border-b">
              <div className="w-[54px] h-[54px] rounded-full border p-1">
                <img
                  className="w-full h-full rounded-full"
                  src={user.avatar_url}
                  alt=""
                />
              </div>
              <div className="text-sm">
                <div>Hi,</div>
                <div className=" font-bold">
                  {user.first_name + " " + user.last_name}
                </div>
              </div>
            </Link>
          )}
          {isLogin && user && (
            <div>
              <Link
                to={"/account/@" + user.username + "/courses"}
                className="flex gap-2 p-2 items-center border-b"
              >
                <FaArrowRightLong />
                <span>Vào học</span>
              </Link>
              <Link
                to={"/blog/create"}
                className="flex gap-2 p-2 items-center border-b"
              >
                <span>Viết blog</span>
              </Link>
              <Link
                to={"/me/my-blogs"}
                className="flex gap-2 p-2 items-center border-b"
              >
                <span>Bài viết của tôi</span>
              </Link>
              <Link
                to={"/me/bookmark"}
                className="flex gap-2 p-2 items-center border-b"
              >
                <span>Bài viết đã lưu</span>
              </Link>
            </div>
          )}
          <div className="py-5 flex flex-col">
            <Link
              to={"/notifications"}
              className="p-2 w-full hover:bg-gray-50 cursor-pointer rounded-lg flex gap-2 items-center"
            >
              <FaRegBell className="text-[20px]" />
              Thông báo
            </Link>
            <Link
              to={"/cart"}
              className="p-2 w-full hover:bg-gray-50 cursor-pointer rounded-lg flex gap-2 items-center"
            >
              <MdOutlineShoppingCart className="text-[20px]" />
              Giỏ hàng
            </Link>
            <Link
              to={"/blogs"}
              className="p-2 w-full hover:bg-gray-50 cursor-pointer rounded-lg flex gap-2 items-center"
            >
              <FaRegNewspaper className="text-[20px]" />
              Bài viết
            </Link>
          </div>
        </div>
        {isLogin ? (
          <div className="flex flex-col gap-2 py-5 border-t ">
            <div>
              <div
                onClick={handleLogout}
                className="w-full border shadow-sm rounded-lg justify-center cursor-pointer bg-gray-50 hover:bg-gray-100 flex items-center gap-2 p-2"
              >
                <IoLogOutOutline />
                Đăng xuất
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 py-5 border-t ">
            <Link to={"/register"} className="w-full">
              <Button
                size="sm"
                className="w-full border-primary-500 bg-primary-50 text-primary-500"
                variant="outlined"
              >
                Đăng ký
              </Button>
            </Link>
            <Link to={"/login"} className="w-full">
              <Button className="w-full bg-primary-500" size="sm">
                Đăng nhập
              </Button>
            </Link>
          </div>
        )}
      </Drawer>
    </React.Fragment>
  );
}

export default ModalSideBar;
