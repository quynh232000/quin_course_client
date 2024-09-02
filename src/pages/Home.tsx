import { Carousel } from "@material-tailwind/react";
import banner1 from "../assets/banner/banner1-01.png";
import banner2 from "../assets/banner/banner3-01.png";
import logowhite from "../assets/logo/logo-white-text.png";
import { FaAnglesRight } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import ProductItem from "../components/items/ProductItem";
import i_sale from "../assets/banner/sale.png";
import i_teacher from "../assets/images/ads_teacher.png";
import i_business from "../assets/images/ads_business.png";
import i_ketnoi from "../assets/images/ketnoi.png";
import i_kynang from "../assets/images/kynang.png";
import TeacherItem from "../components/items/TeacherItem";
import TopicHomeItem from "../components/items/TopicHomeItem";
import NewsItem from "./../components/items/NewsItem";

const Home = () => {
  return (
    <div className="flex flex-col gap-[72px] py-[32px] ">
      <section className="w-content m-auto">
        <div className="w-full">
          <Carousel
            className="rounded-xl bg-primary-500"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <div className=" relative ">
              <img
                src={banner1}
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <div className=" absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-col">
                <div>
                  <img width={54} src={logowhite} alt="" />
                </div>
                <div className=" w-60 text-white px-[72px] mt-2 flex flex-col flex-1">
                  <div>
                    <h3 className=" uppercase font-bold text-[30px]">
                      Học tập hiệu quả cùng quin
                    </h3>
                    <span className="text-gray-300 line-clamp-2">
                      Quin là kênh học trực tuyến được biết đến rộng rãi trên
                      các nền tảng mạng xã hội, hỗ trợ đào tạo có cả 2 chương
                      trình dành cho người Việt và người dùng tiếng Anh.
                    </span>
                  </div>
                  <div className="flex-1 flex items-center ">
                    <button className="flex items-center gap-2 border border-primary-500 rounded-lg py-2 px-4 bg-white text-primary-500 font-bold shadow-lg">
                      <span>
                        <FaAnglesRight />
                      </span>
                      Mua khóa học
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" relative ">
              <img
                src={banner2}
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <div className=" absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-col">
                <div>
                  <img width={54} src={logowhite} alt="" />
                </div>
                <div className=" w-60 text-white px-[72px] mt-2 flex flex-col flex-1">
                  <div>
                    <h3 className=" uppercase font-bold text-[30px]">
                      Học tập hiệu quả cùng quin
                    </h3>
                    <span className="text-gray-300 line-clamp-2">
                      Quin là kênh học trực tuyến được biết đến rộng rãi trên
                      các nền tảng mạng xã hội, hỗ trợ đào tạo có cả 2 chương
                      trình dành cho người Việt và người dùng tiếng Anh.
                    </span>
                  </div>
                  <div className="flex-1 flex items-center ">
                    <button className="flex items-center gap-2 border border-primary-500 rounded-lg py-2 px-4 bg-white text-primary-500 font-bold shadow-lg">
                      <span>
                        <FaAnglesRight />
                      </span>
                      Mua khóa học
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="mt-8 w-full grid grid-cols-3 gap-3">
          <div className="border border-primary-500 p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="font-bold">Giảm 10%</div>
              <div>
                Mã: <span className="text-primary-500">QRCT2134S</span>
              </div>
            </div>
            <div className="my-1">
              Đơn tối thiểu: <span className="text-gray-900">300.000 đ</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm">
                HSD: <span>30/12/2024</span>
              </div>
              <button className="bg-primary-500 rounded-md text-sm py-0 px-4 text-white">
                Lưu
              </button>
            </div>
          </div>
          <div className="border border-primary-500 p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="font-bold">Giảm 10%</div>
              <div>
                Mã: <span className="text-primary-500">QRCT2134S</span>
              </div>
            </div>
            <div className="my-1">
              Đơn tối thiểu: <span className="text-gray-900">300.000 đ</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm">
                HSD: <span>30/12/2024</span>
              </div>
              <button className="bg-primary-500 rounded-md text-sm py-0 px-4 text-white">
                Lưu
              </button>
            </div>
          </div>
          <div className="border border-primary-500 p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="font-bold">Giảm 10%</div>
              <div>
                Mã: <span className="text-primary-500">QRCT2134S</span>
              </div>
            </div>
            <div className="my-1">
              Đơn tối thiểu: <span className="text-gray-900">300.000 đ</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm">
                HSD: <span>30/12/2024</span>
              </div>
              <button className="bg-primary-500 rounded-md text-sm py-0 px-4 text-white">
                Lưu
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* kh free */}
      <section className="w-content m-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="font-bold text-3xl">Khóa học miễn phí</div>
            <span className="bg-green-500 h-fit text-white text-sm py-1 px-4 rounded-tl-2xl rounded-br-2xl">
              Miễn phí
            </span>
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
      {/* kh sale */}
      <section className="w-content m-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="font-bold text-3xl">Khóa học Sale</div>
          </div>
          <button className="flex items-center text-primary-500 gap-2">
            Xem tất cả <FaChevronRight />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-3 mt-5">
          <div className="border rounded-lg shadow-sm">
            <img className="w-full object-cover" src={i_sale} alt="" />
          </div>
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </section>
      {/* kh popular */}
      <section className="w-content m-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="font-bold text-3xl">Khóa học phổ biến</div>
            <span className="bg-green-500 h-fit text-white text-sm py-1 px-4 rounded-tl-2xl rounded-br-2xl">
              Miễn phí
            </span>
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

      {/* become teacher */}
      <section className="bg-primary-50 py-5">
        <div className="w-content m-auto grid grid-cols-2">
          <div>
            <img
              className="w-full h-full object-cover"
              src={i_teacher}
              alt=""
            />
          </div>
          <div className="p-5">
            <div className=" uppercase text-4xl font-bold">
              Trở thành <span className="text-primary-500">Giảng viên</span>{" "}
              trên Quin Course
            </div>
            <span className="pt-2">
              Mang đến giá trị cho chính bạn và người khác. Chúng tôi cung cấp
              công cụ dạy những kỹ năng bạn yêu thích.
            </span>
            <div className="my-5 flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <div>
                  <img width={65} src={i_ketnoi} alt="" />
                </div>
                <div>
                  <div className="font-bold mb-1">
                    Cùng nhau kết nối, chia sẻ kiến thức
                  </div>
                  <span>
                    Kết nối, chia sẻ những kiến thức bổ ích cùng nhau phát
                    triển, cùng nhau xây dựng.
                  </span>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div>
                  <img width={65} src={i_kynang} alt="" />
                </div>
                <div>
                  <div className="font-bold mb-1">Hoàn thiện kỹ năng</div>
                  <span>
                    Hoàn thiện kỹ năng, kinh nghiệm nhiều hơn, sự va chạm của
                    chính bạn, thử thách chính bản thân để phát triển.
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-3">
              <button className="bg-primary-500 text-white py-2 px-24 rounded-lg hover:bg-primary-600">
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* teacher */}
      <section className="w-content m-auto">
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
      {/* chu de quan tam */}
      <section className="w-content m-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="font-bold text-3xl">Chủ đề quan tâm</div>
          </div>
          <button className="flex items-center text-primary-500 gap-2">
            Xem tất cả <FaChevronRight />
          </button>
        </div>
        <div className="grid grid-cols-6 gap-3 mt-5">
          <TopicHomeItem />
          <TopicHomeItem />
          <TopicHomeItem />
          <TopicHomeItem />
          <TopicHomeItem />
          <TopicHomeItem />
        </div>
      </section>
      {/* tin tuc */}
      <section className="w-content m-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="font-bold text-3xl">Tin tức mỗi ngày</div>
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

      {/* become business */}
      <section className="bg-primary-50 py-5">
        <div className="w-content m-auto grid grid-cols-2">
          <div className="p-5">
            <div className=" uppercase text-4xl font-bold">
              Khóa học với{" "}
              <span className="text-primary-500">doanh nghiệp</span>
              trên Quin Course
            </div>
            <div className="mt-2">
              Nâng cao ký năng của đội nhóm, cải thiện năng xuất làm việc hiệu
              quả cao, giúp doanh nghiệp của bạn phát triển hơn mỗi ngày
            </div>
            <div className="mt-4 w-full">
              <div className="font-bold mb-2 pt-2">Nhập email tư vấn</div>
              <div className="flex  gap-5 ">
                <div className="flex-1 rounded-lg">
                  <input
                    type="text"
                    placeholder="Nhập email.."
                    className="w-full py-2 px-3 rounded-lg"
                  />
                </div>
                <div className=" bg-primary-500 text-white py-2 px-8 rounded-lg">
                  Gửi
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-full h-full object-cover"
              src={i_business}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
