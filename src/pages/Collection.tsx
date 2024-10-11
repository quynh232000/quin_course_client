// import { FaChevronDown, FaChevronRight, FaFilter } from "react-icons/fa";
import ProductItem from "../components/items/ProductItem";
import TeacherItem from "../components/items/TeacherItem";
import { IoMdInformationCircle } from "react-icons/io";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import ProductCollectItem from "../components/items/ProductCollectItem";
import { useEffect, useState } from "react";
import { MCategory, MCourse, MLevel, MTeacher } from "../types/app";
import {
  SGetCourseCollection,
  SGetLevels,
  SGetTeachers,
} from "../services/CommonService";
import { useLocation, useParams } from "react-router-dom";
import i_notfund from "../assets/icons/notfund.png";
import CourseSkeleton from "../components/skeleton/CourseSkeleton";
import TeacherSkeleton from "../components/skeleton/TeacherSkeleton";
import CourseCollectionSke from "../components/skeleton/CourseCollectionSke";
import { Option, Select } from "@material-tailwind/react";
import { GrPowerReset } from "react-icons/gr";
import { useTranslation } from "react-i18next";

const data_duration = [
  { id: 1, name: "0-1 tiếng", value: "extraShort" },
  { id: 2, name: "1-3 tiếng", value: "short" },
  { id: 3, name: "3-6 tiếng", value: "medium" },
  { id: 4, name: "7-17 tiếng", value: "long" },
  { id: 5, name: "17+ tiếng", value: "extraLong" },
];
const data_star = [
  { id: 1, value: 4.5, name: "4.5" },
  { id: 2, value: 4.0, name: "4.0" },
  { id: 3, value: 3.5, name: "3.5" },
  { id: 4, value: 3.0, name: "3.0" },
];
function Collection() {
  const {t} = useTranslation()
  const [teachers, setTeachers] = useState<MTeacher[]>([]);
  const [courseFee, setCourseFee] = useState<MCourse[]>([]);
  const [courses, setCourses] = useState<MCourse[]>([]);
  const [levels, setLevels] = useState<MLevel[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [countItems, setCountItems] = useState(0);
  const [cateInfo, setCateInfo] = useState<MCategory | null>();
  const [freeType, setFreeType] = useState("popularity");
  const [sortBy, setSortBy] = useState<string | null>();
  const [level, setLevel] = useState<number | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [typePrice, setTypePrice] = useState<string | null>(null);
  const [star, setStar] = useState<number | null>(null);

  const [loadFree, setLoadFree] = useState(true);
  const [loadTeach, setLoadTeach] = useState(true);
  const [loadColec, setLoadColec] = useState(true);
  useEffect(() => {
    SGetTeachers("?limit=5").then((res) => {
      setLoadTeach(false);
      if (res.status) {
        setTeachers(res.data);
      }
    });

    SGetLevels().then((res) => {
      if (res.status) {
        setLevels(res.data);
      }
    });
  }, []);
  useEffect(() => {
    setLoadFree(true);
    SGetCourseCollection("?type=free&limit=4&sort=" + freeType).then((res) => {
      setLoadFree(false);
      if (res.status) {
        setCourseFee(res.data.courses);
      }
    });
  }, [freeType]);

  const { slug } = useParams();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("q");
  useEffect(() => {
    setLoadColec(true);
    const f_level = level ? "&level=" + level : "";
    const f_duration = duration ? "&duration=" + duration : "";
    const f_typePrice = typePrice ? "&type=" + typePrice : "";
    const f_star = star ? "&star=" + star : "";
    const f_sort = sortBy ? "&sort=" + sortBy : "";
    const f_slug = slug ? "&slug_cate=" + slug : "";
    const f_search = search ? "&search=" + search : "";
    SGetCourseCollection(
      `?limit=4&page=${currentPage}${f_slug}${f_sort}${f_level}${f_duration}${f_typePrice}${f_star}${f_search}`
    ).then((res) => {
      setLoadColec(false);
      if (res.status) {
        setCourses(res.data.courses);
        setCateInfo(res.data.category);
        setTotalPage(Math.ceil(res.meta.total / res.meta.per_page));
        setCountItems(res.meta.total);
        let title = "Tất cả khóa học"
        if(res.data.category?.name) title = res.data.category?.name
        if(search) title ='Tìm kiếm "'+search+'"'
        document.title =title   ;
      }
    });
  }, [slug, currentPage, sortBy, level, duration, typePrice, star,search]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPage) {
      setCurrentPage(page);
    }
  };
  const resetFilter=()=>{
    setLevel(null);
    setDuration(null);
    setTypePrice(null);
    setStar(null);
    setCurrentPage(1);
    setSortBy(null);
  }

  return (
    <div className="">
      <div className="w-full px-5 xl:px-0 xl:w-content m-auto flex flex-col gap-[72px] py-[32px] ">
        {/* kh free */}
        <section className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="font-bold text-3xl">{t('collection.free')}</div>
            </div>
          </div>
          <div className="border-b flex">
            <button
              onClick={() => setFreeType("popularity")}
              className={
                (freeType == "popularity"
                  ? "text-primary-500 border-primary-500 "
                  : "border-transparent ") +
                "py-2 px-8 hover:bg-primary-50  border-b-2  w-fit"
              }
            >
              {t('collection.popular')}
            </button>
            <button
              onClick={() => setFreeType("latest")}
              className={
                (freeType == "latest"
                  ? "text-primary-500 border-primary-500 "
                  : "border-transparent ") +
                "py-2 px-8 hover:bg-primary-50  border-b-2  w-fit"
              }
            >
              {t('collection.newest')}
            </button>
          </div>
          {loadFree ? (
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
        {/* teacher */}
        <section className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="font-bold text-2xl md:text-3xl">{t('collection.teacher')}</div>
            </div>
            {/* <button className="flex items-center text-primary-500 gap-2">
              Xem tất cả <FaChevronRight />
            </button> */}
          </div>
          {loadTeach ? (
            <div className="grid grid-cols-5 gap-3 mt-5">
              <TeacherSkeleton />
              <TeacherSkeleton />
              <TeacherSkeleton />
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-5">
              {teachers &&
                teachers.length > 0 &&
                teachers.map((item) => {
                  return <TeacherItem key={item.id} teacher={item} />;
                })}
            </div>
          )}
        </section>
        {/* filter */}
        <section>
          <div className="flex md:flex-row flex-col md:justify-between md:items-center">
            <div className="flex gap-4 items-center">
              <div className="font-bold lg:text-3xl text-2xl">
                {" "}
                {cateInfo
                  ? `${t('collection.find')} (${countItems}) ${t('collection.about')}` +
                    ` '${cateInfo.name}'`
                  :search?`${t('header.search')} "${search}"`: t('collection.all_course')}
              </div>
            </div>
            <div>
              <Select
                color="blue"
                label={t('collection.fillter')}
                value={sortBy??''}
                onChange={(val) => setSortBy(val ?? "latest")}
              >
                <Option value="latest">{t('collection.newest')}</Option>
                <Option value="popularity">{t('collection.popular')}</Option>
                <Option value="highest-rated">{t('collection.rank')}</Option>
              </Select>
            </div>
          </div>
          <div className="md:flex hidden gap-2 items-center border py-2 px-2 rounded-lg my-3 font-bold ">
            <IoMdInformationCircle />{t('collection.note')}
          </div>
          <div className="flex flex-col  lg:flex-row gap-4">
            <div className="  lg:w-30 w-full grid grid-cols-2 lg:grid-cols-1">
              <div>
                <div className="font-bold border-t border-b bg-gray-50 p-2 px-3 flex items-center gap-2">
                  <FaAnglesRight />
                  {t('collection.level')}
                </div>
                <div className="flex flex-col  py-2 ">
                  {data_star.map((item) => {
                    return (
                      <label
                      key={item.id}
                        htmlFor={"star_" + item.id}
                        className={
                          (star == item.value ? "bg-primary-50 " : "") +
                          " flex items-center gap-2 text-sm py-2 px-3 cursor-pointer "
                        }
                      >
                        <input
                          type="radio"
                          checked={star == item.value}
                          id={"star_" + item.id}
                          onChange={() => setStar(item.value)}
                          name="star"
                        />
                        <div>
                        {t('collection.from')} {'>= '}
                          <span className="text-orange-500">
                            {item.name} {t('collection.star')}
                          </span>
                          
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
              <div>
                <div className="font-bold border-t border-b bg-gray-50 p-2 px-3 flex items-center gap-2">
                  <FaAnglesRight />
                  {t('collection.capdo')}
                </div>
                <div className="flex flex-col  py-2 ">
                  {levels &&
                    levels.length > 0 &&
                    levels.map((item) => {
                      return (
                        <div
                          className="flex items-center gap-2 text-sm py-2 px-3 "
                          key={item.id}
                        >
                          <input
                            id={"level_" + item.id}
                            checked={level == item.id}
                            type="radio"
                            name="level"
                            onChange={() => setLevel(item.id)}
                          />
                          <label
                            className=" cursor-pointer hover:text-primary-500"
                            htmlFor={"level_" + item.id}
                          >
                            {item.name}
                          </label>
                        </div>
                      );
                    })}
                  <div className="flex items-center gap-2 text-sm py-2 px-3 ">
                    <input
                      id={"level_all"}
                      type="radio"
                      name="level"
                      checked={level == null}
                      onChange={() => setLevel(null)}
                    />
                    <label
                      className=" cursor-pointer hover:text-primary-500"
                      htmlFor={"level_all"}
                    >
                      All level
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-bold border-t border-b bg-gray-50 p-2 px-3 flex items-center gap-2">
                  <FaAnglesRight />
                  {t('collection.duration')}
                </div>
                <div className="flex flex-col  py-2 ">
                  {data_duration.map((item) => {
                    return (
                      <div
                        className="flex items-center gap-2 text-sm py-2 px-3 "
                        key={item.id}
                      >
                        <input
                          id={"duration_" + item.id}
                          checked={duration == item.value}
                          type="radio"
                          name="duration"
                          onChange={() => setDuration(item.value)}
                        />
                        <label
                          className=" cursor-pointer hover:text-primary-500"
                          htmlFor={"duration_" + item.id}
                        >
                          {item.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="font-bold border-t border-b bg-gray-50 p-2 px-3 flex items-center gap-2">
                  <FaAnglesRight />
                  {t('collection.price')}
                </div>
                <div className="flex flex-col  py-2 ">
                  <div className="flex items-center gap-2 text-sm py-2 px-3 ">
                    <input
                      id="pricetype1"
                      name="pricetype"
                      checked={typePrice =='haspay'}
                      type="radio"
                      onChange={() => setTypePrice("haspay")}
                    />
                    <label htmlFor="pricetype1">{t('collection.need')}</label>
                  </div>
                  <div className="flex items-center gap-2 text-sm py-2 px-3 ">
                    <input
                      id="pricetype2"
                      name="pricetype"
                      checked={typePrice =='free'}

                      type="radio"
                      onChange={() => setTypePrice("free")}
                    />
                    <label htmlFor="pricetype2">{t('collection.price_free')}</label>
                  </div>
                </div>
              </div>

              <div className="border-t">
                <button onClick={()=>resetFilter()} className="font-bold w-full hover:bg-primary-100 border-t border-b bg-primary-50 mt-2 p-2 px-3 flex items-center justify-center gap-2">
                  <GrPowerReset />
                  {t('collection.reset')}
                </button>
              </div>
            </div>
            <div className="flex-1 bg-gray-50 h-fit">
              <div className="flex-1">
                {loadColec ? (
                  <div className="flex flex-col gap-2">
                    <CourseCollectionSke />
                    <CourseCollectionSke />
                  </div>
                ) : courses && courses.length > 0 ? (
                  courses.map((item) => {
                    return <ProductCollectItem key={item.id} course={item} />;
                  })
                ) : (
                  <div className="flex flex-col gap-5 items-center py-16">
                    <img className="w-[74px]" src={i_notfund} alt="" />
                    <div className="text-red-500 font-bold">
                    {t('collection.empty')}
                    </div>
                  </div>
                )}
              </div>
              {courses && courses.length > 0 && (
                <div className="pb-5 pt-8 px-4">
                  <div className="flex gap-1 justify-end">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={
                        (currentPage === 1
                          ? "bg-gray-400 text-gray-500 cursor-not-allowed  "
                          : "bg-primary-50 hover:bg-primary-500 hover:text-white text-primary-500 ") +
                        "w-[48px] h-[48px] rounded-full flex justify-center items-center  font-bold  "
                      }
                    >
                      <FaAnglesLeft />
                    </button>

                    {Array.from({ length: totalPage }, (_, index) => (
                      <div
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={
                          (currentPage === index + 1
                            ? "bg-primary-500 text-white "
                            : "bg-primary-50 text-primary-500 ") +
                          "w-[48px] h-[48px] cursor-pointer rounded-full flex justify-center items-center bg-primary-50 hover:bg-primary-500 hover:text-white  font-bold "
                        }
                      >
                        {index + 1}
                      </div>
                    ))}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPage}
                      className={
                        (currentPage === totalPage
                          ? "bg-gray-400 text-gray-500 cursor-not-allowed  "
                          : "bg-primary-50 hover:bg-primary-500 hover:text-white text-primary-500 ") +
                        "w-[48px] h-[48px] rounded-full flex justify-center items-center  font-bold  "
                      }
                    >
                      <FaAnglesRight />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Collection;
