import { FaChevronRight, FaFacebookF, FaStar, FaTiktok, FaYoutube } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import i_teach_1 from "../assets/images/teacher_a_1.png";
import i_teach_2 from "../assets/images/teacher_a_2.png";
import i_teach_3 from "../assets/images/teacher_a_3.png";
import i_teach_4 from "../assets/images/teacher_a_4.png";
import ProductItem from "../components/items/ProductItem";
import NewsItem from "../components/items/NewsItem";
import ReviewItem from "../components/items/ReviewItem";
import i_banner_teacher from "../assets/images/banner_teacher.png"
function Teacher() {
  return (
    <div className="flex flex-col gap-[72px] pb-[32px] ">
    
      <div className={` text-white bg-[url('${i_banner_teacher}')] bg-contain bg-center  `} >
        <div className={`w-content m-auto py-16 flex gap-5 pl-5`} style={{ background: `url(${i_banner_teacher})` }}>
          <div className="w-[308px] h-[207px] rounded-xl shadow-sm border border-gray-700 ">
            <img
              className="w-full h-full rounded-lg object-cover"
              src="https://avatars.githubusercontent.com/u/97020966?v=4"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <h4 className="font-bold text-3xl">Nguyễn Văn Quynh</h4>
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
            <div>CEO công ty Việt thành Leader team maketing.</div>
            <div className="flex gap-16 items-center mt-5">
              <div className="flex gap-2">
                <div className="border rounded-md p-1">
                  <FaTiktok />
                </div>
                <div className="border rounded-md p-1">
                  <FaFacebookF />
                </div>
                <div className="border rounded-md p-1">
                  <FaYoutube />
                </div>
              </div>
              <button className="border py-1 text-sm px-3 rounded-lg flex items-center gap-1">
                <RiMessage3Fill /> Tin nhắn
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* banner */}
      <div className="w-content m-auto grid grid-cols-4 gap-4">
        <div className="border shadow-sm rounded-xl p-3 flex justify-between">
          <div className="w-[78px] h-[78px] rounded-full bg-primary-50 flex items-center p-4 justify-center">
            <img
              src={i_teach_1}
              alt=""
              className="w-full  h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-end gap-1 justify-center">
            <div className="font-bold text-primary-800 text-3xl">300</div>
            <div className="text-primary-500 font-bold">Tổng số học viên</div>
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
            <div className="font-bold text-primary-800 text-3xl">300</div>
            <div className="text-primary-500 font-bold">Tổng số đánh giá</div>
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
            <div className="font-bold text-primary-800 text-3xl">300</div>
            <div className="text-primary-500 font-bold">Tổng số khóa học</div>
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
            <div className="font-bold text-primary-800 text-3xl">300</div>
            <div className="text-primary-500 font-bold">Kết nối tổ chức</div>
          </div>
        </div>
      </div>
      {/* teacher info */}
      <div className="bg-white">
        <div className="w-content m-auto">
          <div className="font-bold text-3xl mb-4">Giới thiệu giảng viên</div>
          <div className="flex gap-8">
            <div className="flex-1">
              Nếu bạn đang có nhu cầu hoặc băn khoăn trong việc: Trang bị kiến
              thức xử lý dữ liệu lớn để làm các công việc Data Analyst, Data
              Scientist, Business Analyst,... Sinh viên hoặc người đi làm muốn
              xử lý dữ liệu để phục vụ cho các đồ án, dự án cá nhân. Lập trình
              viên, nhà phân tích hệ thống... muốn mở rộng kỹ năng phân tích dữ
              liệu bằng việc sử dụng Python Người làm việc trong lĩnh vực kinh
              doanh, tài chính cần kiến thức kỹ năng dữ liệu, trực quan hóa dữ
              liệu bằng biểu đồ, xây dựng model để dự đoán trong ngữ cảnh về tài
              chính, kinh doanh. Hoặc bạn là bất cứ ai đang cần kiến thức về
              việc ứng dụng ngôn ngữ Python trong việc xử lý dữ liệu. Thì khóa
              học THÀNH THẠO XỬ LÝ DỮ LIỆU VỚI PYTHON TỪ SỐ 0 - 2024 chính là
              câu trả lời cho các câu hỏi trên. Với hơn 80 videos bài giảng,
              được đúc kết từ những kiến thức làm việc thực tế với vai trò là
              Data Scientist và Giảng viên, đã được giảng dạy cho hàng trăm học
              viên khác nhau, kể cả online và offline, chúng tôi tin rằng đây là
              sẽ một khóa học chi tiết nhất và thực tiễn nhất của giảng viên Tâm
              mà bạn có thể tìm kiếm trên internet hiện nay.
            </div>
            <div>
              <div className="border-2 border-gray-500 bg-primary-100 rounded-lg overflow-hidden p-1">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/wqPLXRtr6zM?si=XdwQ23LTbN46qDRf"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* khoa hoc */}
      <section className="w-content m-auto mb-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="font-bold text-3xl">Khóa học của tác giả</div>
            
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
      {/* bang tin */}
      <section className="w-content m-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="font-bold text-3xl">Bảng tin của tác giả</div>
          </div>
          <button className="flex items-center text-primary-500 gap-2">
            Xem tất cả <FaChevronRight />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-5">
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
      </section>
      {/* danh gia tac gia */}
      <div className="w-content m-auto">
        <div className="font-bold text-3xl mb-4">Xếp hạng của giảng viên Mr Quynh</div>
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
            <button className="border px-5 py-2 rounded-lg font-bold shadow-sm text-gray-700 hover:bg-gray-100">Hiện tất cả (325) đánh giá</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
