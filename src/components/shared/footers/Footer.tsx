import { FaLocationDot } from "react-icons/fa6";
import logo from "../../../assets/logo/logo-new.png";
import { FaFacebook, FaPhone, FaTiktok, FaYoutube } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
function Footer() {
  return (
    <div className="w-full bg-gray-50">
      <div className="w-full px-5 xl:w-content m-auto">
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-5">
          <div>
            <div className="w-[158px]">
              <img src={logo} alt="" className="w-full h-full" />
            </div>
            <div className="mt-4 text-grey-900">
              Niềm hạnh phúc của chúng tôi là được chia sẻ những kiến thức đến
              mọi người.
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <div className="flex gap-2">
                <div className="text-primary-500">
                  <FaPhone />
                </div>
                <span>0358723520</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="text-primary-500">
                  <MdOutlineAttachEmail />
                </div>
                <span>quynh232000@gmail.com</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="text-primary-500">
                  <FaLocationDot />
                </div>
                <span>Quang Trung, Q.12, Tp.HCM</span>
              </div>
            </div>
          </div>
          <div>
            <div className="text-primary-500 uppercase text-lg font-bold pb-2">
              Về chúng tôi
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <div>Giới thiệu về Quin Course</div>
              <div>Câu hỏi thường gặp</div>
              <div>Hướng dẫn thanh toán</div>
              <div>Blog mới nhất</div>
              <div>Đơn vị liên kết phối hợp</div>
              <div>Cơi hội có việc làm sau khi học</div>
            </div>
          </div>
          <div>
            <div className="text-primary-500 uppercase text-lg font-bold pb-2">Hợp tác</div>
            <div className="mt-5 flex flex-col gap-3">
              <div>Đăng ký giản dạy</div>
              <div>Đạo tạo doanh nghiệp</div>
              <div>Chứng chỉ khóa học</div>
              <div>Đào tạo trực tuyến</div>
              <div>Đào tạo 1 kèm 1</div>
              <div>Ưu đãi hợp tác với chúng tôi</div>
            </div>
          </div>
          <div>
            <div className="text-primary-500 uppercase text-lg font-bold pb-2">
              Công ty cổ phẩn đào tạo trực tuyến Quin Course
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <div>
                Mã số thuế: <strong>345234332</strong>
              </div>
              <div>
                Ngày thành lập: <strong>02/09/2024</strong>
              </div>
              <div>
                Lĩnh vực hoạt động: Giáo dục, giảng dạy nhiều chuyên ngành.
                Chúng tôi tập chung xây dựng những sản phẩm giá trị cho cộng
                đồng.
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 border-t">
          <div className="flex items-center">
            <div className="flex justify-center items-center gap-4 text-sm text-gray-400">
              Quin Course &copy; 2024. All rights reserved. 
            </div>
            <div className="flex-1 ">
              <div className="flex items-center justify-end gap-4 text-[24px]">
                <div className="text-red-500">
                  <FaYoutube />
                </div>
                <div className="text-blue-700">
                  <FaFacebook />
                </div>
                <div>
                  <FaTiktok />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
