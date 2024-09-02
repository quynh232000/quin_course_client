// import { FaPlay } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import i_congraturation from "../../assets/images/congraturation.png";
// import { FaPlay } from "react-icons/fa";

function Learning() {
  return (
    <div className="flex w-full  absolute top-0 left-0 right-0 bottom-0 scrollbar_custom overflow-y-scroll">
      <div className="w-full  ">
        <div className=" relative">
          <div className=" absolute top-0 left-0 right-0 z-10 hidden">
            <img
              src={i_congraturation}
              alt=""
              className="w-full object-contain"
            />
          </div>
          <div className=" ">
            {/* view video */}
            <div className="h-[70vh] relative border-t-2 ">
              <video className="h-full w-full " controls>
                <source
                  src="https://docs.material-tailwind.com/demo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/KnxN-Um5p7c?si=2jfCYrV3z7uENJ_p"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe> */}
              {/* <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center hover:scale-110">
                <div className="bg-primary-500 p-5 rounded-full text-white text-3xl cursor-pointer shadow-sm">
                  <FaPlay />
                </div>
              </div> */}
            </div>
            <div className="py-8 px-12 flex justify-between">
              <div>
                <h4 className="font-bold text-3xl text-primary-900">
                  Xây dựng trang web với Reactjs
                </h4>
                <div className="flex mt-2 text-gray-600">
                  Ngày tạo:
                  <span>12/12/2024</span>
                </div>
              </div>
              <div>
                <button className="flex items-center gap-1 border rounded-lg px-5 py-2 bg-gray-100 shadow-sm border-gray-300 hover:bg-gray-200">
                  <GoPlus />
                  Thêm ghi chú tại <span className="font-bold ">02:23</span>
                </button>
              </div>
            </div>
          </div>
          {/* view question */}

          <div className="p-12 pt-8 hidden">
            <div className="p-8 shadow-sm border">
              <div className="font-bold text-2xl text-primary-900">
                Kiểm tra kiến thức của bạn về các phương phá thiết kế công bằng?
              </div>
              <div className="text-gray-600">Cập nhật 12/12/2024</div>
              <div>
                <div>
                  <div className="bg-primary-50 px-4 py-2 my-3 rounded-xl">
                    <p>const title = 'Hello Quin Course!'</p>
                    <p>{`const headngElement = <h1 style={ color: ‘ red ‘}>{title}</h1>`}</p>
                  </div>
                  <div className="py-3">
                    <div className="font-bold text-primary-900 text-lg">
                      Ý nghĩa của đoạn code trên là gì?
                    </div>
                    <div>Chọn câu trả lời đúng</div>

                    <div className="flex flex-col gap-2 mt-3">
                      <div className="p-4 border border-deep-orange-500 hover:bg-primary-50 cursor-pointer bg-red-100 rounded-xl font-bold text-primary-800">
                        Đoạn code trên không có ý nghĩa gì.
                      </div>
                      <div className="p-4 border border-green-500 hover:bg-primary-50 cursor-pointer bg-green-100 rounded-xl font-bold text-primary-800">
                        Đoạn code trên không có ý nghĩa gì.
                      </div>
                      <div className="p-4 border hover:bg-primary-50 cursor-pointer bg-gray-100 rounded-xl font-bold text-primary-800">
                        Tôi không biết câu trả lời..
                      </div>
                      <div className="p-4 border hover:bg-primary-50 cursor-pointer bg-gray-100 rounded-xl font-bold text-primary-800">
                        Đoạn code trên không có ý nghĩa gì.
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-3">
                    <button className="bg-primary-500 px-12 hover:bg-primary-600 rounded-lg py-2 text-white">
                      Trả lời
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-12  shadow-sm">
          <div className="flex border-t border-b">
            <div className="py-2 px-5 font-bold text-primary-500 bg-primary-50 w-fit border-b-2 cursor-pointer border-primary-500">
              Tổng quan
            </div>
            <div className="py-2 px-5 font-bold text-gray-700 hover:bg-gray-50 w-fit border-b-2 cursor-pointer border-transparent ">
              Ghi chú
            </div>
            <div className="py-2 px-5 font-bold text-gray-700 hover:bg-gray-50 w-fit border-b-2 cursor-pointer border-transparent">
              Hỏi đáp
            </div>
          </div>
          <div className="py-5">
            {/* content tong quan */}
            <div>
              <div className="flex border-b py-4">
                <div className="w-30 font-bold text-gray-500">
                  Nội dung bài học
                </div>
                <div>
                  <p>
                    Khóa học này được chọn vào Udemy Vietnamese Private
                    Collection - Bộ Sưu Tập Khóa Học Được Tuyển Chọn Dành Cho
                    Các Doanh Nghiệp Việt Nam. Thêm bài 85: Cách tự động đánh
                    giá hiệu suất của nhiều Model Machine Learning cùng lúc Thêm
                    bài 86: Chia sẻ tài liệu: Khóa học này được chọn vào Udemy
                    Vietnamese Private Collection - Bộ Sưu Tập Khóa Học Được
                    Tuyển Chọn Dành Cho Các Doanh Nghiệp Việt Nam.
                  </p>
                  <p>
                    Khóa học này được chọn vào Udemy Vietnamese Private
                    Collection - Bộ Sưu Tập Khóa Học Được Tuyển Chọn Dành Cho
                    Các Doanh Nghiệp Việt Nam. Thêm bài 85: Cách tự động đánh
                    giá hiệu suất của nhiều Model Machine Learning cùng lúc Thêm
                    bài 86: Chia sẻ tài liệu: Khóa học này được chọn vào Udemy
                    Vietnamese Private Collection - Bộ Sưu Tập Khóa Học Được
                    Tuyển Chọn Dành Cho Các Doanh Nghiệp Việt Nam.
                  </p>
                  <div>
                    <button className="border bg-gray-100 px-5 py-1 rounded-lg mt-2 shadow-md hover:shadow-none">
                      Xem thêm
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex border-b py-4">
                <div className="w-30 font-bold text-gray-500">
                  Bạn sẽ học được gì sau khóa học này?
                </div>
                <div>
                  <p>
                    Khóa học này được chọn vào Udemy Vietnamese Private
                    Collection - Bộ Sưu Tập Khóa Học Được Tuyển Chọn Dành Cho
                    Các Doanh Nghiệp Việt Nam. Thêm bài 85: Cách tự động đánh
                    giá hiệu suất của nhiều Model Machine Learning cùng lúc Thêm
                    bài 86: Chia sẻ tài liệu: Khóa học này được chọn vào Udemy
                    Vietnamese Private Collection - Bộ Sưu Tập Khóa Học Được
                    Tuyển Chọn Dành Cho Các Doanh Nghiệp Việt Nam.
                  </p>
                  <p>
                    Khóa học này được chọn vào Udemy Vietnamese Private
                    Collection - Bộ Sưu Tập Khóa Học Được Tuyển Chọn Dành Cho
                    Các Doanh Nghiệp Việt Nam. Thêm bài 85: Cách tự động đánh
                    giá hiệu suất của nhiều Model Machine Learning cùng lúc Thêm
                    bài 86: Chia sẻ tài liệu: Khóa học này được chọn vào Udemy
                    Vietnamese Private Collection - Bộ Sưu Tập Khóa Học Được
                    Tuyển Chọn Dành Cho Các Doanh Nghiệp Việt Nam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learning;
