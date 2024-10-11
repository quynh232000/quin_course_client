import { FaCartPlus, FaStar, FaUserCheck } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MCourse } from "../../types/app";
import { FormatPrice } from "../functions/tool";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { useState } from "react";
import { SAddCart, SEnrollCourse } from "../../services/CommonService";
import { FaArrowRightLong } from "react-icons/fa6";
import ToastMessage from "../compoment/ToastMessage";
import { addToCart } from "../../redux/reducers/appReducer";
import { useTranslation } from "react-i18next";

type props = {
  course: MCourse;
};
function ProductItem({ course }: props) {
  const {t} = useTranslation()
  const { isLogin } = useSelector((state: RootState) => state.authReducer);
  const [isLoading, setIsLoading] = useState(false);
  const [enrollSuccess, setEnrollSuccess] = useState(false);
  const [enrollErorr, setEnrollError] = useState("");
  const [toastCart, setToastCart] = useState<{
    status: boolean;
    type: "success" | "info" | "warning" | "error";
    message: string;
  }>({ status: false, type: "error", message: "" });
  const [btnAddCart, setBtnAddCart] = useState({ add: false, buynow: false });
  // const [loadAddCart,setLoadAddCart] = useState({add:false,buynow:false})

  const Stars = () => {
    const stars = [];
    for (let index = 0; index < 5; index++) {
      stars.push(
        <FaStar
          key={index}
          className={
            index + 1 <= course.rating ? "text-yellow-800" : "text-gray-400"
          }
        />
      );
    }
    return <>{stars}</>;
  };
  const location = useLocation();
  const navigate = useNavigate();
  const handleEnroll = () => {
    if (isLogin) {
      setIsLoading(true);
      SEnrollCourse(course.id).then((res) => {
        setIsLoading(false);
        if (res.status) {
          setEnrollSuccess(true);
        } else {
          alert("Đăng kí khóa học thất bại!");
          setEnrollError(res.message);
        }
      });
    } else {
      const url = location.pathname + location.search;
      navigate("/login?redirect=" + url);
    }
  };

  const dispatch = useDispatch();

  const handleCart = (type: string) => {
    if (isLogin) {
      SAddCart(course.id).then((res) => {
        if (res.status) {
          dispatch(addToCart(course));
          if (type == "addcart" && btnAddCart.add == false) {
            setToastCart({
              status: true,
              type: "success",
              message: res.message,
            });
            setBtnAddCart({ ...btnAddCart, add: true });
          } else if (btnAddCart.buynow == false && type == "buynow") {
            setToastCart({
              status: true,
              type: "success",
              message: res.message,
            });
            setTimeout(() => {
              navigate("/cart");
            }, 1500);
            setBtnAddCart({ ...btnAddCart, buynow: true });
          }
        } else {
          setToastCart({
            status: true,
            type: "info",
            message: res.message,
          });
        }
      });
    } else {
      dispatch(addToCart(course));
      if (type == "addcart" && btnAddCart.add == false) {
        setToastCart({
          status: true,
          type: "success",
          message: t('product.add_cart_success'),
        });
        setBtnAddCart({ ...btnAddCart, add: true });
      } else if (btnAddCart.buynow == false && type == "buynow") {
        setToastCart({
          status: true,
          type: "success",
          message: t('product.add_cart_success'),
        });
        setTimeout(() => {
          navigate("/cart");
        }, 1500);
        setBtnAddCart({ ...btnAddCart, buynow: true });
      }
    }
  };
  return (
    <div className="border shadow-sm rounded-lg flex flex-col hover:shadow-md">
      {enrollErorr && <ToastMessage type="error" message={enrollErorr} />}
      {toastCart.status && (
        <ToastMessage
          title={t('product.success')}
          type={toastCart.type}
          message={toastCart.message}
        />
      )}
      <div className="h-[246px] w-full overflow-hidden rounded-t-lg relative border-b bg-gray-50 shadow-sm">
        {course.percent_sale > 0 && (
          <span className=" absolute top-0 bg-orange-400 text-white py-0 px-5 rounded-br-xl">
            {course.percent_sale}%
          </span>
        )}
        <img
          className="w-full h-full object-cover rounded-t-lg hover:scale-105"
          src={
            course.image_url ??
            "https://www.ketchum.edu/sites/default/files/2022-08/First%20%28Top%29%20Image%20.jpeg"
          }
          alt=""
        />
      </div>
      <div className="p-3 pb-4 flex flex-col gap-2 flex-1">
        <Link to={"/course/" + course.slug}>
          <h4 className=" line-clamp-2 font-bold h-[45px] hover:text-primary-600">
            {course.title}
          </h4>
        </Link>
        <div>
          <Link
            to={"/teacher/@" + course.user.username}
            className="flex gap-2 items-center"
          >
            <div className="w-[24px] h-[24px] border rounded-full">
              <img
                className="w-full h-full object-cover rounded-full "
                src={
                  course.user.avatar_url ??
                  "https://imgcdn.stablediffusionweb.com/2024/4/20/79162520-69b0-4eb3-a4ac-11684a88a82e.jpg"
                }
                alt=""
              />
            </div>
            <div className=" text-primary-900">
              {course.user.first_name + " " + course.user.last_name}
            </div>
          </Link>
          <div className="flex justify-between text-gray-500 mt-1">
            <div className="flex items-center text-sm gap-2">
              {Stars()}
              <span>({course.rating})</span>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <FaUserCheck />
              <span>{course.enrollment_count}</span>
            </div>
          </div>
        </div>
        {course.price > 0 ? (
          <div className="flex gap-3 items-center py-1">
            <span className="font-bold text-primary-500 text-xl">
              {FormatPrice(course.price)}
            </span>
            {course.percent_sale > 0 && (
              <del className="text-gray-500">
                {FormatPrice(
                  Math.ceil((course.price / (100 - course.percent_sale)) * 100)
                )}
              </del>
            )}
          </div>
        ) : (
          <div className="text-green-600 font-bold">Free</div>
        )}

        <div className="flex-1 flex flex-col ">
          {course.price > 0 ? (
            <div className="flex gap-2 ">
              <div onClick={() => handleCart("addcart")}>
                <button
                  className={
                    "text-primary-500 border hover:bg-primary-50 border-primary-500 rounded-lg px-7 py-2 " +
                    (btnAddCart.add &&
                      " bg-gray-100 border-gray-500 text-gray-500")
                  }
                  disabled={btnAddCart.add}
                >
                  <FaCartPlus className="" />
                </button>
              </div>
              <button
                disabled={btnAddCart.buynow}
                onClick={() => handleCart("buynow")}
                className="bg-primary-500 cursor-pointer text-center flex items-center justify-center text-white hover:bg-primary-600 flex-1 rounded-lg"
              >
               {t('product.buy_now')}
              </button>
            </div>
          ) : enrollSuccess ? (
            <div>
              <Link
                to={"/learning/" + course.slug}
                className="border border-primary-500 text-primary-500 bg-primary-50 hover:bg-primary-100 w-full justify-center py-2 rounded-lg flex gap-2 items-center"
              >
                <FaArrowRightLong /> {t('product.join_learning')}
              </Link>
            </div>
          ) : isLoading ? (
            <div className=" flex-1 flex items-end">
              <button
                disabled
                className="bg-deep-orange-500 flex justify-center w-full rounded-lg text-white py-2 hover:bg-deep-orange-600 shadow-sm hover:shadow-none"
              >
                <svg
                  className="text-gray-300 animate-spin"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-blue-500"
                  ></path>
                </svg>
              </button>
            </div>
          ) : (
            <div onClick={handleEnroll} className=" flex-1 flex items-end">
              <button className="bg-deep-orange-500 w-full rounded-lg text-white py-2 hover:bg-deep-orange-600 shadow-sm hover:shadow-none">
                {t('product.join')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
