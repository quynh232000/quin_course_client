import {  useNavigate, useParams } from "react-router-dom";
import {  MBlog, Tag } from "../../types/app";
import { useEffect, useState } from "react";
import {
  SGetBlogByTag,
  SGetBlogs,
} from "../../services/CommonService";
import BlogTagItem from "../../components/items/BlogTagItem";
import DefaultSke from "../../components/skeleton/DefaultSke";
import BlogSiderBar from "../../components/items/BlogSiderBar";

function BlogTag() {
  const [blogs, setBlogs] = useState<MBlog[]>([]);
  
  const [tag, setTag] = useState<Tag | null>({
    id: 0,
    name: "Bài viết nổi bật",
    slug: "",
    description:
      "Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web.",
  });
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    if (slug) {
      SGetBlogByTag(slug).then((res) => {
        setLoading(false);
        if (res.status) {
          setBlogs(res.data.blogs);
          setTag(res.data.tag);
        } else {
          navigate("/error");
        }
      });
    } else {
      SGetBlogs("?limit=20").then((res) => {
        setLoading(false);
        if (res.status) {
          setBlogs(res.data);
        } else {
          navigate("/error");
        }
      });
    }

  }, [slug]);
 
  return (
    <div className=" w-full px-5 md:px-0 xl:w-content py-8 m-auto ">
      <div className="flex-1">
        <div className="font-bold text-2xl">{tag?.name}</div>
        <div className="py-8">{tag?.description ?? "__"}</div>
        <div className="flex gap-20 flex-col md:flex-row">
          <div className="flex flex-col gap-5 my-5 flex-1">
            {loading ? <DefaultSke />: blogs && blogs.length > 0 ? (
              blogs.map((item) => {
                return <BlogTagItem key={item.id} blog={item} />;
              })
            ) : (
              <div className="text-center text-deep-orange-500">
                Chưa có bài viết nào!
              </div>
            )}
          </div>
          <BlogSiderBar/>
        </div>
      </div>
    </div>
  );
}

export default BlogTag;
