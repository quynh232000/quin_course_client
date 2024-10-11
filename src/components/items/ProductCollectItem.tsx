import { FaCartPlus, FaStar, FaUserCheck } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { formatDuration, FormatPrice } from "../functions/tool";
import { FaArrowRightLong, FaRegTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { MCourse } from "../../types/app";
import { addToCart, removeFromCart } from "../../redux/reducers/appReducer";
import { useState } from "react";
import ToastMessage from "../compoment/ToastMessage";
import {
  SAddCart,
  SDeleteItemCart,
  SEnrollCourse,
} from "../../services/CommonService";
import { useTranslation } from "react-i18next";

type props = {
  course: MCourse;
  type?: "progress" | "cart";
};
function ProductCollectItem({ course, type }: props) {
  const {t} = useTranslation()
  const { user } = useSelector((state: RootState) => state.authReducer);
  const { currentUser } = useSelector((state: RootState) => state.appReducer);
  const [toastCart, setToastCart] = useState<{
    status: boolean;
    type: "success" | "info" | "warning" | "error";
    message: string;
  }>({ status: false, type: "error", message: "" });
  const [btnAddCart, setBtnAddCart] = useState({ add: false, buynow: false });

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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogin } = useSelector((state: RootState) => state.authReducer);
  const [isLoading, setIsLoading] = useState(false);
  const [enrollSuccess, setEnrollSuccess] = useState(false);
  const [enrollErorr, setEnrollError] = useState("");
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
          message: "Thêm khóa học vào giỏ hàng thành công!",
        });
        setBtnAddCart({ ...btnAddCart, add: true });
      } else if (btnAddCart.buynow == false && type == "buynow") {
        setToastCart({
          status: true,
          type: "success",
          message: "Đã thêm khóa học vào giỏ hàng!",
        });
        setTimeout(() => {
          navigate("/cart");
        }, 1500);
        setBtnAddCart({ ...btnAddCart, buynow: true });
      }
    }
  };

  // const handleCart = (type: string) => {
  //   dispatch(addToCart(course));
  //   if (type == "addcart" && btnAddCart.add == false) {
  //     setToastCart({
  //       status: true,
  //       type: "success",
  //       message: "Thêm khóa học vào giỏ hàng thành công!",
  //     });
  //     setBtnAddCart({ ...btnAddCart, add: true });
  //   } else if (btnAddCart.buynow == false && type == "buynow") {
  //     setToastCart({
  //       status: true,
  //       type: "success",
  //       message: "Đã thêm khóa học vào giỏ hàng!",
  //     });
  //     setTimeout(() => {
  //       navigate("/cart");
  //     }, 1500);
  //     setBtnAddCart({ ...btnAddCart, buynow: true });
  //   }
  // };
  const handleDeleteCart = () => {
    if (isLogin) {
      SDeleteItemCart(course.id).then((res) => {
        if (res.status) {
          dispatch(removeFromCart(course));
        } else {
          alert(res.message);
        }
      });
    } else {
      dispatch(removeFromCart(course));
    }
  };
  return (
    <div className=" p-5 border-b w-full  flex md:flex-row flex-col h-fit">
      {enrollErorr && <ToastMessage type="error" message={enrollErorr} />}
      {toastCart.status && (
        <ToastMessage
          title="Thành công!"
          type={toastCart.type}
          message={toastCart.message}
        />
      )}
      <div className="h-[205px] w-full mb-3 md:mb-0 md:w-[319px] overflow-hidden rounded-t-lg relative">
        {course.percent_sale > 0 && (
          <span className=" absolute top-0 bg-orange-400 text-white py-0 px-5 rounded-br-xl">
            {course.percent_sale}%
          </span>
        )}

        <img
          className="w-full h-full object-cover rounded-lg "
          src={
            course.image_url ??
            "https://www.ketchum.edu/sites/default/files/2022-08/First%20%28Top%29%20Image%20.jpeg"
          }
          alt={course.title}
        />
      </div>
      <div className="px-4  flex-1 flex flex-col">
        <div className="flex flex-col gap-0">
          <Link to={"/course/" + course.slug} className="w-fit">
            <h4 className=" h-[54px] line-clamp-2 font-bold text-xl mb-2 w-fit hover:text-primary-600">
              {course.title}
            </h4>
          </Link>
          <div>
            <div className="flex gap-2 items-center">
              <div className="w-[24px] h-[24px] border rounded-full">
                <img
                  className="w-full h-full object-cover rounded-full "
                  src={course.user.avatar_url??"https://imgcdn.stablediffusionweb.com/2024/4/20/79162520-69b0-4eb3-a4ac-11684a88a82e.jpg"}
                  alt=""
                />
              </div>
              <div>{course.user.first_name + " " + course.user.last_name}</div>
            </div>
            {type != "progress" && (
              <div className="flex justify-between text-gray-500 mt-1">
                <div className="flex items-center text-sm gap-2">
                  <div className="flex gap-1">{Stars()}</div>
                  <span>({course.rating})</span>
                </div>
                <div className="flex gap-2 items-center text-sm">
                  <FaUserCheck />
                  <span>{course.enrollment_count}</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <div className="text-gray-500">
            {t('product.duration')}:{" "}
              {course.duration ? formatDuration(+course.duration) : "--"}
            </div>
            <div className="text-gray-500">
            {t('product.lecture')}: {course.total_steps} {t('product.section')}
            </div>
          </div>
          {/* <div className="text-gray-500">Quyền truy cập: <span className="text-gray-700">Doanh nghiệp</span></div> */}
          <div className="pt-1">
            {course.price > 0 ? (
              <div className="flex gap-3 items-center ">
                <span className="font-bold text-primary-500 text-xl">
                  {FormatPrice(course.price)}
                </span>
                <del className="text-gray-500">
                  {FormatPrice(
                    (Math.ceil(course.price) / (100 - course.percent_sale)) *
                      100
                  )}
                </del>
              </div>
            ) : (
              type != "progress" && (
                <div className="font-bold text-green-600">Free</div>
              )
            )}
          </div>
          {type && type == "progress" && (
            <div className="flex items-center gap-4 py-2">
              <div className="w-50 flex-start flex h-2.5  overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
                <div
                  style={{ width: Math.ceil(course.percent_learning) + "%" }}
                  className={`flex items-center justify-center  h-full overflow-hidden text-white break-all bg-primary-500 rounded-full`}
                ></div>
              </div>
              <span className="text-sm font-bold ">
                {Math.ceil(course.percent_learning)}%
              </span>
            </div>
          )}
        </div>
        {!type && (
          <div className="flex-1 flex items-end ">
            {course.price > 0 ? (
              <div className="flex gap-2 w-full">
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
                  className="bg-primary-500 cursor-pointer text-center flex  items-center justify-center px-16 text-white hover:bg-primary-600 md:flex-none flex-1 w-fit rounded-lg"
                >
                  {t('product.buy_now')}
                </button>
              </div>
            ) : enrollSuccess ? (
              <div>
                <Link
                  to={"/learning/" + course.slug}
                  className="border border-primary-500 px-16 text-primary-500 bg-primary-50 hover:bg-primary-100 w-full justify-center py-2 rounded-lg flex gap-2 items-center"
                >
                  <FaArrowRightLong /> {t('product.enrollment')}
                </Link>
              </div>
            ) : isLoading ? (
              <div className=" flex-1 flex items-end">
                <button
                  disabled
                  className="bg-deep-orange-500 flex justify-center w-fit px-16 rounded-lg text-white py-2 hover:bg-deep-orange-600 shadow-sm hover:shadow-none"
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
                <button className="bg-deep-orange-500  px-16 w-full md:w-fit rounded-lg text-white py-2 hover:bg-deep-orange-600 shadow-sm hover:shadow-none">
                {t('product.join')}
                </button>
              </div>
            )}
          </div>
        )}

        {/* button join learing */}
        {user && user.id == currentUser.id && type != "cart" && (
          <div className="flex-1 flex items-end gap-2">
            <Link
              to={"/learning/" + course.slug}
              className="border border-primary-500 text-primary-500 bg-primary-50 hover:bg-primary-100 px-16 py-2 rounded-lg flex gap-2 items-center"
            >
              <FaArrowRightLong /> {t('product.join_learning')}
            </Link>
            {course.percent_learning == 100 && (
              <Link
                to={"/certificate/" + course.slug}
                className="bg-primary-500 text-white hover:bg-primary-600 px-16 py-2 rounded-lg"
              >
               {t('product.certificate')}
              </Link>
            )}
          </div>
        )}
        {/* btn delete cart */}
        {type && type == "cart" && (
          <div className="flex-1 flex justify-end">
            <button
              onClick={handleDeleteCart}
              className="flex gap-2 py-2 px-4 text-red-500 border border-red-500 rounded-lg hover:bg-red-50 items-center"
            >
              <FaRegTrashCan />
              {t('product.delete')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCollectItem;
