// import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import ProductCollectItem from "../components/items/ProductCollectItem";
// import { FaChevronUp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { useEffect, useState } from "react";
import { FormatPrice } from "../components/functions/tool";
import i_nocart from "../assets/images/nocart.avif";
import { setCreateOrder } from "../redux/reducers/appReducer";
import { useTranslation } from "react-i18next";

const paymentMethods = [
  {
    id: 1,
    type: "banking",
    title: "Thanh toán ngân hàng",
    image: "https://img.mservice.com.vn/momo_app_v2/img/BIDV.png",
    name: "bank",
  },
  {
    id: 2,
    type: "banking",
    title: "Thanh toán bằng Momo",
    image:
      "https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-MoMo-Circle.png",
    name: "momo",
  },
];
function Cart() {
  const {t} = useTranslation()
  const { cart } = useSelector((state: RootState) => state.appReducer);
  const { isLogin } = useSelector((state: RootState) => state.authReducer);
  const [newCart, setNewCart] = useState<number[]>([]);
  const [total, setTotal] = useState(0);
  const [priceVoucher, setPriceVoucher] = useState(0);
  const [voucher_id,setVoucher_id] = useState<number|null>(null)
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);

  const dispatch = useDispatch();
  useEffect(() => {
    setVoucher_id(null)
    setPriceVoucher(0);
    const ids: number[] = [];
    let totalCart = 0;
    cart.forEach((c) => {
      totalCart += +c.price;
      if (!ids.includes(c.user_id)) {
        ids.push(c.user_id);
      }
    });
    setNewCart(ids);
    setTotal(totalCart);
  }, [cart]);
  const navigate = useNavigate();
  const handleCheckout = () => {
    if (!isLogin) {
      navigate("/login?redirect=cart");
    } else {
      dispatch(
        setCreateOrder({
          paymentMethod: paymentMethod.type,
          name: paymentMethod.name,
          voucher_id:voucher_id,
          isOrder: true,
        })
      );
      navigate("/checkout");
    }
  };
  return (
    <div className="flex flex-col gap-[72px] pt-[32px] mb-16">
      <div className="w-full px-5 xl:w-content m-auto ">
        <div className="font-bold text-3xl mb-4">
        {t('cart.title')} ({cart.length})
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1 ">
            <div className="flex flex-col gap-5">
              {cart && cart.length > 0 ? (
                newCart.map((id) => {
                  const list = cart.filter((i) => i.user_id == id);
                  if (list[0]) {
                    return (
                      <div className="" key={id}>
                        <div className="border rounded-lg px-3 py-2 bg-gray-50 shadow-sm flex gap-2 items-center">
                          <div className="w-[48px] h-[48px] rounded-full border shadow-sm">
                            <img
                              className="w-full h-full rounded-full object-cover"
                              src={
                                list[0].user.avatar_url ??
                                "https://sharedp.com/wp-content/uploads/2024/06/cute-girl-pic-920x1024.jpg"
                              }
                              alt=""
                            />
                          </div>
                          <div className="">
                            <div className="font-bold text-gray-700">
                              Giảng viên
                               {' '+list[0]?.user?.first_name +
                                " " +
                                list[0]?.user?.last_name}
                            </div>
                            <Link
                              to={"/teacher/@" + list[0].user.username}
                              className="text-sm text-primary-500"
                            >
                              {t('home.see_more')}
                            </Link>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 ">
                          {list.map((item) => {
                            return (
                              <ProductCollectItem
                                key={item.id}
                                course={item}
                                type="cart"
                              />
                            );
                          })}
                          {/* <ProductCollectItem />
                    <ProductCollectItem /> */}
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })
              ) : (
                <div className="flex flex-col py-5 gap-3">
                  <div className="flex justify-center">
                    <img width={228} src={i_nocart} alt="" />
                  </div>
                  <div className="text-center text-deep-orange-500 font-bold py-5">
                  {t('cart.no_cart')}
                  </div>
                  <div className="flex justify-center">
                    <Link
                      to={"/"}
                      className="w-fit px-8 py-2 text-white bg-primary-500 hover:bg-primary-600 font-bold rounded-lg  hover:text-white"
                    >
                     {t('cart.add_cart')}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full md:w-30 px-2 flex flex-col gap-3">
            <div>
              <div className="font-bold text-lg">
              {t('cart.payment')}
              </div>
              <div className="flex flex-col gap-3 py-2">
                {paymentMethods.map((item) => {
                  return (
                    <div
                      key={item.id}
                      onClick={() => setPaymentMethod(item)}
                      className={
                        "flex items-center gap-2 border p-2 rounded-lg shadow-sm   hover:bg-primary-50 cursor-pointer " +
                        (item.id == paymentMethod.id &&
                          " border-primary-500 bg-primary-50")
                      }
                    >
                      <div className="w-[24px] h-[24px] rounded-full object-cover border">
                        <img width={24} height={24} src={item.image} alt="" />
                      </div>
                      <div>{item.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="font-bold text-lg">{t('cart.voucher')}</div>
              <div className="flex my-3 border border-primary-500 rounded-xl pl-2">
                <input
                  type="text"
                  placeholder="ABCVDF"
                  className="flex-1 px-2 text-primary-500 "
                />
                <button className="bg-primary-500 text-white font-sm rounded-r-lg py-2 px-3 hover:bg-primary-600">
                {t('cart.apply')}
                </button>
              </div>
              {/* <div className="border rounded-lg shadow-sm">
                <div className="flex justify-between items-center text-sm px-3 py-3 ">
                  <div>Chọn mã khuyến mãi</div>
                  <FaChevronUp />
                </div>
                <div className="p-2 flex flex-col gap-2 bg-gray-50">
               
                  <div className="border border-primary-500 rounded-xl p-3">
                    <div className="font-bold">Giảm 10 %</div>
                    <div className="flex justify-between items-center">
                      <div>Đơn tối thiểu 300.000 đ</div>
                      <div>
                        Mã:{" "}
                        <span className="text-primary-500 font-bold">
                          ADCGH
                        </span>
                      </div>
                    </div>
                    <div className="text-sm mt-2 text-gray-600">
                      HSD: 31/12/2025
                    </div>
                  </div>
                  <div className="border border-primary-500 rounded-xl p-3">
                    <div className="font-bold">Giảm 10 %</div>
                    <div className="flex justify-between items-center">
                      <div>Đơn tối thiểu 300.000 đ</div>
                      <div>
                        Mã:
                        <span className="text-primary-500 font-bold">
                          ADCGH
                        </span>
                      </div>
                    </div>
                    <div className="text-sm mt-2 text-gray-600">
                      HSD: 31/12/2025
                    </div>
                  </div>
                  <div className="border border-primary-500 rounded-xl p-3">
                    <div className="font-bold">Giảm 10 %</div>
                    <div className="flex justify-between items-center">
                      <div>Đơn tối thiểu 300.000 đ</div>
                      <div>
                        Mã:{" "}
                        <span className="text-primary-500 font-bold">
                          ADCGH
                        </span>
                      </div>
                    </div>
                    <div className="text-sm mt-2 text-gray-600">
                      HSD: 31/12/2025
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <div>
              <div className="font-bold text-xl mt-2">{t('cart.cart_info')}</div>
              <div className="flex flex-col gap-2 my-2">
                <div className="flex justify-between items-center">
                  <div className="text-gray-500">{t('cart.count')}:</div>
                  <div className="text-gray-500">x {cart.length}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-500">{t('cart.sub')}:</div>
                  <div className="text-primary-500 font-bold">
                    {FormatPrice(total)}
                  </div>
                </div>
                {priceVoucher > 0 && (
                  <div className="flex justify-between items-center">
                    <div className="text-gray-500">{t('cart.voucher')}:</div>
                    <div className="text-gray-500 font-bold">
                      {FormatPrice(priceVoucher)}
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center border-t pt-2">
                  <div className="text-gray-500 font-bold">{t('cart.total')}:</div>
                  <div className="text-primary-500 font-bold text-3xl">
                    {FormatPrice(total + priceVoucher)}
                  </div>
                </div>
              </div>
            </div>
            {cart.length > 0 && (
              <div className="flex flex-col gap-4 mt-5">
                <button
                  onClick={handleCheckout}
                  className="bg-primary-500 text-white text-center w-full py-2 rounded-lg hover:bg-primary-600"
                >
                {t('cart.pay')}
                </button>
                <button disabled className="border text-center w-full py-2 rounded-lg border-gray-300 bg-gray-300 text-gray-500 cursor-not-allowed shadow-sm">
                {t('cart.pay_business')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
