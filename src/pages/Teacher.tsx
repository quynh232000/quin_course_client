import {
  FaChevronRight,
  FaFacebookF,
  FaStar,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import i_teach_1 from "../assets/images/teacher_a_1.png";
import i_teach_2 from "../assets/images/teacher_a_2.png";
import i_teach_3 from "../assets/images/teacher_a_3.png";
import i_teach_4 from "../assets/images/teacher_a_4.png";
import { SiZalo } from "react-icons/si";
import ProductItem from "../components/items/ProductItem";
import NewsItem from "../components/items/NewsItem";
// import ReviewItem from "../components/items/ReviewItem";
import i_banner_teacher from "../assets/images/banner_teacher.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  SGetBlogs,
  SGetCourseCollection,
  SGetTeacherInfo,
} from "../services/CommonService";

import {
  MBlog,
  MCourse,
  MSocial,
  MTeacher,
  MTeacherDashboard,
} from "../types/app";
import DefaultSke from "../components/skeleton/DefaultSke";
import { useTranslation } from "react-i18next";
function Teacher() {
  const {t} = useTranslation()
  const { username } = useParams();
  const naviate = useNavigate();

  const [teacher, setTeacher] = useState<MTeacher>();
  const [socials, setSocials] = useState<MSocial[]>();
  const [teacherDashboard, setTeacherDashboard] = useState<MTeacherDashboard>();
  const [courses, setCourses] = useState<MCourse[]>();
  const [blogs, setBlogs] = useState<MBlog[]>();
const [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    if (!username) {
      naviate("/error");
    } else {
      SGetTeacherInfo(username.split("@")[1]).then((res) => {
        setLoading(false)
        if (res.status) {
          setTeacher(res.data);
          setSocials(res.data.socials);
          setTeacherDashboard(res.data.teacher_dashboard);
          // get course same author
          SGetCourseCollection(
            "?limit=8&sort=latest&teacher_id=" + res.data.id
          ).then((res) => {
            if (res.status) {
              setCourses(res.data.courses);
            }
          });
          // get blogs
          SGetBlogs("?limit=4&user_id=" + res.data.id).then((res) => {
            if (res.status) {
              setBlogs(res.data);
            }
          });
        } else {
          naviate("/error");
        }
      });
    }
  }, [username]);
  if(loading){
    return <div className="pb-[32px]">
      <DefaultSke/>
      <DefaultSke/>
    </div>
  }
  return (
    <div className="flex flex-col gap-[72px] pb-[32px] ">
      <div
        className={` text-white bg-[url('${i_banner_teacher}')] bg-contain bg-center  `}
      >
        <div
          className={` w-full px-5 xl:w-content m-auto py-16 flex flex-col md:flex-row gap-5 pl-5`}
          style={{ background: `url(${i_banner_teacher})` }}
        >
          <div className="md:w-[308px] w-full h-[207px] rounded-xl shadow-sm border border-gray-700 ">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={
                teacher?.avatar_url ??
                "https://avatars.githubusercontent.com/u/97020966?v=4"
              }
              alt={teacher?.username}
            />
          </div>
          <div className="flex flex-col items-center md:items-start gap-2 justify-center">
            <h4 className="font-bold text-3xl">
              {teacher?.first_name + " " + teacher?.last_name}{" "}
            </h4>
            <div className="flex items-center gap-2">
              <div className="flex gap-1 text-orange-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span>(5.0)</span>
            </div>
            <span className="">{teacher?.teacher_info.major}</span>
            <div>{teacher?.teacher_info.position ?? "Đang cập nhật"}</div>
            <div className="flex gap-16 items-center mt-5">
              <div className="flex gap-2">
                {socials &&
                  socials.length > 0 &&
                  socials.map((item) => {
                    return (
                      <Link
                      key={item.id}
                        to={item.type == "zalo" ? "tel:" + item.url : item.url}
                        target="__blank"
                        className="border rounded-md p-1"
                      >
                        {item.type == "tiktok" && <FaTiktok />}
                        {item.type == "facebook" && <FaFacebookF />}
                        {item.type == "youtube" && <FaYoutube />}
                        {item.type == "zalo" && <SiZalo />}
                      </Link>
                    );
                  })}
              </div>
              <button className="border py-1 text-sm px-3 rounded-lg flex items-center gap-1">
                <RiMessage3Fill /> {t('teacher.message')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* banner */}
      <div className=" w-full px-5 xl:w-content m-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="border shadow-sm rounded-xl p-3 flex justify-between">
          <div className="w-[78px] h-[78px] rounded-full bg-primary-50 flex items-center p-4 justify-center">
            <img
              src={i_teach_1}
              alt=""
              className="w-full  h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-end gap-1 justify-center">
            <div className="font-bold text-primary-800 text-3xl">
              {teacherDashboard?.count_students}
            </div>
            <div className="text-primary-500 font-bold">{t('teacher.t_student')}</div>
          </div>
        </div>

        <div className="border shadow-sm rounded-xl p-3 flex justify-between">
          <div className="w-[78px] h-[78px] rounded-full bg-primary-50 flex items-center p-4 justify-center">
            <img
              src={i_teach_3}
              alt=""
              className="w-full  h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-end gap-1 justify-center">
            <div className="font-bold text-primary-800 text-3xl">
              {teacherDashboard?.count_courses}
            </div>
            <div className="text-primary-500 font-bold">{t('teacher.t_course')}</div>
          </div>
        </div>
        <div className="border shadow-sm rounded-xl p-3 flex justify-between">
          <div className="w-[78px] h-[78px] rounded-full bg-primary-50 flex items-center p-4 justify-center">
            <img
              src={i_teach_2}
              alt=""
              className="w-full  h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-end gap-1 justify-center">
            <div className="font-bold text-primary-800 text-3xl">--</div>
            <div className="text-primary-500 font-bold">{t('teacher.t_review')}</div>
          </div>
        </div>

        <div className="border shadow-sm rounded-xl p-3 flex justify-between">
          <div className="w-[78px] h-[78px] rounded-full bg-primary-50 flex items-center p-4 justify-center">
            <img
              src={i_teach_4}
              alt=""
              className="w-full  h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-end gap-1 justify-center">
            <div className="font-bold text-primary-800 text-3xl">--</div>
            <div className="text-primary-500 font-bold">{t('teacher.t_company')}</div>
          </div>
        </div>
      </div>
      {/* teacher info */}
      <div className="bg-white">
        <div className=" w-full px-5 xl:w-content m-auto">
          <div className="font-bold text-3xl mb-4">{t('teacher.intro')}</div>
          <div className="flex gap-8">
            <div className="flex-1">
              {teacher?.teacher_info.description ?? "Đang cập nhật..."}
            </div>
            <div className="w-40 hidden md:block">
              <div className="border-2 border-gray-500 bg-primary-100 rounded-lg overflow-hidden p-1">
                {teacher?.thumbnail_url ? (
                  <img width={560} src={teacher?.thumbnail_url} alt="" />
                ) : (
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/wqPLXRtr6zM?si=XdwQ23LTbN46qDRf"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* khoa hoc */}
      <section className=" w-full px-5 xl:w-content m-auto mb-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="font-bold text-3xl">{t('teacher.course')}</div>
          </div>
          <button className="flex items-center text-primary-500 gap-2">
          {t('home.see_all')} <FaChevronRight />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-5">
          {courses && courses.length > 0 ? (
            courses.map((item) => {
              return <ProductItem key={item.id} course={item} />;
            })
          ) : (
            <div className="text-center my-8 text-deep-orange-500 ">
              {t('teacher.no_course')}
            </div>
          )}
        </div>
      </section>
      {/* bang tin */}
      <section className=" w-full px-5 xl:w-content m-auto mb-24">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="font-bold text-3xl">{t('teacher.news')}</div>
          </div>
          <button className="flex items-center text-primary-500 gap-2">
          {t('teacher.see_all')} <FaChevronRight />
          </button>
        </div>
        {blogs && blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
            {blogs.map((item) => {
              return <NewsItem key={item.id} blog={item} />;
            })}
          </div>
        ) : (
          <div className="text-deep-orange-500 text-center py-8">
            {t('teacher.no_news')}
          </div>
        )}
      </section>
      {/* danh gia tac gia */}
      <div className=" w-full px-5 xl:w-content m-auto hidden">
        <div className="font-bold text-3xl mb-4">
          Xếp hạng của giảng viên Mr Quynh
        </div>
        <div className="bg-gray-50 p-4 rounded-lg flex gap-8">
          <div className="flex flex-col gap-5 text-center w-fit py-2">
            <div className="text-2xl font-bold text-gray-400  gap-2 text-center flex justify-center">
              <span className="text-orange-500">4,8</span>/<span>5,0</span>
            </div>
            <div className="flex text-gray-300 gap-2 text-2xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="flex-1 relative">
            <textarea
              className="w-full p-3 h-full border rounded-lg"
              name=""
              id=""
              placeholder="Đánh giá giảng viên"
            ></textarea>
            {/* <button className=" absolute top-[10px] right-[10px] bg-primary-500 text-white rounded-lg px-4 py-1 hover:bg-primary-600">
              Gửi đánh giá
            </button> */}
          </div>
        </div>
        <div className="py-5">
          <div className=" grid grid-cols-2 gap-5">
            {/* <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem /> */}
          </div>
          {/* <div className="mt-5">
            <button className="border px-5 py-2 rounded-lg font-bold shadow-sm text-gray-700 hover:bg-gray-100">
              Hiện tất cả (325) đánh giá
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Teacher;
