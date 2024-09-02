
function ChangePassword() {
  return (
    <div className="px-5 ">
      <div className="font-bold text-xl">Đổi mật khẩu</div>

    

      <div className="flex flex-col gap-3 py-3">
        <div className="flex items-center">
            <label htmlFor="" className="w-15 font-bold text-primary-800">Mật khẩu cũ</label>
            <input type="text"  placeholder="" className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"/>
        </div>
        <div className="flex items-center">
            <label htmlFor="" className="w-15 font-bold text-primary-800">Mật khẩu mới</label>
            <input type="text"  placeholder="" className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"/>
        </div>
        <div className="flex items-center">
            <label htmlFor="" className="w-15 font-bold text-primary-800">Xác nhận</label>
            <input type="text"  placeholder="" className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"/>
        </div>
        
      </div>

      <div className="mt-5">
        <button className="py-2 px-8 bg-primary-500 text-white rounded-lg hover:bg-primary-600">Cập nhật</button>
      </div>
    </div>
  );
}

export default ChangePassword;
