import { FaCanadianMapleLeaf, FaPhone } from "react-icons/fa";
import { FaPenClip } from "react-icons/fa6";
import { IoCopyOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { RootState } from "../redux/reducers";
import { useEffect, useState } from "react";
import {
  SCheckAmount,
  SConfirmPayment,
  SCreateOrder,
} from "../services/CommonService";
import { MOrderCreate, SettingItem } from "../types/app";
import { FormatPrice } from "../components/functions/tool";
import { clearCart } from "../redux/reducers/appReducer";
import { useTranslation } from "react-i18next";

function Checkout() {
  const {t} = useTranslation()
  const { checkout } = useSelector((state: RootState) => state.appReducer);
  const [typeBank, setTypeBank] = useState<string | null>(checkout.name);
  const [orderInfo, setOrderInfo] = useState<MOrderCreate>();
  const [bankInfo, setBankInfo] = useState<SettingItem[]>([]);
  const [timeLeft, setTimeLeft] = useState(300);
  const [isTimeout, setIsTimeout] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isCheckoutSuccess, setIsCheckoutsuccess] = useState(false);
  const [isLoop, setIsLoop] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    document.title = "Thanh toán khóa học";
    if (checkout.isOrder == false) {
      navigate("/cart");
    }

    const params: string =
      `?payment_method=${checkout.paymentMethod}` +
      (checkout.voucher_id!=null ? "&voucher_id=" + checkout.voucher_id:'');
    SCreateOrder(params).then((res) => {
      setIsLoading(false);
      setTypeBank(checkout?.name ?? "bank");
      if (res.status) {
        setOrderInfo(res.data.order);
        if (typeBank) {
          setBankInfo(res.data.payment_info[typeBank]);
        }
      } else {
        navigate("cart");
      }
    });

    // console.log(checkout);
  }, [checkout]);

  const checkAcountFc = (order_code: string, retries = 30) => {
    if (retries <= 0) {
      setIsLoop(false);
      return; // Stop further calls
    }
    SCheckAmount(order_code).then((res) => {
      if (res.status) {
        setIsCheckoutsuccess(true);
        setIsConfirm(false);
        setIsLoop(false);
        dispatch(clearCart());
      } else {
        if(res.message=='Order not found'){
          setIsLoop(false);
        }else{
          setTimeout(()=>{
            checkAcountFc(order_code, retries - 1);
          },10000)
        }
      }
    });
  };

  useEffect(() => {
    if (orderInfo && orderInfo.order_code && isLoop) {
      checkAcountFc(orderInfo.order_code);
    }
    // return ()=>{
    //   setIsLoop(false)
    // }
  }, [orderInfo, isLoop]);
  // count time
  useEffect(() => {
    if (timeLeft === 0 || isCheckoutSuccess) {
      setIsLoop(false);
      setIsTimeout(true);
      const id = setTimeout(() => {
        if (isConfirm == false && !isCheckoutSuccess) {
          navigate("/cart");
        }
        clearTimeout(id);
      }, 10000);
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `0${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  // confirm payment
  // to={"/checkout-success"}
  const dispatch = useDispatch();
  const handleConfirmPayment = () => {
    setIsLoop(false);
    setIsConfirm(true);
    setConfirmLoading(true);
    if (orderInfo) {
      SConfirmPayment(orderInfo?.id, orderInfo?.order_code).then((res) => {
        setConfirmLoading(false);
        dispatch(clearCart());
        if (res.status) {
          navigate("/checkout-success");
        } else {
          navigate("/checkout-error");
        }
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center ">
        <div className="flex pt-16 mt-12 justify-center h-screen">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-primary-500 animate-spin"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="xl:w-content w-full px-5 xl:px-0 m-auto py-8">
        <div
          className={
            "border p-5 w-full shadow-sm rounded-xl flex flex-col md:flex-row bg-gray-50 " +
            (isTimeout && !isCheckoutSuccess && "border-red-500 bg-red-50 ") +
            (isCheckoutSuccess && " border-green-500 bg-green-50")
          }
        >
          <div className="w-full md:w-30 border-r md:pr-5 pr-0 mb-5 md:mb-0 flex flex-col relative">
            <div className=" absolute">
              {!isTimeout && (
                <div className="flex gap-2 ">
                  <span className="sr-only">Loading...</span>
                  <div className="h-2 w-2 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.3s] "></div>
                  <div className="h-2 w-2 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="h-2 w-2 bg-primary-500 rounded-full animate-bounce"></div>
                </div>
              )}
            </div>
            <div
              className={
                "text-center font-bold text-2xl text-primary-800 py-5 border-b border-gray-300 " +
                (isTimeout && " text-red-500")
              }
            >
              {formatTime(timeLeft)}
            </div>
            <div className="flex  items-center gap-2 py-4">
              <div className="flex items-center gap-2 font-bold">
                <FaPenClip /> {t('cart.code')}:
              </div>
              <div className="font-bold text-primary-500 text-lg">
                {orderInfo?.order_code}
              </div>
            </div>
            <div className="bg-primary-900 p-4 text-white rounded-lg">
              <div className="border-b-2 border-primary-700 pb-2">
              {t('cart.detail')}
              </div>
              <div className="flex justify-between items-center pt-4">
                <div>Tổng tiền:</div>
                <div className="text-3xl font-bold text-primary-400">
                  {FormatPrice(orderInfo?.total ?? 0)}
                </div>
              </div>
            </div>
            {(isTimeout || typeBank == "momo") &&
              (confirmLoading ? (
                <button disabled className="mt-8 ">
                  <div className="w-full bg-gray-300 text-gray-500 cursor-not-allowed rounded-lg py-2 text-center">
                  {t('cart.confirm')}
                  </div>
                </button>
              ) : (
                <button onClick={handleConfirmPayment} className="mt-8 ">
                  <div className="w-full bg-primary-500 hover:bg-primary-600 text-white rounded-lg py-2 text-center">
                  {t('cart.confirm')}
                  </div>
                </button>
              ))}
          </div>
          {isCheckoutSuccess ? (
            <div className="flex-1 pl-5">
              <div>
                <div className="success-animation my-8">
                  <svg
                    className="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                  >
                    <circle
                      className="checkmark__circle"
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                    />
                    <path
                      className="checkmark__check"
                      fill="none"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-primary-500 text-lg">
                {t('cart.success')}
                </div>
               
              </div>
            </div>
          ) : (
            <div className="flex-1 md:pl-5 ">
              <div className="flex flex-col md:flex-row gap-5 items-center">
                {typeBank == "momo" && bankInfo && (
                  <div className="w-[342px]  border bg-white object-cover shadow-lg">
                    <img
                      className="w-full h-full object-content"
                      src={bankInfo.find((i) => i.key == "MOMO_QR")?.value}
                      alt=""
                    />
                  </div>
                )}
                {typeBank == "bank" && bankInfo && (
                  <div className="w-[280px]  border bg-white object-contain shadow-lg">
                    <img
                      className="w-full h-full object-content"
                      src={bankInfo.find((i) => i.key == "BANKING_QR")?.value}
                      alt=""
                    />
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 font-bold">
                      <FaCanadianMapleLeaf />
                      {t('cart.step')} 1:
                    </div>
                    <div>
                    {t('cart.open_app')}
                      <span className="font-bold text-primary-500">
                        {typeBank == "momo" ? "MOMO" : "BANKING"}
                      </span>{" "}
                      {t('cart.qr')}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center gap-1 font-bold">
                      <FaCanadianMapleLeaf />
                      {t('cart.step')} 2:
                    </div>
                    <div className="flex-1">
                    {t('cart.content')}
                      <span className="font-bold text-primary-500">
                        {orderInfo?.order_code}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 font-bold">
                      <FaCanadianMapleLeaf />
                      {t('cart.step')} 3:
                    </div>
                    <div>{t('cart.continue_pay')}</div>
                  </div>
                </div>
              </div>
              {bankInfo && (
                <div className="py-5">
                  <div className="font-bold text-primary-700">
                  {t('cart.bank.t1')}
                  </div>
                  <div className="py-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 border rounded-xl bg-white shadow-md">
                      <div className="font-bold text-sm"> {t('cart.bank.t2')}</div>
                      <div className="mt-4 flex justify-between items-center">
                        <div className="font-bold text-xl">
                          {typeBank == "bank"
                            ? bankInfo.find((i) => i.key == "BANKING_NUMBER")
                                ?.value
                            : bankInfo.find((i) => i.key == "MOMO")?.value}
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
                      <div className="font-bold text-sm">T {t('cart.bank.t3')}</div>
                      <div className="mt-4 flex justify-between items-center">
                        <div className="font-bold text-xl">
                          {typeBank == "bank"
                            ? bankInfo.find((i) => i.key == "BANKING_USER")
                                ?.value
                            : bankInfo.find((i) => i.key == "NAME")?.value}
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
                      <div className="font-bold text-sm"> {t('cart.bank.t4')}</div>
                      <div className="mt-4 flex justify-between items-center">
                        <div className="font-bold text-xl text-primary-500">
                          {orderInfo?.order_code}
                        </div>
                        <div
                          title="Copy"
                          className="text-primary-500 cursor-pointer hover:text-primary-700"
                        >
                          <IoCopyOutline />
                        </div>
                      </div>
                    </div>
                    {typeBank == "bank" && bankInfo && (
                      <div className="p-3 border rounded-xl bg-white shadow-md">
                        <div className="font-bold text-sm">
                        {t('cart.bank.t5')}
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <div className="font-bold  ">
                            {
                              bankInfo.find((i) => i.key == "BANKING_NAME")
                                ?.value
                            }
                          </div>
                          <div
                            title="Copy"
                            className="text-primary-500 cursor-pointer hover:text-primary-700"
                          >
                            <IoCopyOutline />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div>
                <div className=" font-bold underline text-primary-500">
                {t('cart.footer.note')}
                </div>
                <div className="my-2">
                {t('cart.footer.t1')}
                </div>
                <div className="flex flex-col gap-2 pt-2 pl-4">
                  <div className="flex gap-2 ">
                    <FaPhone />
                    <span>0358723520</span>
                  </div>
                  <div className="flex gap-2  items-center">
                    <MdOutlineMailOutline />
                    <span>quynh232000@gmail.com</span>
                  </div>
                  <div className="flex gap-2  items-center">
                    <IoLocationOutline />
                    <span>Cv.Quang Trung, Q.12, Tp.HCM</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Checkout;
