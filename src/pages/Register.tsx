import { Link, useLocation } from "react-router-dom";
import i_register from "../assets/images/register.png";
import i_google from "../assets/icons/google.png";
import { ChangeEvent, useState } from "react";
import { FormRegister } from "../types/formData";
import {
  SAsynCart,
  SCheckEmail,
  SRegister,
  SVerifyEmail,
} from "../services/CommonService";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { asyncCart } from "../redux/reducers/appReducer";
import { useTranslation } from "react-i18next";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const level2Regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/; // Letters and numbers
const level3Regex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:"<>?[\],./\\]).{8,}$/; // Letters, numbers, and special characters
const level4Regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:"<>?[\],./\\]).{8,}$/; // Uppercase, lowercase, numbers, special characters

const passColors = [
  "bg-gray-300",
  "bg-red-500",
  "bg-red-400",
  "bg-orange-500",
  "bg-success-500",
];
function Register() {
  const { t } = useTranslation();
  const location = useLocation();

  const { cart } = useSelector((state: RootState) => state.appReducer);
  const dispatch = useDispatch();

  const searchParams = new URLSearchParams(location.search);
  const redirect = searchParams.get("redirect") || "";

  const [isSubmit, setIsSubmit] = useState(false);
  const [isSendCode, setIsSendcode] = useState(false);
  const [canEntercode, setCanEnterCode] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const [formData, setFormData] = useState<FormRegister>(new FormRegister());
  const [errorInput, setErrorInput] = useState<FormRegister>(
    new FormRegister()
  );
  const [checkPass, setCheckPass] = useState<{
    level: number;
    message: string;
  }>({
    level: 0,
    message: "",
  });
  const [resultSuccess, setResultSuccess] = useState<string>();
  const [resultError, setResultError] = useState<string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIsSendcode(false);
    let isValid = true;
    // empty value
    if (value == "") {
      setErrorInput({
        ...errorInput,
        [name]: t("register.t1"),
      });
    } else {
      setErrorInput({
        ...errorInput,
        [name]: "",
      });
    }

    // regex email
    if (name == "email") {
      setIsSendcode(false);
      if (!emailRegex.test(value)) {
        setErrorInput({
          ...errorInput,
          email: t("register.t2"),
        });
        isValid = false;
      } else {
        SCheckEmail(value).then((res) => {
          if (res.status) {
            setErrorInput({
              ...errorInput,
              email: "",
            });
            if (
              formData.first_name != "" &&
              formData.last_name != "" &&
              checkPass.level >= 3
            ) {
              setIsSendcode(true);
            }
          } else {
            isValid = false;
            setErrorInput({
              ...errorInput,
              email: t("register.t3"),
            });
          }
        });
      }
    }
    // regex password
    if (name == "password") {
      if (level4Regex.test(value)) {
        setCheckPass({
          level: 4,
          message: t("register.t4"),
        });
      } else if (level3Regex.test(value)) {
        setCheckPass({
          level: 3,
          message: t("register.t5"),
        });
      } else if (level2Regex.test(value)) {
        isValid = false;
        setCheckPass({
          level: 2,
          message: t("register.t6"),
        });
      } else {
        isValid = false;
        setCheckPass({
          level: 1,
          message: t("register.t7"),
        });
      }
    }
    if (
      formData.first_name != "" &&
      formData.last_name != "" &&
      // checkPass.level >= 3 &&
      isValid
    ) {
      setIsSendcode(true);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSendCode = () => {
    setIsSubmit(false);
    setIsSendcode(false);
    SVerifyEmail(formData.email).then((res) => {
      if (res.status) {
        setCanEnterCode(true);
        setIsSubmit(true);
      } else {
        alert("Có lỗi xảy ra");
      }
      setIsSendcode(true);
    });
  };

  const handleSubmit = () => {
    setResultSuccess("");
    setResultError("");
    setIsSubmit(false);
    SRegister(formData).then((res) => {
      if (res.status) {
        localStorage.setItem("USER_TOKEN", res.meta.access_token);
        localStorage.setItem("IS_LOGIN", JSON.stringify(true));
        window.location.href = redirect ? redirect : "/";
        localStorage.setItem("CURRENT_USER", JSON.stringify(res.data));
        // asyn cart
        if (cart) {
          const listIds: number[] = [];
          cart.forEach((i) => {
            listIds.push(i.id);
          });
          SAsynCart(listIds, res.meta.access_token).then((res) => {
            dispatch(asyncCart(res.data ?? []));
            setResultSuccess(t("register.t8"));
            window.location.href = redirect ? redirect : "/";
          });
        } else {
          window.location.href = redirect ? redirect : "/";
        }
      } else {
        setIsSubmit(true);
        setResultError(res.message);
      }
    });
  };

  return (
    <div className="w-full px-5 xl:px-0 xl:w-content m-auto my-[32px] ">
      <div className="border rounded-lg flex gap-5 shadow-sm px-5 py-12">
        <div className="flex-1 px-12 hidden lg:block">
          <img src={i_register} alt="" />
        </div>
        <div className="lg:w-35 w-full p-3">
          <div>
            <div className="font-bold text-3xl">{t("register.t9")}</div>
            <div className="text-sm text-gray-500 mt-1">
              {t("register.t10")}
            </div>
          </div>
          <div className="py-4 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm font-bold">
                {t("register.t11")}
              </label>
              <input
                className={
                  "border p-2 px-4 rounded-lg shadow-sm focus:border-primary-500" +
                  (errorInput.first_name && " border-deep-orange-500")
                }
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="Nguyen Van"
              />
              <small className="text-red-500">{errorInput.first_name}</small>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm font-bold">
                {t("register.t12")}
              </label>
              <input
                className={
                  "border p-2 px-4 rounded-lg shadow-sm focus:border-primary-500" +
                  (errorInput.last_name && " border-deep-orange-500")
                }
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="An"
              />
              <small className="text-red-500">{errorInput.last_name}</small>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm font-bold">
                Email
              </label>
              <input
                className={
                  "border p-2 px-4 rounded-lg shadow-sm focus:border-primary-500" +
                  (errorInput.email && " border-deep-orange-500")
                }
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
              />
              <small className="text-red-500">{errorInput.email}</small>
            </div>
            <div className="flex flex-col gap-1 ">
              <label htmlFor="" className="text-sm font-bold">
                {t("register.t13")}
              </label>
              <div className="w-full relative">
                <input
                  className={
                    "border p-2 px-4 rounded-lg w-full shadow-sm focus:border-primary-500" +
                    (errorInput.password && " border-deep-orange-500")
                  }
                  type={showPass ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="**********"
                />
                {showPass ? (
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className=" absolute top-[50%] right-2 text-xl cursor-pointer translate-y-[-50%] hover:text-primary-500 text-gray-600"
                  >
                    <FaRegEyeSlash />
                  </span>
                ) : (
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className=" absolute top-[50%] right-2 text-xl cursor-pointer translate-y-[-50%] hover:text-primary-500 text-gray-600"
                  >
                    <IoEyeOutline />
                  </span>
                )}
              </div>
              <small
                className={
                  checkPass.level == 4 ? " text-success-500" : "text-red-500"
                }
              >
                {errorInput.password != ""
                  ? errorInput.password
                  : checkPass.message}
              </small>
            </div>
            <div className=" grid grid-cols-4 gap-3 py-3">
              {Array.from({ length: 4 }, (_, index) => {
                if (index <= checkPass.level - 1) {
                  const color = passColors[checkPass.level];
                  return (
                    <span
                      key={index}
                      className={" h-[4px] bg-gray-300 rounded-full " + color}
                    ></span>
                  );
                } else {
                  return (
                    <span
                      key={index}
                      className={" h-[4px] bg-gray-300 rounded-full "}
                    ></span>
                  );
                }
              })}
            </div>
            <div className="flex flex-col gap-1 ">
              <div className="relative">
                <input
                  disabled={!canEntercode}
                  className={
                    (canEntercode ? "" : "bg-gray-100 ") +
                    "border p-2 px-4 rounded-lg w-full shadow-sm focus:border-primary-500" +
                    (errorInput.code && " border-deep-orange-500")
                  }
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  placeholder="Nhập mã xác nhận.."
                />
                {isSendCode == true ? (
                  <button
                    onClick={handleSendCode}
                    className="text-sm px-2 py-1 rounded-lg bg-[#0E97E5] text-white w-fit absolute right-1 top-[50%] translate-y-[-50%]"
                  >
                    {t("register.t14")}
                  </button>
                ) : (
                  <button
                    disabled
                    className="text-sm px-2 py-1 rounded-lg bg-[#989797] text-gray-300 w-fit absolute right-1 top-[50%] translate-y-[-50%]"
                  >
                    {t("register.t14")}
                  </button>
                )}
              </div>
              <small className="text-red-500">{errorInput.code}</small>
            </div>
            <div>
              {resultSuccess && (
                <div className="bg-success-50 border border-success-500 px-3 py-2 rounded-lg text-success-500">
                  {resultSuccess}
                </div>
              )}
              {resultError && (
                <div className="bg-deep-orange-50 border border-deep-orange-500 px-3 py-2 rounded-lg text-deep-orange-500">
                  {resultError}
                </div>
              )}
            </div>
          </div>
          <div className="py-3">
            {isSubmit ? (
              <button
                onClick={handleSubmit}
                className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600"
              >
                {t("register.t15")}
              </button>
            ) : (
              <button className="w-full bg-primary-200 text-white py-2 rounded-lg cursor-not-allowed">
                {t("register.t15")}
              </button>
            )}

            <div className="flex justify-center mt-5">
              <Link to={"/login" + (redirect ? "?redirect=" + redirect : "")}>
                {t("register.t16")}
                <span className="text-primary-500 underline ml-1 hover:text-primary-600">
                  {t("register.t17")}
                </span>
                .
              </Link>
            </div>
          </div>
          <div className="border-b relative my-4">
            <div className=" absolute text-sm top-[-10px] bg-white px-3 right-[50%] translate-x-[50%] text-gray-500">
            {t('register.t18')}
            </div>
          </div>
          <div className="pt-4">
            <button className="border shadow-sm rounded-lg w-full py-2 flex items-center justify-center gap-3 hover:bg-primary-50">
              <img src={i_google} alt="" />
              {t('register.t19')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
