import { FaRegBell, FaUserPlus } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo-new.png";
import { CiUser } from "react-icons/ci";
function Header() {
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
      <div className=" bg-gray-50 shadow-sm">
        <div className="w-content m-auto flex justify-between items-center gap-8 ">
          <div className="flex items-center py-3 gap-5">
            <Link to={"/"} className="w-[91px]">
              <img className="w-full h-full" src={logo} alt="" />
            </Link>
            <Link to={"/collection"} className="flex gap-2 items-center text-[16px] text-gray-600">
              <div className="text-[30px]">
                <BiCategory />
              </div>
              <div>Danh mục</div>
            </Link>
          </div>
          <div className=" border rounded-lg flex px-2 py-1 flex-1 items-center bg-white">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="flex-1 px-2 py-1"
            />
            <div>
              <IoSearchOutline className="text-[20px] text-gray-500" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-3">
              <Link
                to={"#"}
                className="flex gap-1 items-center text-gray-500 hover:text-primary-500"
              >
                <div>
                  <FaRegBell className="text-[20px]" />
                </div>
                <span>Thông báo</span>
              </Link>
              <Link
                to={"/cart"}
                className="flex gap-1 items-center text-gray-500 hover:text-primary-500"
              >
                <div>
                  <MdOutlineShoppingCart className="text-[20px]" />
                </div>
                <span>Giỏ hàng</span>
              </Link>
            </div>
            <div className="flex gap-3">
              <Link
                to={"/register"}
                className="flex gap-1 items-center text-gray-500 hover:text-primary-500 py-1 px-3"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
