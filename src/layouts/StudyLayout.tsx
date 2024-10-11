import {
  FaAnglesLeft,
  FaArrowRightLong,
  FaCircleCheck,
  FaRegCircleQuestion,
} from "react-icons/fa6";
import i_logo from "../assets/logo/logo-new.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import ProgressCircle from "../components/compoment/ProgressCircle";
// import { GoPencil } from "react-icons/go";
import {
  FaAngleRight,
  FaChevronLeft,
  FaHourglassStart,
  FaLock,
  FaYoutube,
} from "react-icons/fa";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MCourse, MLearningLog, MSection, MStep } from "../types/app";
import {
  SGetLearningCourse,
  SSaveUserProgress,
} from "../services/CommonService";
import { formatDuration } from "../components/functions/tool";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCourse } from "../redux/reducers/appReducer";
import { RootState } from "../redux/reducers";
import TimeModal from "../components/Modals/TimeModal";

import { GrMenu } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { useTranslation } from "react-i18next";

function Icon({ id = 1, open = 1 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
function StudyLayout() {
  const {t} = useTranslation()
  const dispatch = useDispatch();
  const { studyLog } = useSelector((state: RootState) => state.appReducer);
  const { user, isLogin } = useSelector(
    (state: RootState) => state.authReducer
  );

  const [open, setOpen] = useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  const [userProgress, setUserProgress] = useState<number[]>([]);

  const { slug } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const step_uuid = searchParams.get("id");
  const [learningLog, setLearningLog] = useState<MLearningLog>();
  const [sections, setSections] = useState<MSection[]>([]);
  const [courseInfo, setCourseInfo] = useState<MCourse>();

  const [openTop, setOpenTop] = useState(false);
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  const [timeWaiting, setTimeWaiting] = useState<string>("");

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    } else if (!slug) {
      navigate("/error");
    } else {
      SGetLearningCourse(slug).then((res) => {
        if (res.status) {
          if (!step_uuid) {
            navigate("?id=" + res.data.learning_log.current_step);
          }
          setLearningLog(res.data.learning_log);
          setSections(res.data.sections);
          setCourseInfo(res.data.course);
          dispatch(setCurrentCourse(res.data.course));
          setUserProgress(JSON.parse(res.data.user_progress));
          document.title = res.data.course.title;
        } else {
          navigate("/error");
        }
      });
    }
  }, [slug, step_uuid]);
  const handleBtnStep = (type: string) => {
    if (type == "next" && studyLog.nextStep) {
      if (courseInfo && studyLog.currentStep == learningLog?.current_step) {
        SSaveUserProgress(courseInfo?.id, studyLog.currentStep).then((res) => {
          if (res.status) {
            navigate("?id=" + studyLog.nextStep);
          } else {
            setOpenTop(true);
            setTimeWaiting(res.data);
          }
        });
      } else {
        navigate("?id=" + studyLog.nextStep);
      }
    } else {
      navigate("?id=" + studyLog.previousStep);
    }
  };
  const handleSelectStep = (step: MStep) => {
    if (userProgress.includes(step.id)) {
      navigate("?id=" + step.uuid);
    }
  };

  return (
    <div className="w-full flex flex-col">
      <TimeModal setOpenTop={setOpenTop} openTop={openTop} time={timeWaiting} />
      <div className="bg-primary-50 flex border-b shadow-sm  justify-between items-center">
        <div className="flex items-center gap-2">
          <div
            onClick={() => navigate("/account/@" + user.username + "/courses")}
            className="px-8 text-primary-700 py-5 hover:bg-primary-100 cursor-pointer"
          >
            <FaAnglesLeft />
          </div>
          <div className="flex items-center gap-6">
            <Link to={"/"}>
              <img className="w-[52px]" src={i_logo} alt="" />
            </Link>
            <div className="font-bold text-primary-800 text-lg line-clamp-1">
              {courseInfo?.title}
            </div>
          </div>
        </div>
        <div className="pr-5 flex items-center gap-4">
          <div className="flex gap-2 items-center  ">
            <ProgressCircle
              progress={Math.ceil(courseInfo?.percent_learning ?? 0)}
            />
            <span className="text-gray-700 hidden md:block">
              {userProgress?.length ?? 0}/{courseInfo?.total_steps} {t('learning.t1')}
            </span>
          </div>
          {!studyLog.nextStep ||
            (Math.ceil(courseInfo?.percent_learning ?? 0) == 100 && (
              <Link
                to={"/certificate/" + courseInfo?.slug}
                className="text-primary-500 font-bold text-sm hidden md:block"
              >
                {t('learning.t2')}
              </Link>
            ))}
          {isLogin && (
            <div className=" md:flex hidden items-center gap-2">
              <Link
                to={"/account/@" + user.username}
                className="w-[32px] h-[32px]"
              >
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={user.avatar_url}
                  alt=""
                />
              </Link>
            </div>
          )}
          {/* <div className="flex items-center gap-2">
            <GoPencil />
            Ghi chú
          </div> */}
        </div>
      </div>
      <div className="flex-1 w-full relative">
        <div className=" absolute top-0 left-0 right-0 bottom-0 flex">
          <div className="flex-1 relative">
            <Outlet />
            {/* {courseInfo && <Learning course={courseInfo} />} */}
          </div>
          <div
            className={
              "  bg-white w-[320px] md:w-[23%]  border-l  flex-col " +
              (isShowSidebar ? " flex absolute md:relative top-0 right-0 bottom-0" : " hidden")
            }
          >
            <div className="font-bold text-primary-500 p-4 border-b shadow-sm">
            {t('learning.t3')}
            </div>
            <div className="scrollbar_custom_hidden scrollbar_custom  overflow-y-scroll border-l">
              {/* item */}
              {sections &&
                sections.length > 0 &&
                sections.map((item, index) => {
                  const t =
                    (
                      item.steps.filter((n) => userProgress.includes(n.id)) ??
                      []
                    ).length ?? 0;
                  return (
                    <Accordion
                      key={item.id}
                      open={
                        open === item.id ||
                        (item.steps.find((i) => i.uuid == studyLog.currentStep)
                          ? true
                          : false)
                      }
                      icon={<Icon id={item.id} open={open} />}
                    >
                      <AccordionHeader
                        onClick={() => handleOpen(item.id)}
                        className="px-4 py-3  bg-gray-50 hover:bg-gray-100"
                      >
                        <div className=" text-[16px] ">
                          <div>
                            <div className="flex ">
                              {index + 1}.{" "}
                              <div className="flex-1">{item.title}</div>
                            </div>
                          </div>
                          <div className="flex gap-2 text-gray-500 text-sm font-light">
                            <span>
                              {t}/{item.steps.length}
                            </span>
                            <span>|</span>
                            <span>{formatDuration(item.duration, false)}</span>
                          </div>
                        </div>
                      </AccordionHeader>
                      <AccordionBody className="my-0 py-0">
                        <div className="my-0">
                          {item.steps.length > 0 ? (
                            item.steps.map((step, i) => {
                              return (
                                <div
                                  onClick={() => handleSelectStep(step)}
                                  className="w-full"
                                  key={step.id}
                                >
                                  <div
                                    className={
                                      "pl-7 py-2 pr-4  border-b " +
                                      (userProgress.includes(step.id)
                                        ? studyLog.currentStep &&
                                          step.uuid == studyLog.currentStep
                                          ? " bg-primary-100 "
                                          : " hover:bg-primary-50 cursor-pointer"
                                        : " bg-gray-200 hover:bg-gray-200 cursor-default")
                                    }
                                  >
                                    <div className="flex items-center justify-between gap-4">
                                      <div className="flex">
                                        {index + 1}.{i + 1}.{" "}
                                        <div className="flex-1 text-left">
                                          {step.title}
                                        </div>
                                      </div>
                                      {userProgress.includes(step.id) ? (
                                        learningLog &&
                                        step.uuid !=
                                          learningLog?.current_step && (
                                          <div className="text-success-500">
                                            <FaCircleCheck />
                                          </div>
                                        )
                                      ) : (
                                        <div className="text-gray-500">
                                          <FaLock />
                                        </div>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                      <div>
                                        {step.type == "lecture" && (
                                          <FaYoutube />
                                        )}
                                        {step.type == "quiz" && (
                                          <FaRegCircleQuestion />
                                        )}
                                        {step.type == "article" && (
                                          <TbReportSearch />
                                        )}
                                      </div>
                                      <span className="text-[12px]">
                                        {formatDuration(step.duration)}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                          ) : (
                            <div className="text-center py-4 text-sm text-primary-500">
                              --Đang cập nhật--
                            </div>
                          )}
                        </div>
                      </AccordionBody>
                    </Accordion>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 border-t shadow-sm relative flex justify-center ">
        <div className="flex gap-4 py-3">
          {studyLog.previousStep ? (
            <button
              onClick={() => handleBtnStep("previous")}
              className="flex hover:bg-primary-600 hover:shadow-sm items-center gap-2 uppercase font-[600] text-sm border border-transparent bg-primary-500 text-white rounded-full px-6 py-[6px]"
            >
              <FaChevronLeft /> {t('learning.t5')}
            </button>
          ) : (
            <button
              disabled
              className="flex  items-center gap-2 uppercase font-[600] text-sm bg-blue-gray-50 text-primary-300 border border-primary-200 rounded-full px-6 py-[6px]"
            >
              <FaChevronLeft /> {t('learning.t6')}
            </button>
          )}

          {studyLog.nextStep ? (
            <button
              onClick={() => handleBtnStep("next")}
              className="flex hover:bg-primary-600 hover:shadow-sm items-center gap-2 uppercase font-[600] text-sm border border-transparent bg-primary-500 text-white rounded-full px-6 py-[6px]"
            >
              {t('learning.t6')} <FaAngleRight />
            </button>
          ) : (
            <button
              disabled
              className="flex  items-center gap-2 uppercase font-[600] text-sm bg-blue-gray-50 text-primary-300 border border-primary-200 rounded-full px-6 py-[6px]"
            >
              {t('learning.t6')} <FaAngleRight />
            </button>
          )}
        </div>
        <div className=" absolute top-0 right-0 bottom-0 flex items-center gap-4 pr-4 ">
          <div className="font-bold text-primary-800 text-[16px] md:flex items-center gap-2 hidden">
            <FaHourglassStart className="text-green-500 animate-spin " />
            {studyLog && studyLog.stepInfo && studyLog.stepInfo.title}
          </div>
          {isShowSidebar ? (
            <div
              onClick={() => setIsShowSidebar(false)}
              className="bg-white rounded-full p-3 border shadow-sm text-primary-500 hover:scale-110 cursor-pointer hover:bg-primary-50"
            >
              <FaArrowRightLong className="" />
            </div>
          ) : (
            <div
              onClick={() => setIsShowSidebar(true)}
              className="bg-white rounded-full p-3 border shadow-sm text-primary-500 hover:scale-110 cursor-pointer hover:bg-primary-50"
            >
              <GrMenu />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudyLayout;
