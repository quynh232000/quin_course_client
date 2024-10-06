import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MBanner, Tag } from "../../types/app";
import { SGetBanners, SGetTags } from "../../services/CommonService";
import DefaultSke from "../skeleton/DefaultSke";
function BlogSiderBar() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [banners, setBanners] = useState<MBanner[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    SGetTags().then((res) => {
      setLoading(false);
      if (res.status) {
        setTags(res.data);
      }
    });
    SGetBanners("?placement=blogtag").then((res) => {
      if (res.status) {
        setBanners(res.data);
      }
    });
  }, []);
  if (loading) {
    return (
      <div className="w-30 my-5">
        <DefaultSke />
      </div>
    );
  }
  return (
    <div className="w-full md:w-30 my-5">
      <div className="font-bold text-gray-500">CHỦ ĐỀ NỔI BẬT KHÁC</div>
      <div className="mt-4 flex flex-wrap gap-3">
        {tags.length > 0 &&
          tags.map((item) => {
            return (
              <Link
                to={"/blogs/tag/" + item.slug}
                key={item.id}
                className="bg-gray-50 hover:bg-gray-100 w-fit py-2 px-5 rounded-full text-sm font-bold shadow"
              >
                {item.name}
              </Link>
            );
          })}
      </div>
      <div className="py-8 mt-5 flex flex-col gap-4">
        {banners.length > 0 &&
          banners.map((item) => {
            return (
              <Link
                to={item.link_to}
                target="_blank"
                key={item.id}
                className="w-full"
              >
                <img
                  src={item.banner_url}
                  className="w-full h-full object-cover rounded-xl"
                  alt={item.alt}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default BlogSiderBar;
