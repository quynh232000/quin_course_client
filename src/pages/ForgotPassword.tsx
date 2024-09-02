import { Link } from "react-router-dom";
import i_login from "../assets/images/login.png";
import i_google from "../assets/icons/google.png"
function ForgotPassword() {
  return (
    <div className="w-content m-auto my-[32px]">
    <div className="border rounded-lg flex gap-5 shadow-sm px-5 py-12">
      <div className="w-35 p-3">
        <div>
          <div className="font-bold text-3xl">Quên mật khẩu</div>
          <div className="text-sm text-gray-500 mt-1">
            Vui lòng nhập email để xác nhận đổi mật khẩu!
          </div>
        </div>
        <div className="py-4 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm font-bold">
              Email
            </label>
            <input
              className="border p-2 px-4 rounded-lg shadow-sm focus:border-primary-500"
              type="text"
              name=""
              placeholder="Your email.."
            />
          </div>
         
        </div>
        <div className="py-3">
          <button className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600">
            Xác nhận
          </button>

          <div className="flex justify-center mt-5">
            <Link to={"/login"}>
              Bạn đã có tài khoản?{" "}
              <span className="text-primary-500 underline ml-1 hover:text-primary-600">
                Đăng nhập
              </span>
              .
            </Link>
          </div>
        </div>
        <div className="border-b relative my-4">
          <div className=" absolute text-sm top-[-10px] bg-white px-3 right-[50%] translate-x-[50%] text-gray-500">
            hoặc
          </div>
        </div>
        <div className="pt-4">
          <button className="border shadow-sm rounded-lg w-full py-2 flex items-center justify-center gap-3 hover:bg-primary-50">
            <img src={i_google} alt="" />
            Đăng nhập với google
          </button>
        </div>
      </div>
      <div className="flex-1 px-12">
        <img src={i_login} alt="" />
      </div>
    </div>
  </div>
  )
}

export default ForgotPassword