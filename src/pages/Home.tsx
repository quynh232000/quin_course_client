import { Carousel } from "@material-tailwind/react";
import logowhite from "../assets/logo/logo-white-text.png";
import { FaAnglesRight } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import ProductItem from "../components/items/ProductItem";
import i_sale from "../assets/banner/sale.png";
import i_teacher from "../assets/images/ads_teacher.png";
import i_business from "../assets/images/ads_business.png";
import i_ketnoi from "../assets/images/ketnoi.png";
import i_kynang from "../assets/images/kynang.png";
import TeacherItem from "../components/items/TeacherItem";
import TopicHomeItem from "../components/items/TopicHomeItem";
import NewsItem from "./../components/items/NewsItem";
import { useEffect, useState } from "react";
import {
  MBanner,
  MBlog,
  MCategory,
  MCourse,
  MTeacher,
  MVoucher,
} from "../types/app";
import {
  SGetBanners,
  SGetBlogs,
  SGetCourses,
  SGetTeachers,
  SGetVouchers,
} from "../services/CommonService";
import { GetCategoryById } from "../services/CategorySevice";
import { FormatDate, FormatPrice } from "../components/functions/tool";
import CourseSkeleton from "../components/skeleton/CourseSkeleton";
import TeacherSkeleton from "../components/skeleton/TeacherSkeleton";
import TopicSke from "../components/skeleton/TopicSke";
import NewsSke from "../components/skeleton/NewsSke";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [banners, setBanners] = useState<MBanner[] | null>(null);
  const [vouchers, setVouchers] = useState<MVoucher[] | null>(null);
  const [courseFee, setCourseFree] = useState<MCourse[] | null>(null);
  const [courseSale, setCourseSale] = useState<MCourse[] | null>(null);
  const [coursePolular, setCoursePolular] = useState<MCourse[] | null>(null);
  const [teachers, setTeachers] = useState<MTeacher[] | null>(null);
  const [cates, setCates] = useState<MCategory[] | null>(null);
  const [blogs, setBlogs] = useState<MBlog[] | null>(null);

  // const [l_slider, setL_slider] = useState(true);
  const [l_free, setL_free] = useState(true);
  // const [l_voucher, setL_voucher] = useState(true);
  const [l_sale, setL_sale] = useState(true);
  const [l_popular, setL_popular] = useState(true);
  const [l_news, setL_news] = useState(true);
  const [l_topic, setL_topic] = useState(true);
  const [l_teacher, setL_teacher] = useState(true);

  useEffect(() => {
    document.title="Home - Quin Course"
    SGetBanners("?placement=home&type=slider").then((res) => {
      // setL_slider(false);
      if (res.status) {
        setBanners(res.data);
      }
    });
    SGetVouchers("?limit=3").then((res) => {
      // setL_voucher(false);
      if (res.status) {
        setVouchers(res.data);
      }
    });
    SGetCourses("?type=free&limit=8").then((res) => {
      setL_free(false);
      if (res.status) {
        setCourseFree(res.data);
      }
    });
    SGetCourses("?type=sale&limit=3").then((res) => {
      setL_sale(false);
      if (res.status) {
        setCourseSale(res.data);
      }
    });
    SGetCourses("?type=popular&limit=8").then((res) => {
      setL_popular(false);
      if (res.status) {
        setCoursePolular(res.data);
      }
    });
    SGetTeachers("?limit=5").then((res) => {
      setL_teacher(false);
      if (res.status) {
        setTeachers(res.data);
      }
    });
    GetCategoryById(0, "?limit=6").then((res) => {
      setL_topic(false);
      if (res.status) {
        setCates(res.data);
      }
    });
    SGetBlogs("?limit=4").then((res) => {
      setL_news(false);
      if (res.status) {
        setBlogs(res.data);
      }
    });
  }, []);
