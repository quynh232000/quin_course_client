import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { FormMartDateAgo } from "../../components/functions/tool";
import DefaultSke from "../../components/skeleton/DefaultSke";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { SUpdateProfile, SUpdateSocial } from "../../services/UserService";
import { setUser } from "../../redux/reducers/authReducer";
import { UpdateSocial } from "../../types/user";

function Profile() {
  const { t } = useTranslation();
  const dispath = useDispatch();
  const { user, isLogin } = useSelector(
    (state: RootState) => state.authReducer
  );
  const { currentUser } = useSelector((state: RootState) => state.appReducer);

  const [imagePreview, setImagePreview] = useState<string>(
    currentUser.avatar_url
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [first_name, setFirst_name] = useState(currentUser.first_name);
  const [last_name, setlast_name] = useState(currentUser.last_name);
  const [phone_number, setphone_number] = useState(currentUser.phone_number);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [dataSocial, setDataSocial] = useState<UpdateSocial>(
    new UpdateSocial()
  );
  useEffect(() => {
    setFirst_name(currentUser.first_name);
    setlast_name(currentUser.last_name);
    setphone_number(currentUser.phone_number);
    setImagePreview(currentUser.avatar_url);
    setDataSocial({
      facebook:
        currentUser.socials.find((i) => i.type == "facebook")?.url ?? "",
      youtube: currentUser.socials.find((i) => i.type == "youtube")?.url ?? "",
      zalo: currentUser.socials.find((i) => i.type == "zalo")?.url ?? "",
    });
  }, [currentUser]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview("");
    }
  };

  const handleUpdateProfile = () => {
    if (first_name == "" || last_name == "") {
      return false;
    }
    const formData = new FormData();
    if (currentUser.first_name != first_name) {
      formData.append("first_name", first_name);
    }
    if (currentUser.last_name != last_name) {
      formData.append("last_name", last_name);
    }
    if (currentUser.phone_number != phone_number) {
      formData.append("phone_number", phone_number);
    }
    if (selectedFile) {
      formData.append("avatar_url", selectedFile, selectedFile.name);
    }
    setUpdateLoading(true);
    SUpdateProfile(formData).then((res) => {
      setUpdateLoading(false);
      if (res.status) {
        // asdasd
        dispath(setUser(res.data));
      }
    });
  };
  // update social

  const [socialLoading, setSocialLoading] = useState(false);

  const handleUpdateSocial = () => {
    if (
      dataSocial.facebook == "" &&
      dataSocial.youtube == "" &&
      dataSocial.zalo == ""
    ) {
      return false;
    }
    setSocialLoading(true);
    SUpdateSocial(dataSocial).then((res) => {
      setSocialLoading(false);
      if (res.status) {
        // asdasd
      }
    });
  };

  if (!currentUser || !user) {
    return <DefaultSke />;
  }
  return (
    <div className="px-5 ">
      <div className="font-bold text-xl">
        {isLogin ? t("profile.p.t1") : t("profile.p.t2")}
      </div>
      <div className="flex flex-col items-center py-5 ">
        <div className="w-[116px] h-[116px] border rounded-full shadow-sm">
          <img
            className="w-full h-full object-cover rounded-full"
            src={
              currentUser
                ? imagePreview
                : "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
            }
            alt=""
          />
        </div>
        <div className="font-bold mt-2 text-primary-900">
          {currentUser && first_name + " " + last_name}
        </div>
        {user.id == currentUser.id && (
          <label
            htmlFor="avatar"
            className="flex justify-center items-center gap-2 text-primary-500 text-sm hover:cursor-pointer hover:text-primary-600"
          >
            <FaRegEdit /> {t("profile.p.t3")}
            <input onChange={handleFileChange} type="file" id="avatar" hidden />
          </label>
        )}
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
              <span>{t("profile.p.t4")}:</span>

              <div className="text-sm relative text-success-500 font-bold bg-success-50 px-2 py-1 rounded-full flex">
                {t("profile.p.t5")}
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
            {t("profile.p.t6")}
          </label>
          <input
            type="text"
            placeholder="Aa"
            defaultValue={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label htmlFor="" className="w-15 font-bold text-primary-800">
            {t("profile.p.t7")}
          </label>
          <input
            type="text"
            placeholder="Nguyễn Văn Quynh"
            defaultValue={last_name}
            onChange={(e) => setlast_name(e.target.value)}
            className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label htmlFor="" className="w-15 font-bold text-primary-800">
            {t("profile.p.t8")}
          </label>
          <input
            type="text"
            placeholder="--"
            defaultValue={phone_number}
            onChange={(e) => setphone_number(e.target.value)}
            className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label htmlFor="" className="w-15 font-bold text-primary-800">
            {t("profile.p.t9")}:
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
            {t("profile.p.t10")}:
          </label>
          <div className=" py-2 px-3 flex-1 rounded-lg focus:border-primary-500">
            {FormMartDateAgo(currentUser.created_at)}
          </div>
        </div>
      </div>
      {currentUser.id == user.id && (
        <div className="mt-5">
          {updateLoading ? (
            <button
              disabled
              className="py-2 px-8 bg-primary-300 text-white cursor-not-allowed rounded-lg"
            >
              {t("profile.p.t11")}
            </button>
          ) : (
            <button
              onClick={handleUpdateProfile}
              className="py-2 px-8 bg-primary-500 text-white rounded-lg"
            >
              {t("profile.p.t11")}
            </button>
          )}
        </div>
      )}

      <div className="mt-5 border-t-2 pt-5">
        <div className="font-bold text-xl"> {t("profile.p.t12")}</div>
        <span className="text-sm text-gray-600">{t("profile.p.t13")}</span>
        <div className="flex flex-col gap-3 mt-5">
          <div className="flex flex-col gap-3 mb-5">
            <div className="flex flex-col md:flex-row md:items-center">
              <label htmlFor="" className="w-15 font-bold text-primary-800">
                FaceBook
              </label>
              <input
                type="text"
                placeholder="Cập nhật"
                value={dataSocial.facebook}
                onChange={(e) =>
                  setDataSocial({ ...dataSocial, facebook: e.target.value })
                }
                className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center">
              <label htmlFor="" className="w-15 font-bold text-primary-800">
                Youtube
              </label>
              <input
                type="text"
                placeholder="Cập nhật"
                value={dataSocial.youtube}
                onChange={(e) =>
                  setDataSocial({ ...dataSocial, youtube: e.target.value })
                }
                className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center">
              <label htmlFor="" className="w-15 font-bold text-primary-800">
                Zalo
              </label>
              <input
                type="text"
                placeholder="Cập nhật"
                value={dataSocial.zalo}
                onChange={(e) =>
                  setDataSocial({ ...dataSocial, zalo: e.target.value })
                }
                className="border py-2 px-3 flex-1 rounded-lg focus:border-primary-500"
              />
            </div>
          </div>
        </div>
        {currentUser.id == user.id && (
          <div className="mt-5 ">
            {socialLoading ? (
              <button
                disabled
                className="py-2 px-8 bg-primary-300 text-white cursor-not-allowed rounded-lg"
              >
                {t("profile.p.t11")}
              </button>
            ) : (
              <button
                onClick={handleUpdateSocial}
                className="py-2 px-8 bg-primary-500 text-white rounded-lg"
              >
                {t("profile.p.t11")}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
