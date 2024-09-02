import { FaAnglesLeft, FaArrowRightLong, FaCircleCheck } from "react-icons/fa6";
import i_logo from "../assets/logo/logo-new.png";
import { Link, Outlet } from "react-router-dom";
import ProgressCircle from "../components/compoment/ProgressCircle";
import { GoPencil } from "react-icons/go";
import { FaAngleRight, FaChevronLeft, FaLock, FaYoutube } from "react-icons/fa";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";

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
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <div className="w-full flex flex-col">
      <div className="bg-primary-50 flex border-b shadow-sm  justify-between items-center">
        <div className="flex items-center gap-2">
          <Link
            to={"/"}
            className="px-8 text-primary-700 py-5 hover:bg-primary-100"
          >
            <FaAnglesLeft />
          </Link>
          <div className="flex items-center gap-6">
            <Link to={"/"}>
              <img className="w-[52px]" src={i_logo} alt="" />
            </Link>
            <div className="font-bold text-primary-800 text-lg">
              Xây dựng Website với Reactjs
            </div>
          </div>
        </div>
        <div className="pr-5 flex items-center gap-4">
          <div className="flex gap-1 items-center  ">
            <ProgressCircle progress={100} />
            <span className="text-gray-700 ">26/49 bài học</span>
          </div>
          <div className="flex items-center gap-2">
            <GoPencil />
            Ghi chú
          </div>
        </div>
      </div>
      <div className="flex-1 w-full relative">
        <div className=" absolute top-0 left-0 right-0 bottom-0 flex">
          <div className="flex-1 relative">
            <Outlet/>
          </div>
          <div className="w-[23%]  border-l flex flex-col">
            <div className="font-bold text-primary-500 p-4 border-b shadow-sm">
              Nội dung khóa học
            </div>
            <div className="scrollbar_custom_hidden scrollbar_custom  overflow-y-scroll border-l">
              {/* item */}
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="px-4 py-3  bg-gray-50 hover:bg-gray-100"
                >
                  <div className=" text-[16px] ">
                    <div>
                      <div>1.Công nghệ thông tin</div>
                    </div>
                    <div className="flex gap-2 text-gray-500 text-sm font-light">
                      <span>6/8</span>
                      <span>|</span>
                      <span>02:34:45</span>
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody className="my-0 py-0">
                  <div className="my-0">
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 bg-primary-50 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.1. Giới thiệu</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                          <FaLock />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                          <FaLock />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </AccordionBody>
              </Accordion>
              {/* item */}
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="px-4 py-3  bg-gray-50 hover:bg-gray-100"
                >
                  <div className=" text-[16px] ">
                    <div>
                      <div>2.Nhập môn lập trình</div>
                    </div>
                    <div className="flex gap-2 text-gray-500 text-sm font-light">
                      <span>6/8</span>
                      <span>|</span>
                      <span>02:34:45</span>
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody className="my-0 py-0">
                  <div className="my-0">
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 bg-primary-50 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.1. Giới thiệu</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </AccordionBody>
              </Accordion>
              {/* item */}
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="px-4 py-3  bg-gray-50 hover:bg-gray-100"
                >
                  <div className=" text-[16px] ">
                    <div>
                      <div>3.Nhập môn lập trình</div>
                    </div>
                    <div className="flex gap-2 text-gray-500 text-sm font-light">
                      <span>6/8</span>
                      <span>|</span>
                      <span>02:34:45</span>
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody className="my-0 py-0">
                  <div className="my-0">
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 bg-primary-50 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.1. Giới thiệu</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </AccordionBody>
              </Accordion>
              {/* item */}
              <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className="px-4 py-3  bg-gray-50 hover:bg-gray-100"
                >
                  <div className=" text-[16px] ">
                    <div>
                      <div>4.Nhập môn lập trình</div>
                    </div>
                    <div className="flex gap-2 text-gray-500 text-sm font-light">
                      <span>6/8</span>
                      <span>|</span>
                      <span>02:34:45</span>
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody className="my-0 py-0">
                  <div className="my-0">
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 bg-primary-50 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.1. Giới thiệu</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </AccordionBody>
              </Accordion>

              {/* item */}
              <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(5)}
                  className="px-4 py-3  bg-gray-50 hover:bg-gray-100"
                >
                  <div className=" text-[16px] ">
                    <div>
                      <div>5.Nhập môn lập trình</div>
                    </div>
                    <div className="flex gap-2 text-gray-500 text-sm font-light">
                      <span>6/8</span>
                      <span>|</span>
                      <span>02:34:45</span>
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody className="my-0 py-0">
                  <div className="my-0">
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 bg-primary-50 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.1. Giới thiệu</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </AccordionBody>
              </Accordion>
              {/* item */}
              <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(6)}
                  className="px-4 py-3  bg-gray-50 hover:bg-gray-100"
                >
                  <div className=" text-[16px] ">
                    <div>
                      <div>6.Nhập môn lập trình</div>
                    </div>
                    <div className="flex gap-2 text-gray-500 text-sm font-light">
                      <span>6/8</span>
                      <span>|</span>
                      <span>02:34:45</span>
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody className="my-0 py-0">
                  <div className="my-0">
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 bg-primary-50 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.1. Giới thiệu</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </AccordionBody>
              </Accordion>
              {/* item */}
              <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(7)}
                  className="px-4 py-3  bg-gray-50 hover:bg-gray-100"
                >
                  <div className=" text-[16px] ">
                    <div>
                      <div>7.Nhập môn lập trình</div>
                    </div>
                    <div className="flex gap-2 text-gray-500 text-sm font-light">
                      <span>6/8</span>
                      <span>|</span>
                      <span>02:34:45</span>
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody className="my-0 py-0">
                  <div className="my-0">
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 bg-primary-50 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.1. Giới thiệu</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </AccordionBody>
              </Accordion>

              {/* item */}
              <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(8)}
                  className="px-4 py-3  bg-gray-50 hover:bg-gray-100"
                >
                  <div className=" text-[16px] ">
                    <div>
                      <div>8.Nhập môn lập trình</div>
                    </div>
                    <div className="flex gap-2 text-gray-500 text-sm font-light">
                      <span>6/8</span>
                      <span>|</span>
                      <span>02:34:45</span>
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody className="my-0 py-0">
                  <div className="my-0">
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 bg-primary-50 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.1. Giới thiệu</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </AccordionBody>
              </Accordion>
              {/* item */}
              <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(9)}
                  className="px-4 py-3  bg-gray-50 hover:bg-gray-100"
                >
                  <div className=" text-[16px] ">
                    <div>
                      <div>9.Nhập môn lập trình</div>
                    </div>
                    <div className="flex gap-2 text-gray-500 text-sm font-light">
                      <span>6/8</span>
                      <span>|</span>
                      <span>02:34:45</span>
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody className="my-0 py-0">
                  <div className="my-0">
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 bg-primary-50 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.1. Giới thiệu</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </AccordionBody>
              </Accordion>
              {/* item */}
              <Accordion open={open === 10} icon={<Icon id={10} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(10)}
                  className="px-4 py-3  bg-gray-50 hover:bg-gray-100"
                >
                  <div className=" text-[16px] ">
                    <div>
                      <div>10.Nhập môn lập trình</div>
                    </div>
                    <div className="flex gap-2 text-gray-500 text-sm font-light">
                      <span>6/8</span>
                      <span>|</span>
                      <span>02:34:45</span>
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody className="my-0 py-0">
                  <div className="my-0">
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 bg-primary-50 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.1. Giới thiệu</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-success-500">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                    <Link to={"#"} className=" ">
                      <div className="pl-7 py-2 pr-4 hover:bg-gray-100 border-b">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font">1.2 Kiểm tra cơ bản</div>
                          <div className="text-gray-400">
                            <FaCircleCheck />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <div>
                            <FaYoutube />
                          </div>
                          <span className="text-sm">40:46</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 border-t shadow-sm relative flex justify-center ">
        <div className="flex gap-4 py-3">
          <button className="flex  items-center gap-2 uppercase font-[600] text-sm bg-blue-gray-50 text-primary-300 border border-primary-200 rounded-full px-6 py-[6px]">
            <FaChevronLeft /> Bài trước
          </button>
          <button className="flex hover:bg-primary-600 hover:shadow-sm items-center gap-2 uppercase font-[600] text-sm border border-transparent bg-primary-500 text-white rounded-full px-6 py-[6px]">
            Bài sau <FaAngleRight />
          </button>
        </div>
        <div className=" absolute top-0 right-0 bottom-0 flex items-center gap-4 pr-4">
          <div className="font-bold text-primary-800 text-[16px]">
            1. Vừa giải trí vừa học
          </div>
          <div className="bg-white rounded-full p-3 border shadow-sm text-primary-500 hover:scale-110 cursor-pointer hover:bg-primary-50">
            <FaArrowRightLong className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyLayout;
