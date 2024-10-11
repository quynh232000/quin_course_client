import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FaAngleDown, FaChevronRight, FaStar } from "react-icons/fa";
import { FaArrowRightLong, FaCirclePlay, FaPeopleGroup } from "react-icons/fa6";
// import { IoIosSend } from "react-icons/io";
import { MdOndemandVideo, MdOutlineQuiz } from "react-icons/md";
import ReviewItem from "../components/items/ReviewItem";
import ProductItem from "../components/items/ProductItem";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  MCategory,
  MCourse,
  MIntend,
  MReview,
  MSection,
  MTeacher,
  MTeacherDashboard,
  MyReview,
} from "../types/app";
import {
  SAddCart,
  SEnrollCourse,
  SGetCourseCollection,
  SGetCourseSlug,
  SSendReviewCourse,
} from "../services/CommonService";
import { formatDuration, FormatPrice } from "../components/functions/tool";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/reducers/appReducer";
import { RootState } from "../redux/reducers";
import ToastMessage from "../components/compoment/ToastMessage";
import DefaultSke from "../components/skeleton/DefaultSke";
import { useTranslation } from "react-i18next";

function Detail() {
  const {t} = useTranslation()
  const navigate = useNavigate();
  const [open, setOpen] = useState(1);
  const { slug } = useParams();
  const [course, setCourse] = useState<MCourse>();
  const [categories, setCategories] = useState<MCategory[]>([]);
  const [currentCate, setCurrentCate] = useState<MCategory>();
  const [teacher, setTeacher] = useState<MTeacher>();
  const [sections, setSections] = useState<MSection[]>([]);
  const [reviews, setReviews] = useState<MReview[]>([]);
  const [intends, setIntends] = useState<MIntend[]>([]);
  const [courseSameAuthor, setCourseSameAuthor] = useState<MCourse[]>([]);
  const [teacherDashboard, setTeacherDashboard] = useState<MTeacherDashboard>();
  const [isLoading, setIsLoading] = useState(false);
  const [myRview, setMyReview] = useState<MyReview | null>(null);
  const [levelStar, setLevelStar] = useState(0);
  const [reviewCmt, setReviewCmt] = useState("");
  const [isLoadingReview, setIsLoadingReview] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (slug) {
      SGetCourseSlug(slug).then((res) => {
        setIsLoading(false);

        if (res.status) {
          document.title = res.data.course.title;
          setCourse(res.data.course);
          setCurrentCate(res.data.course.category);
          setCategories(res.data.course.category.parent);
          setTeacher(res.data.course.user);
          setSections(res.data.course.sections);
          setReviews(res.data.course.reviews);
          setIntends(res.data.course.intends);
          setTeacherDashboard(res.data.teacher_dashboard);
          setMyReview(res.data.my_review);
          if (res.data.my_review.review) {
            setLevelStar(res.data.my_review.review.rating);
            setReviewCmt(res.data.my_review.review.content);
          }
          // get course same author
          SGetCourseCollection(
            `?limit=8&sort=latest&teacher_id=${res?.data?.course?.user?.id}`
          ).then((res) => {
            if (res.status) {
              setCourseSameAuthor(res.data.courses);
            }
          });
        } else {
          navigate("/error");
        }
      });
    } else {
      navigate("/error");
    }
  }, [slug]);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  // handle add or buy or enroll course
  const { isLogin } = useSelector((state: RootState) => state.authReducer);

  const [enrollSuccess, setEnrollSuccess] = useState(false);
  const [enrollErorr, setEnrollError] = useState("");
  const [toastCart, setToastCart] = useState<{
    status: boolean;
    type: "success" | "info" | "warning" | "error";
    message: string;
  }>({ status: false, type: "error", message: "" });
  const [btnAddCart, setBtnAddCart] = useState({ add: false, buynow: false });

  const handleEnroll = () => {
    if (isLogin && course) {
      SEnrollCourse(course.id).then((res) => {
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
    if (isLogin && course) {
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
  const handleSubmitReview = () => {
    if (levelStar == 0 || reviewCmt == "") {
      alert("Vui lòng đánh giá sao!");
      return;
    }
    if (reviewCmt == "") {
      alert("Vui lòng điền đầy đủ thông tin đánh giá!");
      return;
    }
    setIsLoadingReview(true);
    if (course) {
      SSendReviewCourse(course?.id, reviewCmt, levelStar).then((res) => {
        setIsLoadingReview(false);
        if (res.status && myRview) {
          if (myRview.review == null) {
            setReviews([res.data, ...reviews]);
          } else {
            const updateReview= reviews.map((item) => {
              if (item.id == res.data.id) {
                item = { ...res.data };
              }
              return item;
            });
            setReviews(updateReview);
          }
        }
      });
    }
  };
  return isLoading ? (
    <div className="w-full px-5 xl:w-content m-auto">
      <DefaultSke />
      <DefaultSke />
    </div>
  ) : (
    <div className="flex flex-col gap-[72px] pb-[32px] ">
      {enrollErorr && <ToastMessage type="error" message={enrollErorr} />}
      {toastCart.status && (
        <ToastMessage
          title="Thành công!"
          type={toastCart.type}
          message={toastCart.message}
        />
      )}
      <div className="bg-primary-900 w-full text-white">
        <div className="w-full px-5 xl:w-content m-auto py-16 flex md:flex-row flex-col">
          <div className="w-full pb-5 md:pb-0 md:w-60">
            <div className="flex items-center gap-2 text-gray-300">
              {categories &&
                categories.length > 0 &&
                categories.map((item) => {
                  return (
                    <Link
                      to={"/collection/" + item.slug}
                      className="flex items-center gap-2"
                      key={item.id}
                    >
                      <div className="w-fit">{item.name}</div>
                      <span>
                        <FaChevronRight />
                      </span>
                    </Link>
                  );
                })}

              <Link to={"/collection/" + currentCate?.slug} className="w-fit">
                {currentCate?.name}
              </Link>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <h2 className="font-bold uppercase text-4xl">{course?.title}</h2>
              <p className="text-gray-100">{course?.sub_title}</p>
              <div className="flex items-center gap-4 mt-2">
                <div className="border border-white bg-[#2e81e0] px-4 py-1 text-sm rounded-md">
                {t('detail.certificate')}
                </div>
                <div className="text-primary-300">(52 {t('detail.review')})</div>
                <div>{course?.enrollment_count} {t('detail.student')}</div>
              </div>
              <div className="flex items-center gap-2 py-3">
              {t('detail.teach_by')}:
                <span className="flex items-center gap-1 text-primary-300">
                {t('detail.teacher')}:
                  <Link to={"/teacher/@" + teacher?.username}>
                    <strong className=" uppercase underline">
                      {teacher?.first_name + " " + teacher?.last_name}
                    </strong>
                  </Link>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MdOndemandVideo /> {t('detail.duration')}:
                <span className="text-primary-300">
                  {formatDuration(course?.duration ? +course?.duration : 0)}{" "}
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="border-2 rounded-xl overflow-hidden ">
              {course && course.video_type == "youtube" ? (
                <iframe
                  width="418"
                  height="215"
                  src={
                    course.video_url ??
                    "https://www.youtube.com/embed/KnxN-Um5p7c?si=ZZwotaK18VkbTSil"
                  }
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              ) : (
                <video src={course?.video_url}></video>
              )}
              <div className="p-3 bg-gray-100 text-dark border-t border-gray-300">
                {course?.price && course?.price > 0 ? (
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-2xl">
                      {FormatPrice(course?.price ? +course?.price : 0)}
                    </div>
                    <del className="text-gray-600">
                      {FormatPrice(
                        Math.ceil(
                          (course.price / (100 - course.percent_sale)) * 100
                        )
                      )}
                    </del>
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-green-600 my-2">Free</span>
                  </div>
                )}

                {course && course.price > 0 ? (
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleCart("buynow")}
                      className="bg-primary-500 text-center flex-1 hover:bg-primary-600 text-white py-2 rounded-lg"
                    >
                      {t('detail.buy_now')}
                    </button>
                    <button
                      onClick={() => handleCart("addcart")}
                      className="border-primary-500 border  flex-1 text-center text-primary-500 hover:bg-primary-50 py-2 rounded-lg"
                    >
                      {t('detail.add_cart')}
                    </button>
                  </div>
                ) : course?.isEnrollment ? (
                  <div>
                    <Link
                      to={"/learning/" + course?.slug}
                      className="border border-primary-500 text-primary-500 bg-primary-50 hover:bg-primary-100 w-full justify-center py-2 rounded-lg flex gap-2 items-center"
                    >
                      <FaArrowRightLong /> {t('detail.join')}
                    </Link>
                  </div>
                ) : enrollSuccess ? (
                  <div>
                    <Link
                      to={"/learning/" + course?.slug}
                      className="border border-primary-500 text-primary-500 bg-primary-50 hover:bg-primary-100 w-full justify-center py-2 rounded-lg flex gap-2 items-center"
                    >
                      <FaArrowRightLong /> {t('detail.join')}
                    </Link>
                  </div>
                ) : (
                  <div className="flex gap-4" onClick={handleEnroll}>
                    <button className="bg-deep-orange-500 w-full rounded-lg text-white py-2 hover:bg-deep-orange-600 shadow-sm hover:shadow-none">
                    {t('detail.enrollment')}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* giang vien */}
      <div className="w-full px-5 xl:w-content m-auto">
        <div className="font-bold text-3xl mb-4">{t('detail.teacher_infor')}</div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-fit w-full">
            <div className="md:w-[420px] w-full h-[274px] border rounded-xl">
              <img
                className="w-full h-full rounded-xl object-cover"
                src={
                  teacher?.avatar_url ??
                  "https://cdn.pixabay.com/photo/2020/03/17/12/01/vietnam-4940056_640.jpg"
                }
                alt=""
              />
            </div>
            <div className="text-center ">
              <h4 className=" uppercase font-bold text-primary-600 my-3">
                {teacher?.first_name + "" + teacher?.last_name}
              </h4>
              <div>{teacher?.teacher_info.major ?? "--"}</div>
              <div>{teacher?.teacher_info.position ?? "Cập nhật"}</div>
            </div>
          </div>
          <div className="flex-1">
            <div className=" gap-5 flex  border-b pb-2 font-[600]">
              {/* <div>
                <div className="flex items-center gap-2">
                  <FaStar />
                  4,6 xếp hạng giảng viên
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <IoIosSend />
                  92 đánh giá
                </div>
              </div> */}
              <div>
                <div className="flex items-center gap-2">
                  <FaPeopleGroup className="text-primary-500" />
                  {teacherDashboard && teacherDashboard.count_students} {t('detail.student')}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <FaCirclePlay className="text-primary-500" />{" "}
                  {teacherDashboard && teacherDashboard.count_courses} {t('detail.course')}
                </div>
              </div>
            </div>
            <div>
              <ul className="my-2 line-clamp-[10]">
                {teacher?.teacher_info.description ?? "--Đang cập nhật--"}
              </ul>
              <div className="mt-5">
                {/* <button className="border py-2 px-5 rounded-lg font-bold text-gray-600">
                  Xem thêm
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="bg-white">
        <div className="w-full px-5 xl:w-content m-auto">
          <div className="font-bold text-3xl mb-4">{t('detail.content')}</div>
          <div className="flex gap-2 items-center">
            <span>{sections.length} {t('detail.part')}</span>
            <span className="w-[10px] h-[10px] rounded-full bg-gray-500"></span>
            <span>{course?.total_steps ?? 0} {t('detail.video')}</span>
            <span className="w-[10px] h-[10px] rounded-full bg-gray-500"></span>
            <span>
              {formatDuration(course?.duration ? +course?.duration : 0)}
            </span>
          </div>
          <div className="py-5 flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-65">
              <div className="border border-gray-300">
                {sections &&
                  sections.length > 0 &&
                  sections.map((item) => {
                    return (
                      <Accordion
                        open={open === item.id}
                        className=""
                        key={item.id}
                      >
                        <AccordionHeader
                          onClick={() => handleOpen(item.id)}
                          className="border-b"
                        >
                          <div className="w-full px-3">
                            <div className="flex justify-between font-bold text-[16px]">
                              <div className="flex items-center gap-2 flex-1">
                                <div>
                                  <FaAngleDown />
                                </div>
                                <div className=" line-clamp-1">
                                  {item.title}
                                </div>
                              </div>
                              <div className="flex items-center gap-2 font-light">
                                <div>{item.steps.length} {t('detail.video')}</div>
                                <div className="w-[8px] h-[8px] bg-gray-300 rounded-full"></div>
                              </div>
                            </div>
                            <div className="text-[12px] px-5 mt-1 flex gap-1">
                              <span>0/{item.steps.length}</span>
                              <span>|</span>
                              <span>
                                {formatDuration(item.duration, false)}
                              </span>
                            </div>
                          </div>
                        </AccordionHeader>
                        <AccordionBody>
                          <div className="flex flex-col gap-4 ">
                            {item.steps.length > 0 ? (
                              item.steps.map((step) => {
                                return (
                                  <div
                                    key={step.id}
                                    className="px-7 py-0 flex justify-between items-center"
                                  >
                                    <div className="flex items-center gap-2">
                                      <div className=" min-w-[20px] text-lg">
                                        {step.type == "lecture" && (
                                          <MdOndemandVideo />
                                        )}
                                        {step.type == "quiz" && (
                                          <MdOutlineQuiz />
                                        )}
                                      </div>
                                      <span>{step.title}</span>
                                    </div>
                                    <div className="flex gap-5">
                                      <div className="text-primary-500"></div>
                                      <span>
                                        {formatDuration(step.duration, false)}
                                      </span>
                                    </div>
                                  </div>
                                );
                              })
                            ) : (
                              <div className="text-center text-primary-300 ">
                                -- {t('home.updating')} --
                              </div>
                            )}
                          </div>
                        </AccordionBody>
                      </Accordion>
                    );
                  })}
              </div>
            </div>
            <div className="flex-1 bg-gray-50 border rounded-lg p-5 shadow-sm h-fit">
              <div className="font-bold text-xl">{t('detail.what_learn')}</div>
              <div className="mt-5 flex flex-col gap-3">
                {intends &&
                  intends
                    .filter((i) => i.type == "whatlearn")
                    .map((item) => {
                      return (
                        <div className="flex  gap-2" key={item.id}>
                          <CiCircleCheck className="text-2xl" />
                          <div className="flex-1">{item.content}.</div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* décription */}
      <div className="w-full px-5 xl:w-content m-auto">
        <div className="font-bold text-3xl mb-4">{t('detail.des')}</div>

        <div className="my-5 flex flex-col md:flex-row gap-4 ">
          <div
            className="w-full md:w-65 border rounded-lg shadow-sm p-5 h-fit max-h-[360px] overflow-hidden relative"
            dangerouslySetInnerHTML={{ __html: course?.description ?? "" }}
          >
            {/* <div>
              <button>Xem thêm</button>
            </div> */}
          </div>
          <div className="flex-1 border rounded-lg shadow-sm p-5 ">
            <div className="font-bold text-xl">{t('detail.require')}</div>
            <div>
              <ul className=" py-4 flex flex-col gap-2 ">
                {intends &&
                  intends
                    .filter((i) => i.type == "require")
                    .map((item) => {
                      return <li key={item.id}>{item.content}</li>;
                    })}
              </ul>
            </div>

            <div className="font-bold text-xl">{t('detail.who')}</div>
            <div>
              <ul className=" py-4 flex flex-col gap-2 ">
                {intends &&
                  intends
                    .filter((i) => i.type == "whofor")
                    .map((item) => {
                      return <li key={item.id}>{item.content}</li>;
                    })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* review */}

      <div className="w-full px-5 xl:w-content m-auto">
        <div className="font-bold text-3xl mb-4">{t('detail.rank')}</div>
        {myRview && (
          <div className="bg-gray-50 p-4 rounded-lg flex flex-col md:flex-row  gap-8">
            <div className="flex flex-col items-center   gap-5 text-center w-full md:w-fit py-2">
              <div className="text-2xl font-bold text-gray-400  gap-2 text-center flex justify-center">
                <span className="text-orange-500">
                  {course?.rating
                    ? course?.rating % course?.rating > 0
                      ? course?.rating
                      : course?.rating + ".0"
                    : "0.0"}
                </span>
                /<span>5,0</span>
              </div>
              <div className="flex text-gray-300 gap-2 text-2xl">
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar
                    onClick={() => setLevelStar(index + 1)}
                    className={
                      " cursor-pointer " +
                      (index < levelStar ? "text-orange-500" : "")
                    }
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
              <textarea
                className="w-full p-3 h-full border rounded-lg"
                name=""
                id=""
                value={reviewCmt}
                onChange={(e) => setReviewCmt(e.target.value)}
                placeholder="Đánh giá khóa học"
              ></textarea>
              {myRview.is_log &&
                myRview.can_review &&
                (isLoadingReview ? (
                  <button className=" absolute top-[10px] right-[10px] bg-primary-300 cursor-not-allowed text-white rounded-lg px-4 py-1 ">
                    {t('detail.send')}
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitReview}
                    className=" absolute top-[10px] right-[10px] bg-primary-500 text-white rounded-lg px-4 py-1 hover:bg-primary-600"
                  >
                   {t('detail.send')}
                  </button>
                ))}
            </div>
          </div>
        )}
        <div className="py-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            {reviews && reviews.length > 0 ? (
              reviews.map((item) => {
                return <ReviewItem key={item.id} review={item} />;
              })
            ) : (
              <div> {t('detail.no_review')}</div>
            )}
          </div>
          {reviews && (+reviews.length  > 4) && (
            <div className="mt-5">
              <button className="border px-5 py-2 rounded-lg font-bold shadow-sm text-gray-700 hover:bg-gray-100">
              {t('detail.see_all')} ({reviews.length - 4}) {t('detail.t')}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* kh cua tac gia */}
      <section className="w-full px-5 xl:w-content m-auto mb-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="font-bold text-2xl md:text-3xl">{t('detail.my_course')} Mr Quynh</div>
          </div>
          <button className="flex items-center text-primary-500 gap-2">
          {t('home.see_all')} <FaChevronRight />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-5">
          {courseSameAuthor && courseSameAuthor.length > 0 ? (
            courseSameAuthor.map((item) => {
              return <ProductItem key={item.id} course={item} />;
            })
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  );
}

export default Detail;
