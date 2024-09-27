import { FaRegBell, FaUserPlus } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { SlLogout } from "react-icons/sl";
// import { BiCategory } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo-new.png";
import { CiUser } from "react-icons/ci";
import CateHeader from "../../compoment/CateHeader";
import { RootState } from "../../../redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowRightLong } from "react-icons/fa6";
import i_avatar from "../../../assets/icons/avatar.png";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { clearCart } from "../../../redux/reducers/appReducer";
function Header() {
  const auth = useSelector((state: RootState) => state.authReducer);
  const { cart } = useSelector((state: RootState) => state.appReducer);
  const dispatch = useDispatch()

  const handleLogout = () => {
    localStorage.removeItem("USER_TOKEN");
    localStorage.removeItem("CURRENT_USER");
    localStorage.removeItem("IS_LOGIN");
    dispatch(clearCart())
    window.location.reload();
  };
  return (
    <div>
      <div className="bg-primary-500 text-white">
        <div className="w-content mx-auto flex justify-between py-2 text-[14px]">
          <Link to={"#"} className="flex gap-2 items-center">
            <TbWorldCode className="text-lg" />
            <span>Ngôn ngữ</span>
          </Link>
          <Link to={"#"} className="flex gap-2 items-center">
            <FaUserPlus className="text-lg" />
            <span>Trở thành giảng viên</span>
          </Link>
        </div>
      </div>
      <div className=" bg-gray-100 shadow-sm">
        <div className="w-content m-auto flex justify-between items-center gap-8 ">
          <div className="flex items-center py-3 gap-5">
            <Link to={"/"} className="w-[91px]">
              <img className="w-full h-full" src={logo} alt="" />
            </Link>
            <CateHeader />
          </div>
          <div className=" border rounded-lg flex px-2 py-1 flex-1 items-center bg-white">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="flex-1 px-2 py-1"
            />
            <div>
              <IoSearchOutline className="text-[20px] text-primary-900" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-3">
              <Link
                to={"#"}
                className="flex gap-1 items-center text-primary-900 hover:text-primary-500"
              >
                <div>
                  <FaRegBell className="text-[20px]" />
                </div>
                <span>Thông báo</span>
              </Link>
              <Link
                to={"/cart"}
                className="flex gap-1 items-center text-primary-900 hover:text-primary-500"
              >
                <div className=" relative">
                  <MdOutlineShoppingCart className="text-[20px]" />
                  {cart && cart.length > 0 && (
                    <span className=" top-[-13px] right-[-8px] absolute bg-red-500 w-[20px] h-[20px] flex justify-center items-center rounded-full text-white text-sm">{cart.length}</span>
                  )}
                </div>
                <span>Giỏ hàng</span>
              </Link>
            </div>
            {auth.isLogin ? (
              <div className="flex gap-4">
                <Link
                  to={"/account/@"+auth.user.username+"/courses"}
                  className="flex gap-1 items-center  hover:text-primary-500 py-1 px-3 border border-primary-500 rounded-lg text-primary-500 hover:bg-primary-50"
                >
                  <FaArrowRightLong />
                  <span>Vào học</span>
                </Link>

                <Menu placement="bottom-end">
                  <MenuHandler>
                    <div className="flex items-center cursor-pointer">
                      <div className="w-[32px] h-[32px] rounded-full border shadow-sm ">
                        <img
                          className="w-full h-full rounded-full object-cover"
                          src={auth.user.avatar_url ?? i_avatar}
                          alt=""
                        />
                      </div>
                    </div>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem>
                      <Link
                        to={"/account/@" + auth.user.username}
                        className="flex gap-2 items-center w-full"
                      >
                        <div className="w-[52px] h-[52px] border rounded-full">
                          <img
                            src={auth.user.avatar_url ?? i_avatar}
                            alt=""
                            className="rounded-full w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <div className="font-bold text-primary-500">
                            {auth.user.first_name + " " + auth.user.last_name}
                          </div>
                          <div className="text-sm mt-1">
                            @{auth.user.username}
                          </div>
                        </div>
                      </Link>
                    </MenuItem>
                    <MenuItem className="border-t border-b mt-2">
                      <Link
                        to={"/account/@" + auth.user.username}
                        className="w-full"
                      >
                        Trang cá nhân
                      </Link>
                    </MenuItem>
                    <MenuItem className="w-full">
                      <Link className="" to={"/blog/create"}>
                        Viết blog
                      </Link>
                    </MenuItem>
                    <MenuItem className="w-full">
                      <Link className="" to={"/my-blogs"}>
                        Bài viết của tôi
                      </Link>
                    </MenuItem>
                    <MenuItem className="w-full">
                      <Link className="" to={"/blog/saved"}>
                        Bài viết đã lưu
                      </Link>
                    </MenuItem>
                    <MenuItem className="w-full">
                      <Link className="" to={"/settings"}>
                        Cài đặt
                      </Link>
                    </MenuItem>
                    <MenuItem className="border-t w-full">
                      <div
                        className="flex font-bold gap-2 items-center"
                        onClick={handleLogout}
                      >
                        <SlLogout /> Đăng xuất
                      </div>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link
                  to={"/register"}
                  className="flex gap-1 items-center text-primary-900 hover:text-primary-500 py-1 px-3"
                >
                  <span>Đăng ký</span>
                </Link>
                <Link
                  to={"/login"}
                  className="flex gap-1 items-center bg-primary-500 text-white py-1 px-3 rounded-lg"
                >
                  <div>
                    <CiUser className="text-[20px]" />
                  </div>
                  <span>Đăng nhập</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
