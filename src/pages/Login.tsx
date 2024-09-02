import { Link } from "react-router-dom";
import i_login from "../assets/images/login.png";
import i_google from "../assets/icons/google.png"
function Login() {
  return (
    <div className="w-content m-auto my-[32px]">
      <div className="border rounded-lg flex gap-5 shadow-sm px-5 py-12">
        <div className="w-35 p-3">
          <div>
            <div className="font-bold text-3xl">Đăng nhập</div>
            <div className="text-sm text-gray-500 mt-1">
              Nhập email và mật khẩu để đăng nhập tài khoản của bạn.
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
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm font-bold">
                Password
              </label>
              <input
                className="border p-2 px-4 rounded-lg shadow-sm focus:border-primary-500"
                type="text"
                name=""
                placeholder="********"
              />
              <div className="flex justify-end mt-1 pr-3">
                <Link
                  to={"/forgot-password"}
                  className="text-sm  text-gray-500 hover:text-primary-500"
                >
                  Quên mật khấu?
                </Link>
              </div>
            </div>
          </div>
          <div className="py-3">
            <button className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600">
              Đăng nhập
            </button>

            <div className="flex justify-center mt-5">
              <Link to={"/register"}>
                Bạn chưa có tài khoản?{" "}
                <span className="text-primary-500 underline ml-1 hover:text-primary-600">
                  Đăng ký ngay
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
  );
}

export default Login;
