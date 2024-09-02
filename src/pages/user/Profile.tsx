
import { FaRegEdit } from "react-icons/fa";

function Profile() {
  return (
    <div className="px-5 ">
      <div className="font-bold text-xl">Hồ sơ của bạn</div>

      <div className="flex flex-col items-center py-5 ">
        <div className="w-[116px] h-[116px] border rounded-full shadow-sm">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
            alt=""
          />
        </div>
        <div className="font-bold mt-2 text-primary-900">Võ Hồng Nhung</div>
        <div className="flex justify-center items-center gap-2 text-primary-500 text-sm hover:cursor-pointer hover:text-primary-600">
          <FaRegEdit /> Chỉnh sửa
        </div>
      </div>

      <div className="flex flex-col gap-3 py-3">
        <div className="flex items-center">
            <label htmlFor="" className="w-15 font-bold text-primary-800">Email</label>
            <input type="text"  placeholder="quynh232000@gmail.com" className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"/>
        </div>
        <div className="flex items-center">
            <label htmlFor="" className="w-15 font-bold text-primary-800">Họ và tên</label>
            <input type="text"  placeholder="Nguyễn Văn Quynh" className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"/>
        </div>
        <div className="flex items-center">
            <label htmlFor="" className="w-15 font-bold text-primary-800">Địa chỉ</label>
            <input type="text"  placeholder="Q.12, Tp. HCM" className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"/>
        </div>
        <div className="flex items-center">
            <label htmlFor="" className="w-15 font-bold text-primary-800">Số điện thoại</label>
            <input type="text"  placeholder="03495344" className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"/>
        </div>
      </div>

      <div className="mt-5">
        <button className="py-2 px-8 bg-primary-500 text-white rounded-lg">Cập nhật thông tin</button>
      </div>
    </div>
  );
}

export default Profile;
