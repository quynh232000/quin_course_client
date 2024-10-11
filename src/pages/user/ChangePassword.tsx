import { useState } from "react";
import { ChangePasswordObj } from "../../types/formData";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { SChangePassword } from "../../services/CommonService";
import { useTranslation } from "react-i18next";

function ChangePassword() {
  const {t} = useTranslation()
  const [data, setData] = useState<ChangePasswordObj>(new ChangePasswordObj());
  const [isShowPass, setIsShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: string;
    message: string;
  } | null>(null);
  const handleSubmit = () => {
    if (
      data.password_old == "" ||
      data.password_new == "" ||
      data.password_confirm == ""
    ) {
      setMessage({
        type: "error",
        message: "Vui lòng nhập đât đủ thông tin!",
      });
      return;
    }
    setLoading(true)
    SChangePassword(data).then((res) => {
      setLoading(false);
      setMessage(null);
      if (res.status) {
        setMessage({
          type: "success",
          message: res.message,
        });
        setData(new ChangePasswordObj());
      } else {
        setMessage({
          type: "error",
          message: res.message,
        });
      }
    });
  };
  return (
    <div className="px-5 ">
      <div className="font-bold text-xl">{t('profile.s.t1')}</div>

      <div className="flex flex-col gap-3 py-3 ">
        <div className="flex flex-col md:flex-row md:items-center relative">
          <label htmlFor="" className="md:w-15 font-bold text-primary-800">
           {t('profile.s.t2')}
          </label>
          <input
            type={isShowPass ? "text" : "password"}
            value={data.password_old}
            onChange={(e) => setData({ ...data, password_old: e.target.value })}
            placeholder=""
            className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"
          />
          <div
            className=" absolute right-5 top-[50%] translate-y-[-50%] text-xl cursor-pointer text-gray-500 hover:text-gray-700"
            onClick={() => setIsShowPass(!isShowPass)}
          >
            {isShowPass ? <FaEyeSlash /> : <FaRegEye />}
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label htmlFor="" className="md:w-15 font-bold text-primary-800">
           {t('profile.s.t3')}
          </label>
          <input
            type="password"
            value={data.password_new}
            onChange={(e) => setData({ ...data, password_new: e.target.value })}
            placeholder=""
            className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label htmlFor="" className="md:w-15 font-bold text-primary-800">
           {t('profile.s.t4')}
          </label>
          <input
            type="password"
            value={data.password_confirm}
            onChange={(e) =>
              setData({ ...data, password_confirm: e.target.value })
            }
            placeholder=""
            className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center mt-2">
          <label htmlFor="" className="md:w-15 font-bold text-primary-800"></label>
          {message && (
            <div
              className={
                "text-" +
                (message.type == "error" ? "red" : "green") +
                "-500 text-sm"
              }
            >
              {message.message}
            </div>
          )}
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        {data.password_confirm == "" ||
        data.password_new == "" ||
        data.password_old == "" ||loading ? (
          <button className="py-2 px-8 bg-primary-300 cursor-not-allowed text-white rounded-lg ">
           {t('profile.s.t5')}
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="py-2 px-8 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
          >
           {t('profile.s.t5')}
          </button>
        )}
      </div>
    </div>
  );
}

export default ChangePassword;
