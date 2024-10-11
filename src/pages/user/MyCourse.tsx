import { IoIosSearch } from "react-icons/io";
import ProductCollectItem from "../../components/items/ProductCollectItem";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { useEffect, useState } from "react";
import { SGetCourseJoin } from "../../services/CommonService";
import { MCourse } from "../../types/app";
import CourseCollectionSke from "../../components/skeleton/CourseCollectionSke";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

type LinkNav = {
  id: number;
  title: string;
  link: string;
  type: string;
};
function MyCourse() {
  const {t} = useTranslation()
  const linkNavs: LinkNav[] = [
    { id: 1, title:  t('profile.c.t2'), link: "", type: "all" },
    { id: 2, title: t('profile.c.t3'), link: "?type=completed", type: "completed" },
    { id: 3, title: t('profile.c.t4'), link: "?type=studying", type: "studying" },
    // { id: 4, title: "Chứng chỉ", link: "?type=certificate" },
  ];
  const { currentUser } = useSelector((state: RootState) => state.appReducer);
  const [courses, setCourses] = useState<MCourse[]>([]);
  const [coursesTotal, setCoursesTotal] = useState<MCourse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get("type") || "";
  const [linkNav, setLinkNav] = useState(
    type == "" ? 1 : linkNavs.find((i) => i.link.includes(type))?.id ?? 1
  );

  useEffect(() => {
    setIsLoading(true);
    if (currentUser && currentUser.username) {
      document.title =
        currentUser.first_name + " " + currentUser.last_name + " | Quin Course";
      SGetCourseJoin(`?limit=10&username=${currentUser.username}`).then(
        (res) => {
          setIsLoading(false);
          if (res.status) {
            setCourses(res.data.courses);
            setCoursesTotal(res.data.courses);
            setTotalPage(Math.ceil(res.meta.total / res.meta.per_page));
          }
        }
      );
    }
  }, [currentUser]);
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPage) {
      setCurrentPage(page);
    }
  };
  const handleSortBy = (type: string) => {
    switch (type) {
      case "completed":
        setCourses(coursesTotal.filter((c) => c.percent_learning == 100));
        break;
      case "studying":
        setCourses(coursesTotal.filter((c) => c.percent_learning < 100));

        break;
      default:
        setCourses(coursesTotal);
        break;
    }
  };
  const handleActiveNav = (data: LinkNav) => {
    setLinkNav(data.id);
    handleSortBy(data.type);
  };

  return (
    <div className="">
      <div className="font-bold text-xl"> {t('profile.c.t1')}</div>

      <div className="bg-gray-50 p-4 rounded-lg my-4 flex gap-4 items-center">
        <div className="flex gap-1 flex-1">
          {linkNavs.map((item) => {
            return (
              <Link
                key={item.id}
                onClick={() => handleActiveNav(item)}
                to={item.link}
                className={
                  " hover:shadow-sm  px-6 py-1 border border-transparent hover:border-gray-100 hover:bg-primary-50 cursor-pointer w-fit rounded-lg " +
                  (item.id == linkNav &&
                    " shadow-sm  px-6 py-1 border bg-primary-50")
                }
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className=" relative hidden md:flex ">
          <input
            type="text"
            placeholder={t('profile.c.t5')+".."}
            className="border bg-white px-2 py-1 rounded-lg focus:border-primary-500 shadow-sm"
          />
          <div className=" absolute top-[50%] right-2 translate-y-[-50%] text-xl text-gray-500">
            <IoIosSearch />
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex-1 flex flex-col gap-2">
          <CourseCollectionSke />
          <CourseCollectionSke />
        </div>
      ) : (
        <div>
          <div className="flex-1">
            {courses && courses.length > 0 ? (
              courses.map((item) => {
                return (
                  <ProductCollectItem
                    key={item.id}
                    course={item}
                    type="progress"
                  />
                );
              })
            ) : (
              <div className="text-center text-primary-500 py-5">
                {t('profile.c.t6')}
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
      )}
    </div>
  );
}

export default MyCourse;
