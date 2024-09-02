import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import ProductCollectItem from "../components/items/ProductCollectItem";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="flex flex-col gap-[72px] pt-[32px] ">
      <div className="w-content m-auto ">
        <div className="font-bold text-3xl mb-4">Giỏ hàng của bạn</div>
        <div className="flex gap-5">
          <div className="flex-1 ">
            <div className="flex flex-col gap-5">
              <div>
                <div className="border rounded-lg px-3 py-2 bg-gray-50 shadow-sm flex gap-2 items-center">
                  <div className="w-[48px] h-[48px] rounded-full border shadow-sm">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src="https://sharedp.com/wp-content/uploads/2024/06/cute-girl-pic-920x1024.jpg"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <div className="font-bold text-gray-700">
                      Giảng viên Nguyễn Văn Quynh
                    </div>
                    <a href="" className="text-sm text-primary-500">
                      Xem thêm
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-1 ">
                  <ProductCollectItem />
                  <ProductCollectItem />
                </div>
              </div>
              <div>
                <div className="border rounded-lg px-3 py-2 bg-gray-50 shadow-sm flex gap-2 items-center">
                  <div className="w-[48px] h-[48px] rounded-full border shadow-sm">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src="https://sharedp.com/wp-content/uploads/2024/06/cute-girl-pic-920x1024.jpg"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <div className="font-bold text-gray-700">
                      Giảng viên Nguyễn Văn Quynh
                    </div>
                    <a href="" className="text-sm text-primary-500">
                      Xem thêm
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-1 ">
                  <ProductCollectItem />
                </div>
              </div>
            </div>

            {/* pagination */}
            <div className="pb-5 pt-8 px-4">
              <div className="flex gap-1 justify-center">
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
          <div className="w-30 px-2 flex flex-col gap-3">
            <div>
              <div className="font-bold text-lg">
                Chọn phương thức thanh toán
              </div>
              <div className="flex flex-col gap-3 py-2">
                <div className="flex items-center gap-2 border p-2 rounded-lg shadow-sm bg-primary-50 border-primary-500 hover:bg-primary-50 cursor-pointer">
                  <div className="w-[24px] h-[24px] rounded-full object-cover border">
                    <img
                      width={24}
                      height={24}
                      src="https://img.mservice.com.vn/momo_app_v2/img/BIDV.png"
                      alt=""
                    />
                  </div>
                  <div>Thanh toán ngân hàng</div>
                </div>
                <div className="flex items-center gap-2 border p-2 rounded-lg shadow-sm hover:bg-primary-50 cursor-pointer">
                  <div className="w-[24px] h-[24px] rounded-full object-cover border">
                    <img
                      width={24}
                      height={24}
                      src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-MoMo-Circle.png"
                      alt=""
                    />
                  </div>
                  <div>Thanh toán bằng Momo</div>
                </div>
              </div>
            </div>

            <div>
              <div className="font-bold text-lg">
                Khuyến mãi
              </div>
              <div className="flex my-3 border border-primary-500 rounded-lg pl-2">
                <input type="text" placeholder="ABCVDF"  className="flex-1 text-primary-500 " />
                <button className="bg-primary-500 text-white font-sm rounded-lg py-2 px-3 hover:bg-primary-600">Áp dụng</button>
              </div>
              <div className="border rounded-lg shadow-sm">
                <div className="flex justify-between items-center text-sm px-3 py-3 ">
                    <div>Chọn mã khuyến mãi</div>
                    <FaChevronUp />
                </div>
                <div className="p-2 flex flex-col gap-2 bg-gray-50">
                    {/* item */}
                    <div className="border border-primary-500 rounded-xl p-3">
                        <div className="font-bold">Giảm 10 %</div>
                        <div className="flex justify-between items-center">
                            <div>Đơn tối thiểu 300.000 đ</div>
                            <div>
                                Mã: <span className="text-primary-500 font-bold">ADCGH</span>
                            </div>
                        </div>
                        <div className="text-sm mt-2 text-gray-600">
                            HSD: 31/12/2025
                        </div>
                    </div>
                    <div className="border border-primary-500 rounded-xl p-3">
                        <div className="font-bold">Giảm 10 %</div>
                        <div className="flex justify-between items-center">
                            <div>Đơn tối thiểu 300.000 đ</div>
                            <div>
                                Mã: <span className="text-primary-500 font-bold">ADCGH</span>
                            </div>
                        </div>
                        <div className="text-sm mt-2 text-gray-600">
                            HSD: 31/12/2025
                        </div>
                    </div>
                    <div className="border border-primary-500 rounded-xl p-3">
                        <div className="font-bold">Giảm 10 %</div>
                        <div className="flex justify-between items-center">
                            <div>Đơn tối thiểu 300.000 đ</div>
                            <div>
                                Mã: <span className="text-primary-500 font-bold">ADCGH</span>
                            </div>
                        </div>
                        <div className="text-sm mt-2 text-gray-600">
                            HSD: 31/12/2025
                        </div>
                    </div>
                </div>
              </div>
            </div>


            <div>
                <div className="font-bold text-xl mt-2">Thông tin đơn hàng</div>
                <div className="flex flex-col gap-2 my-2">
                    <div className="flex justify-between items-center">
                        <div className="text-gray-500">Số khóa học:</div>
                        <div className="text-gray-500">x 4</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-gray-500">Tạm tính:</div>
                        <div className="text-primary-500 font-bold">395.000 đ</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-gray-500">Khuyến mãi:</div>
                        <div className="text-gray-500 font-bold">395.000 đ</div>
                    </div>

                    <div className="flex justify-between items-center border-t pt-2">
                        <div className="text-gray-500 font-bold">Tổng cộng:</div>
                        <div className="text-primary-500 font-bold text-3xl">395.000 đ</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <Link to={"/checkout"} className="bg-primary-500 text-white text-center w-full py-2 rounded-lg hover:bg-primary-600">Thanh toán</Link>
                <button className="border text-center w-full py-2 rounded-lg border-gray-400 hover:bg-gray-50 shadow-sm">Thanh toán với doanh nghiệp</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
