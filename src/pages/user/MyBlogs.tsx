import { useEffect, useState } from "react";
import BlogSiderBar from "../../components/items/BlogSiderBar";
import { MBlog } from "../../types/app";
import { SMyBlogs } from "../../services/CommonService";
import DefaultSke from "../../components/skeleton/DefaultSke";
import BlogSavedItem from "../../components/items/BlogSavedItem";
import { Link } from "react-router-dom";
import BtnBack from "../../components/compoment/BtnBack";

function MyBlogs() {
  const [blogs, setBlogs] = useState<MBlog[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    SMyBlogs('?page=1').then((res) => {
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
          <BtnBack/>
          <div className="font-bold text-xl py-8">Bài viết của tôi</div>
        </div>
        <div className="border-b flex">
          <div className="border-b-2 w-fit font-bold cursor-pointer py-2 border-primary-500 text-primary-500 px-5">
            Tất cả
          </div>
          {/* <div className="border-b-2 w-fit font-bold cursor-pointer py-2 border-transparent text-gray-500 hover:text-gray-600 px-5">
            Bản nháp (2)
          </div> */}
        </div>
        <div className="flex flex-col md:flex-row gap-20">
          <div className="flex flex-col gap-5 my-5 flex-1">
            {loading ? (
              <DefaultSke />
            ) : blogs && blogs.length > 0 ? (
              blogs.map((item) => {
                return <BlogSavedItem key={item.id} blog={item} type='edit'/>;
              })
            ) : (
              <div className=" flex flex-col gap-2">
                <div>Bạn chưa có bài viết nào!</div>
                <div>
                  Bấm vào đây để
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

export default MyBlogs;
