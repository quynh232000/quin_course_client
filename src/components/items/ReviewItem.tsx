import { FaStar } from "react-icons/fa";

function ReviewItem() {
  return (
    <div className="py-3 border-b">
      <div className="flex gap-2 items-center">
        <div className="w-[64px] h-[64px] rounded-full">
          <img
            className="w-full h-full object-cover rounded-full border shadow-sm"
            src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-bold">Vũ Thị Thùy Trang</div>
          <div className="flex items-center gap-6">
            <div className="flex gap-1 text-sm text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="text-sm text-gray-500">12/08/2024</div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className=" text-primary-900">
          Khóa học này được chọn vào Udemy Vietnamese Private Collection - Bộ
          Sưu Tập Khóa Học Được Tuyển Chọn Dành Cho Các Doanh Nghiệp Việt Nam.
          Thêm bài 85: Cách tự động đánh giá hiệu suất của nhiều Model Machine
          Learning cùng lúc
        </div>
        
      </div>
     
    </div>
  );
}

export default ReviewItem;
