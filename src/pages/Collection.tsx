import { FaChevronDown, FaChevronRight, FaFilter } from "react-icons/fa";
import ProductItem from "../components/items/ProductItem";
import TeacherItem from "../components/items/TeacherItem";
import { IoMdInformationCircle } from "react-icons/io";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import ProductCollectItem from "../components/items/ProductCollectItem";
function Collection() {
  return (
    <div className="">
      <div className="w-content m-auto flex flex-col gap-[72px] py-[32px] ">
        {/* kh free */}
        <section className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="font-bold text-3xl">Khóa học miễn phí</div>
            </div>
          </div>
          <div className="border-b flex">
            <div className="py-2 px-8 text-primary-500 border-b-2 border-primary-500 w-fit">
              Phổ biến
            </div>
            <div className="py-2 px-8  border-b-2 border-transparent w-fit">
              Mới nhất
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 mt-5">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </section>
        {/* teacher */}
        <section className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="font-bold text-3xl">Giảng viên tiêu biểu</div>
            </div>
            <button className="flex items-center text-primary-500 gap-2">
              Xem tất cả <FaChevronRight />
            </button>
          </div>
          <div className="grid grid-cols-5 gap-3 mt-5">
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
          </div>
        </section>
        {/* filter */}
        <section>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="font-bold text-3xl">Tất cả khóa học</div>
            </div>
            <button className="flex items-center text-primary-500 gap-2 border border-primary-500 py-2 px-4 hover:bg-primary-50 rounded-lg">
              <FaFilter /> Sắp xếp theo <FaChevronDown />
            </button>
          </div>
          <div className="flex gap-2 items-center border py-2 px-2 rounded-lg my-3 font-bold">
            <IoMdInformationCircle /> Bạn không biết chắc? Tất cả khóa học đều
            được đảm bảo hoàn tiền trong 7 ngày.
          </div>
          <div className="flex gap-4">
            <div className="w-30">
              <div>
                <div className="font-bold border-t border-b bg-gray-50 p-2 px-3 flex items-center gap-2">
                  <FaAnglesRight />
                  Xếp hạng
                </div>
                <div className="flex flex-col  py-2 ">
                  <div className="flex items-center gap-2 text-sm py-2 px-3 bg-primary-50">
                    <input type="radio" />
                    <div>
                      Từ <span className="text-orange-500">4.5 sao</span> trở
                      lên
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm py-2 px-3 ">
                    <input type="radio" />
                    <div>
                      Từ <span className="text-orange-500">4.5 sao</span> trở
                      lên
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm py-2 px-3 ">
                    <input type="radio" />
                    <div>
                      Từ <span className="text-orange-500">4.5 sao</span> trở
                      lên
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm py-2 px-3 ">
                    <input type="radio" />
                    <div>
                      Từ <span className="text-orange-500">4.5 sao</span> trở
                      lên
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-bold border-t border-b bg-gray-50 p-2 px-3 flex items-center gap-2">
                  <FaAnglesRight />
                  Cấp độ
                </div>
                <div className="flex flex-col  py-2 ">
                  <div className="flex items-center gap-2 text-sm py-2 px-3 ">
                    <input type="radio" />
                    <div>Sơ cấp</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm py-2 px-3 ">
                    <input type="radio" />
                    <div>Trung cấp</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm py-2 px-3 ">
                    <input type="radio" />
                    <div>Chuyên gia</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm py-2 px-3 ">
                    <input type="radio" />
                    <div>Tất cả trình độ</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-bold border-t border-b bg-gray-50 p-2 px-3 flex items-center gap-2">
                  <FaAnglesRight />
                  Thời lượng video
                </div>
                <div className="flex flex-col  py-2 ">
                  <div className="flex items-center gap-2 text-sm py-2 px-3 ">
                    <input type="radio" />
                    <div>0 -1 giờ (234)</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm py-2 px-3 ">
                    <input type="radio" />
                    <div>0 -1 giờ (234)</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm py-2 px-3 ">
                    <input type="radio" />
                    <div>0 -1 giờ (234)</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm py-2 px-3 ">
                    <input type="radio" />
                    <div>0 -1 giờ (234)</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-bold border-t border-b bg-gray-50 p-2 px-3 flex items-center gap-2">
                  <FaAnglesRight />
                  Ngôn ngữ
                </div>
                <div className="flex flex-col  py-2 ">
                  <div className="flex items-center gap-2 text-sm py-2 px-3 ">
                    <input type="radio" />
                    <div>Tiếng Việt</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm py-2 px-3 ">
                    <input type="radio" />
                    <div>Tiếng Anh</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-bold border-t border-b bg-gray-50 p-2 px-3 flex items-center gap-2">
                  <FaAnglesRight />
                  Giá
                </div>
                <div className="flex flex-col  py-2 ">
                  <div className="flex items-center gap-2 text-sm py-2 px-3 ">
                    <input type="radio" />
                    <div>Có trả phí</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm py-2 px-3 ">
                    <input type="radio" />
                    <div>Miễn phí</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gray-50">
              <div className="flex-1">
                <ProductCollectItem />
                <ProductCollectItem />
                <ProductCollectItem />
                <ProductCollectItem />
              </div>
              <div className="pb-5 pt-8 px-4">
                <div className="flex gap-1 justify-end">
                  <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary-50 font-bold cursor-pointer hover:bg-primary-500 hover:text-white text-primary-500">
                    <FaAnglesLeft />
                  </div>
                  <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary-500 font-bold text-white">
                    1
                  </div>
                  <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary-50 font-bold cursor-pointer hover:bg-primary-500 hover:text-white text-primary-500">
                    2
                  </div>
                  <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary-50 font-bold cursor-pointer hover:bg-primary-500 hover:text-white text-primary-500">
                    3
                  </div>
                  <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary-50 font-bold cursor-pointer hover:bg-primary-500 hover:text-white text-primary-500">
                    <FaAnglesRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Collection;
