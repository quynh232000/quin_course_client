import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FaAngleDown, FaChevronRight, FaStar } from "react-icons/fa";
import { FaCirclePlay, FaPeopleGroup } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { MdOndemandVideo } from "react-icons/md";
import ReviewItem from "../components/items/ReviewItem";
import ProductItem from "../components/items/ProductItem";
import { Link } from "react-router-dom";

function Detail() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <div className="flex flex-col gap-[72px] pb-[32px] ">
      <div className="bg-primary-900 w-full text-white">
        <div className="w-content m-auto py-16 flex">
          <div className="w-60">
            <div className="flex items-center gap-2 text-gray-300">
              <div className="w-fit">Công nghệ thông tin</div>
              <span>
                <FaChevronRight />
              </span>
              <div className="w-fit">Lập trình Web</div>
              <span>
                <FaChevronRight />
              </span>
              <div className="w-fit">Phát triển ứng dụng web</div>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <h2 className="font-bold uppercase text-4xl">
                Lập trình frontend thành thạo trong 1 tuần
              </h2>
              <p className="text-gray-100">
                Lập trình front end thành thạo 4 ngôn ngữ chỉ trong 1 tuần học,
                với học phí rẻ và sự tận tâm giảng dạy từ giảng viên, mang đến 1
                khóa học tuyệt vời cho những ai đam mê học front end
              </p>
              <div className="flex items-center gap-4 mt-2">
                <div className="border border-white bg-[#2e81e0] px-4 py-1 text-sm rounded-md">
                  Cấp chứng chỉ
                </div>
                <div className="text-primary-300">(52 đánh giá)</div>
                <div>234 học viên</div>
              </div>
              <div className="flex items-center gap-2 py-3">
                Giảng dạy bởi:{" "}
                <span className="flex items-center gap-1 text-primary-300">
                  Giảng viên:{" "}
                  <Link to={"/teacher"}><strong className=" uppercase underline">Mr Quynh</strong></Link>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MdOndemandVideo /> 180 giờ học video
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="border-2 rounded-xl overflow-hidden ">
              <iframe
                width="418"
                height="215"
                src="https://www.youtube.com/embed/KnxN-Um5p7c?si=ZZwotaK18VkbTSil"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <div className="p-3 bg-white text-dark">
                <div className="flex justify-between items-center">
                  <div className="font-bold text-2xl">399.000đ</div>
                  <del className="text-gray-600">499.000đ</del>
                </div>
                <div className="flex gap-4">
                  <Link
                    to={"/checkout"}
                    className="bg-primary-500 text-center flex-1 hover:bg-primary-600 text-white py-2 rounded-lg"
                  >
                    Mua ngay
                  </Link>
                  <Link
                    to={"/cart"}
                    className="border-primary-500 border  flex-1 text-center text-primary-500 hover:bg-primary-50 py-2 rounded-lg"
                  >
                    Thêm giỏ hàng
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* giang vien */}
      <div className="w-content m-auto">
        <div className="font-bold text-3xl mb-4">Thông tin giảng viên</div>
        <div className="flex gap-8">
          <div className="w-fit">
            <div className="w-[420px] h-[274px] border rounded-xl">
              <img
                className="w-full h-full rounded-xl"
                src="https://cdn.pixabay.com/photo/2020/03/17/12/01/vietnam-4940056_640.jpg"
                alt=""
              />
            </div>
            <div className="text-center ">
              <h4 className=" uppercase font-bold text-primary-600 my-3">
                Nguyen Quynh
              </h4>
              <div>Data Scientist | Leader</div>
              <div>Giảng viên tại đại học Havard</div>
            </div>
          </div>
          <div className="flex-1">
            <div className=" gap-5 flex">
              <div>
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
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <FaPeopleGroup />
                  3433 học viên
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <FaCirclePlay />5 khóa học
                </div>
              </div>
            </div>
            <div>
              <ul className="my-2">
                <li>
                  - Khóa học này được chọn vào Udemy Vietnamese Private
                  Collection - Bộ Sưu Tập Khóa Học Được Tuyển Chọn Dành Cho Các
                  Doanh Nghiệp Việt Nam.
                </li>
                <li>
                  - Khóa học này được chọn vào Udemy Vietnamese Private
                  Collection - Bộ Sưu Tập Khóa Học Được Tuyển Chọn Dành Cho Các
                  Doanh Nghiệp Việt Nam.
                </li>
                <li>
                  - Khóa học này được chọn vào Udemy Vietnamese Private
                  Collection - Bộ Sưu Tập Khóa Học Được Tuyển Chọn Dành Cho Các
                  Doanh Nghiệp Việt Nam.
                </li>
                <li>
                  - Khóa học này được chọn vào Udemy Vietnamese Private
                  Collection - Bộ Sưu Tập Khóa Học Được Tuyển Chọn Dành Cho Các
                  Doanh Nghiệp Việt Nam.
                </li>
              </ul>
              <div className="mt-5">
                <button className="border py-2 px-5 rounded-lg font-bold text-gray-600">
                  Xem thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="bg-white">
        <div className="w-content m-auto">
          <div className="font-bold text-3xl mb-4">Nội dung khóa học</div>
          <div className="flex gap-2 items-center">
            <span>23 phần</span>
            <span className="w-[10px] h-[10px] rounded-full bg-gray-500"></span>
            <span>23 bài giảng</span>
            <span className="w-[10px] h-[10px] rounded-full bg-gray-500"></span>
            <span>125 phút</span>
          </div>
          <div className="py-5 flex gap-5">
            <div className="w-65">
              <div className="border border-gray-300">
                <Accordion open={open === 1} className="">
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="border-b"
                  >
                    <div className="w-full px-3">
                      <div className="flex justify-between font-bold text-[16px]">
                        <div className="flex items-center gap-2 flex-1">
                          <div>
                            <FaAngleDown />
                          </div>
                          <div className=" line-clamp-1">
                            Công nghệ thông tin
                          </div>
                        </div>
                        <div className="flex items-center gap-2 font-light">
                          <div>15 bài giảng</div>
                          <div className="w-[8px] h-[8px] bg-gray-300 rounded-full"></div>
                          <div>30 phút</div>
                        </div>
                      </div>
                      <div className="text-[12px] px-5 mt-1 flex gap-1">
                        <span>3.3</span>
                        <span>|</span>
                        <span>02:43:49</span>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="flex flex-col gap-4">
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <div className="text-primary-500">Preview</div>
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} className="">
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="border-b"
                  >
                    <div className="w-full px-3">
                      <div className="flex justify-between font-bold text-[16px]">
                        <div className="flex items-center gap-2 flex-1">
                          <div>
                            <FaAngleDown />
                          </div>
                          <div className=" line-clamp-1">
                            Công nghệ thông tin
                          </div>
                        </div>
                        <div className="flex items-center gap-2 font-light">
                          <div>15 bài giảng</div>
                          <div className="w-[8px] h-[8px] bg-gray-300 rounded-full"></div>
                          <div>30 phút</div>
                        </div>
                      </div>
                      <div className="text-[12px] px-5 mt-1 flex gap-1">
                        <span>3.3</span>
                        <span>|</span>
                        <span>02:43:49</span>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="flex flex-col gap-4">
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <div className="text-primary-500">Preview</div>
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} className="">
                  <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className="border-b"
                  >
                    <div className="w-full px-3">
                      <div className="flex justify-between font-bold text-[16px]">
                        <div className="flex items-center gap-2 flex-1">
                          <div>
                            <FaAngleDown />
                          </div>
                          <div className=" line-clamp-1">
                            Công nghệ thông tin
                          </div>
                        </div>
                        <div className="flex items-center gap-2 font-light">
                          <div>15 bài giảng</div>
                          <div className="w-[8px] h-[8px] bg-gray-300 rounded-full"></div>
                          <div>30 phút</div>
                        </div>
                      </div>
                      <div className="text-[12px] px-5 mt-1 flex gap-1">
                        <span>3.3</span>
                        <span>|</span>
                        <span>02:43:49</span>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="flex flex-col gap-4">
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <div className="text-primary-500">Preview</div>
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} className="">
                  <AccordionHeader
                    onClick={() => handleOpen(4)}
                    className="border-b"
                  >
                    <div className="w-full px-3">
                      <div className="flex justify-between font-bold text-[16px]">
                        <div className="flex items-center gap-2 flex-1">
                          <div>
                            <FaAngleDown />
                          </div>
                          <div className=" line-clamp-1">
                            Công nghệ thông tin
                          </div>
                        </div>
                        <div className="flex items-center gap-2 font-light">
                          <div>15 bài giảng</div>
                          <div className="w-[8px] h-[8px] bg-gray-300 rounded-full"></div>
                          <div>30 phút</div>
                        </div>
                      </div>
                      <div className="text-[12px] px-5 mt-1 flex gap-1">
                        <span>3.3</span>
                        <span>|</span>
                        <span>02:43:49</span>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="flex flex-col gap-4">
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <div className="text-primary-500">Preview</div>
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} className="">
                  <AccordionHeader
                    onClick={() => handleOpen(5)}
                    className="border-b"
                  >
                    <div className="w-full px-3">
                      <div className="flex justify-between font-bold text-[16px]">
                        <div className="flex items-center gap-5 flex-1">
                          <div>
                            <FaAngleDown />
                          </div>
                          <div className=" line-clamp-1">
                            Công nghệ thông tin
                          </div>
                        </div>
                        <div className="flex items-center gap-2 font-light">
                          <div>15 bài giảng</div>
                          <div className="w-[8px] h-[8px] bg-gray-300 rounded-full"></div>
                          <div>30 phút</div>
                        </div>
                      </div>
                      <div className="text-[12px] px-5 mt-1 flex gap-1">
                        <span>3.3</span>
                        <span>|</span>
                        <span>02:43:49</span>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="flex flex-col gap-4">
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <div className="text-primary-500">Preview</div>
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                      <div className="px-7 py-0 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className=" min-w-[20px] text-lg">
                            <MdOndemandVideo />
                          </div>
                          <span>
                            Introduction - Multi Vendor Ecommerce Overview
                          </span>
                        </div>
                        <div className="flex gap-5">
                          <span>36:58</span>
                        </div>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>
              </div>
            </div>
            <div className="flex-1 bg-gray-50 border rounded-lg p-5 shadow-sm h-fit">
              <div className="font-bold text-xl">Bạn sẽ học được những gì?</div>
              <div className="mt-5 flex flex-col gap-3">
                <div className="flex  gap-2">
                  <CiCircleCheck className="text-2xl" />
                  <div>Thành thạo kỹ năng chỉnh sửa ảnh bằng Photoshop.</div>
                </div>
                <div className="flex  gap-2">
                  <CiCircleCheck className="text-2xl" />
                  <div>Thành thạo kỹ năng chỉnh sửa ảnh bằng Photoshop.</div>
                </div>
                <div className="flex  gap-2">
                  <CiCircleCheck className="text-2xl" />
                  <div>Thành thạo kỹ năng chỉnh sửa ảnh bằng Photoshop.</div>
                </div>
                <div className="flex  gap-2">
                  <CiCircleCheck className="text-2xl" />
                  <div>Thành thạo kỹ năng chỉnh sửa ảnh bằng Photoshop.</div>
                </div>
                <div className="flex  gap-2">
                  <CiCircleCheck className="text-2xl" />
                  <div>Thành thạo kỹ năng chỉnh sửa ảnh bằng Photoshop.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* décription */}
      <div className="w-content m-auto">
        <div className="font-bold text-3xl mb-4">Mô tả khóa học</div>

        <div className="my-5 flex gap-4 ">
          <div className="w-65 border rounded-lg shadow-sm p-5 h-fit">
            <p>
              Khóa học này được chọn vào Udemy Vietnamese Private Collection -
              Bộ Sưu Tập Khóa Học Được Tuyển Chọn Dành Cho Các Doanh Nghiệp Việt
              Nam. Thêm bài 85: Cách tự động đánh giá hiệu suất của nhiều Model
              Machine Learning cùng lúc Thêm bài 86: Chia sẻ tài liệu: + Cách
              viết CV chuyên nghiệp theo hướng dẫn từ Harvard + Tổng hợp tuyển
              chọn hơn 160 câu hỏi phỏng vấn DA, DE, DS bằng tiếng Anh. Nếu bạn
              đang có nhu cầu hoặc băn khoăn trong việc: Trang bị kiến thức xử
              lý dữ liệu lớn để làm các công việc Data Analyst, Data Scientist,
              Business Analyst,... Sinh viên hoặc người đi làm muốn xử lý dữ
              liệu để phục vụ cho các đồ án, dự án cá nhân. Lập trình viên, nhà
              phân tích hệ thống... muốn mở rộng kỹ năng phân tích dữ liệu bằng
              việc sử dụng Python Người làm việc trong lĩnh vực kinh doanh, tài
              chính cần kiến thức kỹ năng dữ liệu, trực quan hóa dữ liệu bằng
              biểu đồ, xây dựng model để dự đoán trong ngữ cảnh về tài chính,
              kinh doanh. Hoặc bạn là bất cứ ai đang cần kiến thức về việc ứng
              dụng ngôn ngữ Python trong việc xử lý dữ liệu. Thì khóa học THÀNH
              THẠO XỬ LÝ DỮ LIỆU VỚI PYTHON TỪ SỐ 0 - 2024 chính là câu trả lời
              cho các câu hỏi trên. Với hơn 80 videos bài giảng, được đúc kết từ
              những kiến thức làm việc thực tế với vai trò là Data Scientist và
              Giảng viên, đã được giảng dạy cho hàng trăm học viên khác nhau, kể
              cả online và offline, chúng tôi tin rằng đây là sẽ một khóa học
              chi tiết nhất và thực tiễn nhất của giảng viên Tâm mà bạn có thể
              tìm kiếm trên internet hiện nay. Đặc biệt, khóa học được thiết kế
              cho tất cả mọi người, mọi trình độ đều có thể học một cách dễ
              dàng, bất kể bạn đã có kiến thức lập trình trước đó hay chưa. Được
              chia làm 9 học phần tương ứng với 9 ngày học xuyên suốt từ những
              thứ cơ bản nhất đến việc thành thạo xử lý dữ liệu với Python, mỗi
              ngày bạn chỉ cần bỏ ra khoảng 2 tiếng và sau 9 ngày, bạn sẽ thành
              thạo
            </p>
          </div>
          <div className="flex-1 border rounded-lg shadow-sm p-5 h-fit">
            <div className="font-bold text-xl">Yêu cầu khóa học</div>
            <div>
              <ul className=" py-4 flex flex-col gap-2 ">
                <li>
                  - Khóa học này được chọn vào Udemy Vietnamese Private
                  Collection
                </li>
                <li>
                  - Khóa học này được chọn vào Udemy Vietnamese Private
                  Collection
                </li>
              </ul>
            </div>

            <div className="font-bold text-xl">Đối tượng khóa khóa học</div>
            <div>
              <ul className=" py-4 flex flex-col gap-2 ">
                <li>
                  - Khóa học này được chọn vào Udemy Vietnamese Private
                  Collection
                </li>
                <li>
                  - Khóa học này được chọn vào Udemy Vietnamese Private
                  Collection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* review */}

      <div className="w-content m-auto">
        <div className="font-bold text-3xl mb-4">Xếp hạng khóa học</div>
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
              placeholder="Đánh giá khóa học"
            ></textarea>
            <button className=" absolute top-[10px] right-[10px] bg-primary-500 text-white rounded-lg px-4 py-1 hover:bg-primary-600">
              Gửi đánh giá
            </button>
          </div>
        </div>
        <div className="py-5">
          <div className=" grid grid-cols-2 gap-5">
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
          </div>
          <div className="mt-5">
            <button className="border px-5 py-2 rounded-lg font-bold shadow-sm text-gray-700 hover:bg-gray-100">
              Hiện tất cả (325) đánh giá
            </button>
          </div>
        </div>
      </div>
      {/* khoa hoc noi bat */}
      <section className="w-content m-auto mb-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="font-bold text-3xl">Khóa học nổi bật</div>
          </div>
          <button className="flex items-center text-primary-500 gap-2">
            Xem tất cả <FaChevronRight />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-3 mt-5">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </section>
      {/* kh cua tac gia */}
      <section className="w-content m-auto mb-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="font-bold text-3xl">Khóa học của Mr Quynh</div>
          </div>
          <button className="flex items-center text-primary-500 gap-2">
            Xem tất cả <FaChevronRight />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-3 mt-5">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </section>
    </div>
  );
}

export default Detail;
