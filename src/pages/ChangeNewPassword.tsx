import { Link, useNavigate, useParams } from "react-router-dom";
import i_login from "../assets/images/login.png";
import i_google from "../assets/icons/google.png";
import { useState } from "react";
import { SChangeNewPassword } from "../services/UserService";
function ChangeNewPassword() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [mess, setMess] = useState<{ status: boolean; message: string } | null>(
    null
  );
  const [loading,setLoading] = useState(false)

  const { token } = useParams();
  const navigate = useNavigate()
  const handleSubmit = () => {
    if (token && password && passwordConfirm == password) {
      setLoading(true)
      SChangeNewPassword(password, token).then((res) => {
        setLoading(false)
        if (res.status) {
        
         setMess({ status: true, message: res.message });
         setTimeout(() => {
          navigate('/login')
         }, 2000);
        } else {
          setMess({ status: false, message: res.message });
        }
      });
    }
  };
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
          <div>
            <div className="py-4 flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-sm font-bold">
                  Mật khẩu mới
                </label>
                <input
                  className="border p-2 px-4 rounded-lg shadow-sm focus:border-primary-500"
                  type="password"
                  name=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nhập Aa.."
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-sm font-bold">
                  Xác nhận mật khẩu
                </label>
                <input
                  className="border p-2 px-4 rounded-lg shadow-sm focus:border-primary-500"
                  type="password"
                  name=""
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  placeholder="Nhập Aa.."
                />
              </div>
              {mess && mess.status == false && (
                <small className="text-deep-orange-500">{mess.message}</small>
              )}
              {mess && mess.status == true && (
                <small className="text-success-500">{mess.message}</small>
              )}
            </div>
            <div className="py-3">
              {password && passwordConfirm && password == passwordConfirm && !loading? (
                <button
                  onClick={handleSubmit}
                  className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600"
                >
                  Xác nhận
                </button>
              ) : (
                <button className="w-full bg-primary-300 cursor-not-allowed text-white py-2 rounded-lg ">
                  Xác nhận
                </button>
              )}

              <div className="flex justify-center mt-5">
                <Link to={"/login"}>
                  Bạn đã có tài khoản?
                  <span className="text-primary-500 underline ml-1 hover:text-primary-600">
                    Đăng nhập
                  </span>
                  .
                </Link>
              </div>
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

export default ChangeNewPassword;
