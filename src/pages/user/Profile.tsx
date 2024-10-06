import { FaRegEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { FormMartDateAgo } from "../../components/functions/tool";
import DefaultSke from "../../components/skeleton/DefaultSke";

function Profile() {
  const { user, isLogin } = useSelector(
    (state: RootState) => state.authReducer
  );
  const { currentUser } = useSelector((state: RootState) => state.appReducer);

  if (!currentUser || !user) {
    return <DefaultSke />;
  }
  return (
    <div className="px-5 ">
      <div className="font-bold text-xl">
        {isLogin ? "Hồ sơ của bạn" : "Thông tin cá nhân"}{" "}
      </div>
      <div className="flex flex-col items-center py-5 ">
        <div className="w-[116px] h-[116px] border rounded-full shadow-sm">
          <img
            className="w-full h-full object-cover rounded-full"
            src={
              currentUser
                ? currentUser.avatar_url
                : "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
            }
            alt=""
          />
        </div>
        <div className="font-bold mt-2 text-primary-900">
          {currentUser && currentUser.first_name + " " + currentUser.last_name}
        </div>

        <div className="flex justify-center items-center gap-2 text-primary-500 text-sm hover:cursor-pointer hover:text-primary-600">
          <FaRegEdit /> Chỉnh sửa
        </div>
      </div>

      <div className="flex flex-col gap-3 py-3">
        <div className="flex flex-col md:flex-row md:items-center">
          <label htmlFor="" className="w-15 font-bold text-primary-800">
            Email
          </label>
          <div className="flex flex-1 gap-5">
            <div className="border py-2 px-3 rounded-lg focus:border-primary-500 w-50">
              {currentUser.email}
            </div>
            <div className="flex items-center gap-2 justify-center flex-1 ">
              <span>Trạng thái:</span>

              <div className="text-sm relative text-success-500 font-bold bg-success-50 px-2 py-1 rounded-full flex">
                Đang hoạt động
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label htmlFor="" className="w-15 font-bold text-primary-800">
            Họ đệm
          </label>
          <input
            type="text"
            placeholder="Nguyễn Văn Quynh"
            defaultValue={currentUser.first_name}
            className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label htmlFor="" className="w-15 font-bold text-primary-800">
            Tên
          </label>
          <input
            type="text"
            placeholder="Nguyễn Văn Quynh"
            defaultValue={currentUser.last_name}
            className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label htmlFor="" className="w-15 font-bold text-primary-800">
            Số điện thoại
          </label>
          <input
            type="text"
            placeholder="Cập nhật"
            defaultValue={currentUser.phone_number}
            className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label htmlFor="" className="w-15 font-bold text-primary-800">
            Vai trò:
          </label>
          <div className=" py-2 px-3 flex-1 rounded-lg focus:border-primary-500 flex gap-2">
            {currentUser.roles.map((item) => {
              return (
                <span
                  className="border px-2 rounded-lg text-primary-500 bg-primary-50 text-sm py-1"
                  key={item}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label htmlFor="" className="w-15 font-bold text-primary-800">
            Tham gia vào:
          </label>
          <div className=" py-2 px-3 flex-1 rounded-lg focus:border-primary-500">
            {FormMartDateAgo(currentUser.created_at)}
          </div>
        </div>
      </div>
      {currentUser.id == user.id && (
        <div className="mt-5">
          <button className="py-2 px-8 bg-primary-500 text-white rounded-lg">
            Cập nhật thông tin
          </button>
        </div>
      )}

      <div className="mt-5 border-t-2 pt-5">
        <div className="font-bold text-xl">Thông tin mạng xã hội</div>
        <span className="text-sm text-gray-600">
          Quản lý liên kết tới các trang mạng xã hội của bạn
        </span>
        <div className="flex flex-col gap-3 mt-5">
          {currentUser &&
          currentUser.socials &&
          currentUser.socials.length > 0 ? (
            currentUser.socials.map((item) => {
              return (
                <div className="flex flex-col md:flex-row md:items-center" key={item.id}>
                  <label htmlFor="" className="w-15 font-bold text-primary-800">
                    {item.name}
                  </label>
                  <input
                    type="text"
                    placeholder="Cập nhật"
                    defaultValue={item.url}
                    className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"
                  />
                </div>
              );
            })
          ) : (
            <>cap nhat</>
          )}
        </div>
        {currentUser.id == user.id && (
          <div className="mt-5">
            <button className="py-2 px-8 bg-primary-500 text-white rounded-lg">
              Cập nhật thông tin
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
