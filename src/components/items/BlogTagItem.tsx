
import { MBlog } from "../../types/app";
import { Link } from "react-router-dom";
import { FormMartDateAgo } from "../functions/tool";
import SaveShare from "./SaveShare";
type props = {
  blog: MBlog;
};
function BlogTagItem({ blog }: props) {
  return (
    <div className="border rounded-2xl shadow  p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-[26px] h-[26px]">
            <img
              className="w-full h-full rounded-full object-cover"
              src={blog.user.avatar_url}
              alt=""
            />
          </div>
          <Link to={"/account/@" + blog.user.username} className="text-sm">
            {blog.user.first_name + " " + blog.user.last_name}
          </Link>
        </div>
        <SaveShare blog={blog}/>
      </div>
      <div className="mt-5 flex gap-5 ">
        <div className="flex-1">
          <Link to={"/blog/"+blog.slug}>
            <h2 className=" line-clamp-2 font-bold text-lg hover:text-primary-800">{blog.title}</h2>
          </Link>
          <div className="line-clamp-3 py-2">
            {blog.subtitle ??<div className="text-sm text-gray-400 text-center">--Đang cập nhật--</div>}
          </div>
          <div className="text-sm text-gray-500 mt-1">{FormMartDateAgo(blog.updated_at)}</div>
        </div>
        <div className="w-[200px]">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={blog.thumbnail_url}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default BlogTagItem;
