import { FaGift, FaLock, FaRegEdit, FaTruck, FaUser, FaUserGraduate } from "react-icons/fa";
import Header from "../components/shared/headers/Header";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/shared/footers/Footer";

function ProfileLayout() {
  return (
    <div className="flex flex-col w-full text-grey-900 min-h-[100vh] bg-[#fefefe]">
      <Header />
      <div className="flex-1 mb-8">
        <div className="flex w-content m-auto gap-5">
          <div className="w-20 border-r border-l border-b rounded-b-lg shadow-sm bg-white h-fit">
            <div className="flex flex-col items-center py-5 border-b">
              <div className="w-[116px] h-[116px] border rounded-full shadow-sm">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
                  alt=""
                />
              </div>
              <div className="font-bold mt-2 text-primary-900">
                Võ Hồng Nhung
              </div>
              <div className="flex justify-center items-center gap-2 text-primary-500 text-sm hover:cursor-pointer hover:text-primary-600">
                <FaRegEdit /> Chỉnh sửa
              </div>
            </div>

            <div className="py-4">
              <Link
                to={"/profile"}
                className="flex items-center gap-3 px-3 py-2 font-bold text-primary-500 border-l-2 border-primary-500 bg-primary-50"
              >
                <FaUser /> Hồ sơ
              </Link>
              <Link
                to={"/user/course"}
                className="flex items-center gap-3 px-3 py-2 font-bold text-gray-500 hover:text-primary-500 border-l-2 hover:border-primary-500 border-transparent hover:bg-primary-50"
              >
                <FaUserGraduate /> Khóa học
              </Link>
              <Link
                to={"/user/orderhistory"}
                className="flex items-center gap-3 px-3 py-2 font-bold text-gray-500 hover:text-primary-500 border-l-2 hover:border-primary-500 border-transparent hover:bg-primary-50"
              >
               <FaTruck /> Lịch sử đặt hàng
              </Link>

              <Link
                to={"/user/voucher"}
                className="flex items-center gap-3 px-3 py-2 font-bold text-gray-500 hover:text-primary-500 border-l-2 hover:border-primary-500 border-transparent hover:bg-primary-50"
              >
                <FaGift /> Ưu đãi
              </Link>

              <Link
                to={"/user/sercurity"}
                className="flex items-center gap-3 px-3 py-2 font-bold text-gray-500 hover:text-primary-500 border-l-2 hover:border-primary-500 border-transparent hover:bg-primary-50"
              >
               <FaLock /> Bảo mật
              </Link>
            </div>
          </div>
          <div className="flex-1 border-l border-r border-b shadow-sm bg-white p-5">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ProfileLayout;
