import { useEffect, useState } from "react";
import BlogSiderBar from "../../components/items/BlogSiderBar";
import { MBlog } from "../../types/app";
import { SMyBlogSaved } from "../../services/CommonService";
import DefaultSke from "../../components/skeleton/DefaultSke";
import BlogSavedItem from "../../components/items/BlogSavedItem";
import { Link } from "react-router-dom";
import BtnBack from "../../components/compoment/BtnBack";

function SavedBlog() {
  const [blogs, setBlogs] = useState<MBlog[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    SMyBlogSaved().then((res) => {
      setLoading(false);
      if (res.status) {
        setBlogs(res.data);
      }
    });
  }, []);

  return (
    <div className="w-full px-5 xl:px-0 xl:w-content py-8 m-auto">
      <div className="flex-1">
        <div>
          <BtnBack />
          <div className="font-bold text-xl py-8">Bài viết đã lưu</div>
        </div>
        <div className="flex gap-20 flex-col md:flex-row">
          <div className="flex flex-col gap-5 my-5 flex-1">
            {loading ? (
              <DefaultSke />
            ) : blogs && blogs.length > 0 ? (
              blogs.map((item) => {
                return <BlogSavedItem key={item.id} blog={item} />;
              })
            ) : (
              <div className=" flex flex-col gap-2">
                <div>Bạn chưa có bài viết nào!</div>
                <div>
                  Bấm vào đây để{" "}
                  <Link to={"/blogs"} className="text-primary-500">
                    Xem các bài viết nổi bật
                  </Link>
                </div>
              </div>
            )}
          </div>
          <BlogSiderBar />
        </div>
      </div>
    </div>
  );
}

export default SavedBlog;