const {t} = useTranslation()
  return (
    <div className="flex flex-col gap-[72px] py-[32px] ">
      <section className=" w-full px-5 xl:w-content m-auto">
        <div className="w-full hidden md:block">
          <Carousel
            className="rounded-xl bg-primary-500"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {banners ? (
              banners.map((item) => {
                return (
                  <div className=" relative " key={item.id}>
                    <img
                      src={item.banner_url}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                    <div className=" absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-col">
                      <div>
                        <img width={54} src={logowhite} alt="" />
                      </div>
                      <div className=" w-60 text-white px-[72px] mt-2 flex flex-col flex-1">
                        <div>
                          <h3 className=" uppercase font-bold text-[30px]">
                            {item.title}
                          </h3>
                          <span className="text-gray-300 line-clamp-2">
                            {item.description}
                          </span>
                        </div>
                        <div className="flex-1 flex items-center ">
                          <button className="flex items-center gap-2 border border-primary-500 rounded-lg py-2 px-4 bg-white text-primary-500 font-bold shadow-lg">
                            <span>
                              <FaAnglesRight />
                            </span>
                            {t('home.buy_course')}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div></div>
            )}
          </Carousel>
        </div>
        {vouchers && vouchers.length > 0 && (
          <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {vouchers.map((item) => {
              return (
                <div
                  className="border cursor-pointer hover:border-primary-500 p-3 rounded-lg"
                  key={item.id}
                >
                  <div className="flex justify-between items-center">
                    <div className="font-bold">{item.title}</div>
                    <div>
                    {t('home.code')}:
                      <span className="text-primary-500 font-bold">
                        {item.code}
                      </span>
                    </div>
                  </div>
                  <div className="my-1">
                  {t('home.order_min')}:
                    <span className="text-primary-600">{FormatPrice(item.min_price)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                    {t('home.hsd')}: <span>{FormatDate(item.date_end)}</span>
                    </div>
                    <button disabled className="bg-primary-300 cursor-not-allowed rounded-md text-sm py-0 px-4 text-white">
                    {t('home.save')}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
      {/* kh free */}
      <section className="w-full px-5 xl:w-content m-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="font-bold text-2xl lg:text-3xl">{t('home.free')}</div>
            <span className="bg-green-500 hidden md:block h-fit text-white text-sm py-1 px-4 rounded-tl-2xl rounded-br-2xl">
            {t('home.label_free')}
            </span>
          </div>
          <button className="flex items-center text-primary-500 gap-2">
          {t('home.see_all')}<FaChevronRight />
          </button>
        </div>
        {l_free ? (
          <div className="grid grid-cols-4 gap-3 mt-5">
            <CourseSkeleton />
            <CourseSkeleton />
            <CourseSkeleton />
            <CourseSkeleton />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-5">
            {courseFee &&
              courseFee.length > 0 &&
              courseFee.map((item) => {
                return <ProductItem key={item.id} course={item} />;
              })}
          </div>
        )}
      </section>
      {/* kh sale */}
      <section className="w-full px-5 xl:w-content m-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="font-bold text-2xl md:text-3xl">{t('home.sale')}</div>
          </div>
          <button className="flex items-center text-primary-500 gap-2">
          {t('home.see_all')} <FaChevronRight />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-5">
          <div className="border rounded-lg shadow-sm flex justify-center items-center ">
            <img
              className="w-full object-cover h-full rounded-lg"
              src={i_sale}
              alt=""
            />
          </div>
          {l_sale ? (
            <CourseSkeleton />
          ) : (
            courseSale &&
            courseSale.length > 0 &&
            courseSale.map((item) => {
              return <ProductItem key={item.id} course={item} />;
            })
          )}
        </div>
      </section>
      {/* kh popular */}
      <section className="w-full px-5 xl:w-content m-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="font-bold text-2xl md:text-3xl">{t('home.popular')}</div>
            
          </div>
          <button className="flex items-center text-primary-500 gap-2">
          {t('home.see_all')}<FaChevronRight />
          </button>
        </div>
        {l_popular ? (
          <div className="grid grid-cols-4 gap-3 mt-5">
            <CourseSkeleton />
            <CourseSkeleton />
            <CourseSkeleton />
            <CourseSkeleton />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-5">
            {coursePolular &&
              coursePolular.length > 0 &&
              coursePolular.map((item) => {
                return <ProductItem key={item.id} course={item} />;
              })}
          </div>
        )}
      </section>

      {/* become teacher */}
      <section className="bg-primary-50 py-5">
        <div className="w-full px-5 xl:w-content m-auto grid grid-cols-1 lg:grid-cols-2">
          <div className=" hidden lg:block">
            <img
              className="w-full h-full object-cover"
              src={i_teacher}
              alt=""
            />
          </div>
          <div className="p-5 ">
            <div className=" uppercase text-4xl font-bold">
            {t('home.become')} <span className="text-primary-500">{t('home.teacher')}</span>{" "}
            {t('home.on_quin')}
            </div>
            <span className="pt-2">
            {t('home.teacher_content')}
            </span>
            <div className="my-5 flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <div>
                  <img width={65} src={i_ketnoi} alt="" />
                </div>
                <div>
                  <div className="font-bold mb-1">
                    {t('home.t_share')}
                  </div>
                  <span>
                    {t('home.t_connect')}
                  </span>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div>
                  <img width={65} src={i_kynang} alt="" />
                </div>
                <div>
                  <div className="font-bold mb-1"> {t('home.t_complete')}</div>
                  <span>
                  {t('home.t_complete_1')}
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-3">
              <button className="bg-primary-500 text-white py-2 px-24 rounded-lg hover:bg-primary-600">
              {t('home.register_now')}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* teacher */}
      <section className="w-full px-5 xl:w-content m-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="font-bold text-2xl md:text-3xl"> {t('home.famous_teacher')}</div>
          </div>
          <button className="flex items-center text-primary-500 gap-2">
          {t('home.see_all')}<FaChevronRight />
          </button>
        </div>
        {l_teacher ? (
          <div className="grid grid-cols-5 gap-3 mt-5">
            <TeacherSkeleton />
            <TeacherSkeleton />
            <TeacherSkeleton />
          </div>
        ) : (
          <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-5">
            {teachers &&
              teachers.length > 0 &&
              teachers.map((item) => {
                return <TeacherItem key={item.id} teacher={item} />;
              })}
          </div>
        )}
      </section>
      {/* chu de quan tam */}
      <section className="w-full px-5 xl:w-content m-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="font-bold text-2xl md:text-3xl"> {t('home.topic')}</div>
          </div>
          <button className="flex items-center text-primary-500 gap-2">
          {t('home.see_all')}<FaChevronRight />
          </button>
        </div>
        {l_topic ? (
          <div className="grid grid-cols-6 gap-3 mt-5">
            <TopicSke />
            <TopicSke />
            <TopicSke />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3 mt-5">
            {cates &&
              cates.length > 0 &&
              cates.map((item) => {
                return <TopicHomeItem key={item.id} category={item} />;
              })}
          </div>
        )}
      </section>
      {/* tin tuc */}
      <section className="w-full px-5 xl:w-content m-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="font-bold text-2xl md:text-3xl"> {t('home.news')}</div>
          </div>
          <Link to={'/blogs'} className="flex items-center text-primary-500 gap-2">
          {t('home.see_all')}<FaChevronRight />
          </Link>
        </div>
        {l_news ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5">
            <NewsSke />
            <NewsSke />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5">
            {blogs &&
              blogs.length > 0 &&
              blogs.map((item) => {
                return <NewsItem key={item.id} blog={item} />;
              })}
          </div>
        )}
      </section>

      {/* become business */}
      <section className="bg-primary-50 py-5">
        <div className="w-full px-5 xl:w-content m-auto grid md:grid-cols-2 grid-cols-1">
          <div className="p-5">
            <div className=" uppercase text-4xl font-bold">
            {t('home.learn_with')}
              <span className="text-primary-500"> {t('home.bussiness')}</span>
              {t('home.on_quin')}
            </div>
            <div className="mt-2">
            {t('home.nangcao')}
            </div>
            <div className="mt-4 w-full">
              <div className="font-bold mb-2 pt-2"> {t('home.enter_email')}</div>
              <div className="flex  gap-5 ">
                <div className="flex-1 rounded-lg">
                  <input
                    type="text"
                    placeholder={t('home.enter_email')}
                    className="w-full py-2 px-3 rounded-lg"
                  />
                </div>
                <div className=" bg-primary-500 text-white py-2 px-8 rounded-lg">
                {t('home.send')}
                </div>
              </div>
            </div>
          </div>
          <div className=" hidden md:block">
            <img
              className="w-full h-full object-cover"
              src={i_business}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
