import { FaArrowRightLong } from "react-icons/fa6";
import i_success from "../assets/images/checkout_success.png";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function CheckoutSuccess() {
  return (
    <div className="w-content m-auto mb-16">
      <div className="flex justify-center pt-12">
        <img className="max-w-[380px] object-cover" src={i_success} alt="" />
      </div>
      <div>
        <div className="text-center font-bold text-2xl mt-4 mb-3">
          Thanh toán khóa học thành công!
        </div>
        <div className="text-center">
          <p>Cảm ơn bãn đã rin tưởng và đặt khóa học trên QUIN COURSE</p>
          <p>
            Sự ủng hộ và đông hành của Quý Khách là niềm vui và tự hào của chúng
            tôi!
          </p>
        </div>
        <div className="flex justify-center gap-5 mt-8">
          <button className="flex gap-2 items-center bg-primary-500 text-white py-2 px-16 rounded-lg hover:bg-primary-600">
            Đi đến khóa học
            <FaArrowRightLong />
          </button>
          <Link to={'/'} className="flex items-center gap-2 py-2 px-8 border rounded-lg bg-gray-50 shadow-sm hover:bg-primary-50">
            <FaHome /> Trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSuccess;
