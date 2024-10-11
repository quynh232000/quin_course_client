import { Link } from "react-router-dom";
import { MTeacher } from "../../types/app";
import { useTranslation } from "react-i18next";

type props= {
  teacher:MTeacher
}
function TeacherItem({teacher}:props) {
  const {t} = useTranslation()
  return (
    <Link to={"/teacher/@"+teacher.username} className="border rounded-lg p-3 flex flex-col items-center ">
      <div className="flex justify-center">
        <div className=" md:w-[170px] md:h-[170px] w-[80px] h-[80px] rounded-full border">
          <img
            className=" object-cover w-full h-full rounded-full"
            src={teacher.avatar_url ??"https://cdn.pixabay.com/photo/2020/03/17/12/02/vietnam-4940070_1280.jpg"}
            alt=""
          />
        </div>
      </div>
      <div className="mt-1 font-bold hover:text-primary-700">{teacher.first_name+" "+teacher.last_name}</div>
      <div className="text-center text-gray-500 text-sm mt-3">{teacher.teacher_info.major ??'--'}</div>
      <div className="text-center text-gray-500 text-sm mt-3">{teacher.teacher_info.position??t('home.updating')}</div>
    </Link>
  );
}

export default TeacherItem;
