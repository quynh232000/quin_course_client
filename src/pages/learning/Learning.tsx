// import { FaPlay } from "react-icons/fa";
// import { GoPlus } from "react-icons/go";
import i_congraturation from "../../assets/images/congraturation.png";
import { MAnswer, MStep } from "../../types/app";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SGetLearningStep, SUserQuiz } from "../../services/CommonService";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { FormatDate } from "../../components/functions/tool";
import { setStudyLog } from "../../redux/reducers/appReducer";
import Congratulation from "../../components/compoment/Congratulation";
import IframeVideo from "../../components/compoment/IframeVideo";
import DefaultSke from "../../components/skeleton/DefaultSke";
import LearningNote from "./LearningNote";
// import Q_A from "./Q_A";
import ModalComment from "../../components/compoment/ModalComment";
import { useTranslation } from "react-i18next";

// import { FaPlay } from "react-icons/fa";

function Learning() {
  const {t} = useTranslation()
  const dispatch = useDispatch();
  const { currentCourse } = useSelector((state: RootState) => state.appReducer);
  const [step_info, setStepInfo] = useState<MStep>();
  const [navbar, setNavbar] = useState("dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const step_uuid = searchParams.get("id");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setIsAnswerCorrect(false);
    setLoading(true);
    if (step_uuid && currentCourse) {
      SGetLearningStep(currentCourse.id, step_uuid).then((res) => {
        if (res.status) {
          setStepInfo(res.data.step);
          setLoading(false);
          dispatch(
            setStudyLog({
              learningLog: res.data.learning_log,
              previousStep: res.data.previous_step_uuid,
              currentStep: step_uuid,
              nextStep: res.data.next_step_uuid,
              stepInfo: res.data.step,
            })
          );
        } else {
          navigate("/notfund");
        }
      });
    }
    setNavbar("dashboard");
  }, [currentCourse]);

  // select quiz
  const [quizSelect, setQuizSelect] = useState<number | null>(null);
  const [answer, setAnswer] = useState<MAnswer | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const handleQuizSelect = (id: number) => {
    setQuizSelect(id);
    setAnswer(null);
    setIsAnswerCorrect(false);
  };
  const handleAnswer = () => {
    if (quizSelect) {
      SUserQuiz(quizSelect).then((res) => {
        if (res.status) {
          setAnswer(res.data);
          if (res.data.is_correct) {
            setIsAnswerCorrect(true);
          }
          setQuizSelect(null);
        }
      });
    }
  };
  // navbar
  // modal comment
  const [isOpenComment, setIsOpenComment] = useState(false);
  const handleOpenComment = () => {
    setIsOpenComment(true);
  };
  return (
    <div className="flex w-full  absolute top-0 left-0 right-0 bottom-0 scrollbar_custom overflow-y-scroll">
      {loading ? (
        <div className="w-full">
          <DefaultSke />
        </div>
      ) : (
        <div className="w-full  ">
          {isAnswerCorrect ? <Congratulation /> : ""}
          <div className=" relative">
            <div className=" absolute top-0 left-0 right-0 z-10 hidden">
              <img
                src={i_congraturation}
                alt=""
                className="w-full object-contain"
              />
            </div>
            {step_info?.type == "lecture" && (
              <div className=" ">
                {/* view video */}
                <div className="h-[70vh] relative border-t-2 ">
                  {step_info?.type == "lecture" &&
                  step_info?.lecture?.video_type == "youtube" ? (
                    <IframeVideo url={step_info?.lecture?.video_url} />
                  ) : (
                    <video className="h-full w-full " controls>
                      <source
                        src={step_info?.lecture?.video_url}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {/* <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center hover:scale-110">
               <div className="bg-primary-500 p-5 rounded-full text-white text-3xl cursor-pointer shadow-sm">
                 <FaPlay />
               </div>
             </div> */}
                </div>
                <div className="py-8 md:px-12 px-5 flex justify-between">
                  <div>
                    <h4 className="font-bold text-2xl text-primary-900">
                      {step_info?.title}
                    </h4>
                    <div className="flex mt-2 text-gray-600">
                    {t('learning.t7')}:
                      <span>
                        {step_info && FormatDate(step_info?.updated_at)}
                      </span>
                    </div>
                  </div>
                  <div>
                    {/* <button className="flex items-center gap-1 border rounded-lg px-5 py-2 bg-gray-100 shadow-sm border-gray-300 hover:bg-gray-200">
                      <GoPlus />
                      Thêm ghi chú
                    </button> */}
                  </div>
                </div>
              </div>
            )}
            {/* view question */}
            {step_info && step_info?.type == "quiz" && (
              <div className="md:p-12 p-5 pt-8 ">
                <div className="p-8 shadow-sm border">
                  <div className="font-bold text-2xl text-primary-900">
                    {step_info.title}
                  </div>
                  <div className="text-gray-600 text-sm">
                  {t('learning.t7')} {FormatDate(step_info.updated_at)}
                  </div>
                  <div>
                    <div>
                      <div className="bg-green-50 px-4 py-3 my-3 rounded-xl min-h-[120px]">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: step_info.question.content,
                          }}
                        ></div>
                      </div>
                      <div className="py-3">
                        <div className="font-bold text-primary-900 text-lg">
                          {/* Ý nghĩa của đoạn code trên là gì? */}
                        </div>
                        <div className="mb-5 mt-3 pb-3">
                        {t('learning.t8')}
                        </div>

                        <div className="flex flex-col gap-2 mt-3">
                          {step_info.answers.map((item) => {
                            return (
                              <div
                                key={item.id}
                                onClick={() => handleQuizSelect(item.id)}
                                dangerouslySetInnerHTML={{
                                  __html: item.content,
                                }}
                                className={
                                  "p-4   cursor-pointer bg-gray-100 rounded-xl font-bold text-primary-800 border-2  " +
                                  (quizSelect && quizSelect == item.id
                                    ? "border-primary-500 bg-primary-50 border-2 "
                                    : "hover:bg-primary-50 ") +
                                  (answer &&
                                    answer.id == item.id &&
                                    (answer.is_correct
                                      ? " border-green-500 bg-green-100 hover:bg-green-100"
                                      : " border-deep-orange-500 bg-red-100 hover:bg-red-100"))
                                }
                              ></div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex justify-end mt-3">
                        {quizSelect ? (
                          <button
                            onClick={handleAnswer}
                            className="bg-primary-500 px-12 hover:bg-primary-600 rounded-full py-2 text-white"
                          >
                           {t('learning.t9')}
                          </button>
                        ) : (
                          <button
                            disabled
                            className="bg-primary-200 px-12  rounded-full py-2 text-white"
                          >
                            {t('learning.t9')}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {answer && (
                    <div>
                      <div className="font-bold mt-3">{t('learning.t10')}</div>
                      <p className="mt-3  text-gray-700">{answer.explain}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* view article */}
            {step_info && step_info?.type == "article" && (
              <div className=" ">
                <div className="font-bold text-3xl text-primary-800  border-b-2 pb-2 px-12 py-5">
                  {step_info.title}
                </div>
                <div
                  className="bg-gray-50 px-12 py-5"
                  dangerouslySetInnerHTML={{
                    __html: step_info.article.content,
                  }}
                ></div>
              </div>
            )}
          </div>
          <div className="md:px-12 px-5  shadow-sm">
            <div className="flex border-t border-b">
              <div
                onClick={() => setNavbar("dashboard")}
                className={
                  "py-2 px-5 font-bold text-gray-700 hover:bg-gray-50 w-fit border-b-2 cursor-pointer border-transparent " +
                  (navbar == "dashboard" &&
                    "text-primary-500 bg-primary-50 border-primary-500")
                }
              >
                {t('learning.t14')}
              </div>
              <div
                onClick={() => setNavbar("note")}
                className={
                  "py-2 px-5 font-bold text-gray-700 hover:bg-gray-50 w-fit border-b-2 cursor-pointer border-transparent " +
                  (navbar == "note" &&
                    "text-primary-500 bg-primary-50 border-primary-500")
                }
              >
               {t('learning.t11')}
              </div>
              <div
                onClick={handleOpenComment}
                className={
                  "py-2 px-5 font-bold text-gray-700 hover:bg-gray-50 w-fit border-b-2 cursor-pointer border-transparent " +
                  (navbar == "question" &&
                    "text-primary-500 bg-primary-50 border-primary-500")
                }
              >
                {t('learning.t12')}
              </div>
            </div>
            <div className="py-5 pb-32">
              {/* content tong quan */}
              {navbar == "dashboard" && (
                <div>
                  <div className="flex flex-col md:flex-row border-b py-4 gap-5">
                    <div className="w-full md:w-25 font-bold text-gray-500">
                    {t('learning.t13')}
                    </div>
                    <div className="flex-1 border-l pl-5">
                      {step_info && step_info.type == "lecture" && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: step_info.lecture.description ?? "",
                          }}
                        ></div>
                      )}

                      {/* <div>
                   <button className="border bg-gray-100 px-5 py-1 rounded-lg mt-2 shadow-md hover:shadow-none">
                     Xem thêm
                   </button>
                 </div> */}
                    </div>
                  </div>
                  <div className="flex border-b py-4 flex-col md:flex-row gap-5">
                    <div className="w-full md:w-25 font-bold text-gray-500">
                    {t('learning.t15')}
                    </div>
                    <div className="flex-1 border-l pl-5">
                      {currentCourse?.intends
                        .filter((i) => i.type == "whatlearn")
                        .map((item, index) => {
                          return (
                            <div key={item.id} className="flex gap-2 mb-2">
                              <span className="text-primary-600 font-bold">
                                {index + 1}.
                              </span>
                              <div className="flex-1 ">{item.content}</div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              )}
              {navbar == "note" && step_info && (
                <LearningNote step={step_info} />
              )}
              {isOpenComment && step_info && (
                <ModalComment
                  step={step_info}
                  isOpenComment={isOpenComment}
                  setIsOpenComment={setIsOpenComment}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Learning;
