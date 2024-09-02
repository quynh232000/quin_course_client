
import { FaCanadianMapleLeaf, FaPhone } from "react-icons/fa";
import { FaPenClip } from "react-icons/fa6";
import { IoCopyOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="w-content m-auto py-8">
      <div className="border p-5 w-full shadow-sm rounded-xl flex bg-gray-50">
        <div className="w-30 border-r pr-5 flex flex-col">
          <div className="text-center font-bold text-2xl text-primary-800 py-5 border-b border-gray-300">
            03:12
          </div>
          <div className="flex  items-center gap-2 py-4">
            <div className="flex items-center gap-2 font-bold">
              <FaPenClip /> Mã đơn hàng:
            </div>
            <div className="font-bold text-primary-500 text-lg">ADBG345</div>
          </div>
          <div className="bg-primary-900 p-4 text-white rounded-lg">
            <div className="border-b-2 border-primary-700 pb-2">
              Chi tiết thanh toán
            </div>
            <div className="flex justify-between items-center pt-4">
              <div>Tổng tiền:</div>
              <div className="text-3xl font-bold text-primary-400">
                399.000đ
              </div>
            </div>
          </div>

          <Link to={'/checkout-success'} className="mt-8 ">
            <div  className="w-full bg-primary-500 text-white rounded-lg py-2 text-center">Xác nhận thanh toán</div>
          </Link>
        </div>
        <div className="flex-1 pl-5">
          <div className="flex gap-5 items-center">
            <div className="w-[142px] h-[142px] border bg-white">
              <img
                className="w-full h-full object-content"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 font-bold">
                  <FaCanadianMapleLeaf />
                  Bước 1:
                </div>
                <div>Mở app Momo và quét mã QR</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 font-bold">
                  <FaCanadianMapleLeaf />
                  Bước 2:
                </div>
                <div>Đảm bỏa nội dung chuyển khoản là QUIN12345</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 font-bold">
                  <FaCanadianMapleLeaf />
                  Bước 3:
                </div>
                <div>Thực hiện thanh toán</div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <div className="font-bold text-primary-700">
              Chuyển khoản thủ công
            </div>
            <div className="py-2 grid grid-cols-2 gap-4">
              <div className="p-3 border rounded-xl bg-white shadow-md">
                <div className="font-bold text-sm">Số tài khoản</div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="font-bold text-xl">23412341213</div>
                  <div
                    title="Copy"
                    className="text-primary-500 cursor-pointer hover:text-primary-700"
                  >
                    <IoCopyOutline />
                  </div>
                </div>
              </div>
              <div className="p-3 border rounded-xl bg-white shadow-md">
                <div className="font-bold text-sm">Tên tài khoản</div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="font-bold text-xl">NGUYỄN VĂN QUYNH</div>
                  <div
                    title="Copy"
                    className="text-primary-500 cursor-pointer hover:text-primary-700"
                  >
                    <IoCopyOutline />
                  </div>
                </div>
              </div>
              <div className="p-3 border rounded-xl bg-white shadow-md">
                <div className="font-bold text-sm">Nội dung</div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="font-bold text-xl text-primary-500">
                    QUIN12345
                  </div>
                  <div
                    title="Copy"
                    className="text-primary-500 cursor-pointer hover:text-primary-700"
                  >
                    <IoCopyOutline />
                  </div>
                </div>
              </div>
              <div className="p-3 border rounded-xl bg-white shadow-md">
                <div className="font-bold text-sm">Chi nhánh ngân hàng</div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="font-bold text-xl ">Thủ Đức, Tp.HCM</div>
                  <div
                    title="Copy"
                    className="text-primary-500 cursor-pointer hover:text-primary-700"
                  >
                    <IoCopyOutline />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" font-bold underline text-primary-500">Lưu ý.</div>
            <div className="my-2">
              Tối đa 5 phút sau thời gian chuyển khoản, nếu hệ thống không phản
              hồi. Vui lòng liên hệ ngay bộ phận hỗ trợ của Quin Course.
            </div>
            <div className="flex flex-col gap-2 pt-2 pl-4">
                <div className="flex gap-2 "><FaPhone /><span>0358723520</span></div>
                <div className="flex gap-2  items-center"><MdOutlineMailOutline /><span>quynh232000@gmail.com</span></div>
                <div className="flex gap-2  items-center"><IoLocationOutline /><span>Cv.Quang Trung, Q.12, Tp.HCM</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
