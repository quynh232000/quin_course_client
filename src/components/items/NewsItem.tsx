import { Link } from "react-router-dom";
import { MBlog } from "../../types/app";
import { FormatDate } from "../functions/tool";
import { useTranslation } from "react-i18next";

type props={
  blog:MBlog
}
const NewsItem = ({blog}:props) => {
  const {t} = useTranslation()
  return (
    <div className="border rounded-2xl  overflow-hidden  flex shadow-lg">
      <div className="w-[200px] h-[160px] rounded-tl-2xl bg-primary-50 px-2 shadow-md">
        <img
          className="w-full h-full object-contain"
          src={blog.thumbnail_url??"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwUQnDtWpWnAyufSBIAb6yoi6APnRYkUIA5A&s"}
          alt={blog.title}
        />
      </div>
      <div className="p-3 flex-1 flex flex-col">
        <div>
          <Link to={'/blog/'+blog.slug}><h4 className="font-bold line-clamp-3 hover:text-primary-600">
           {blog.title}
          </h4></Link>
          <div className="mt-2">
           {t('home.date_create')}: <span className="text-gray-500 ">{FormatDate(blog.created_at)}</span>
          </div>
        </div>
        <Link to={'/blog/'+blog.slug} className="flex-1 flex items-end justify-end">
            <button className="text-primary-500 border border-primary-500 py-1 px-4 rounded-lg hover:bg-primary-50">{t('home.see_more')}</button>
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
