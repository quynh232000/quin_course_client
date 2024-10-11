import { MBlog } from "../../types/app";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FormMartDateAgo } from "../functions/tool";
import { SDeleteBlog, SSaveBlog } from "../../services/CommonService";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
type props = {
  blog: MBlog;
  type?: string;
};
function BlogSavedItem({ blog, type }: props) {
  const {t} = useTranslation()
  const [isDelete, setIsDelete] = useState(false);
  const handleUnsave = () => {
    SSaveBlog(blog.id).then((res) => {
      if (res.status) {
        setIsDelete(true);
      }
    });
  };
  const handleDelete = () => {
    SDeleteBlog(blog.id).then((res) => {
      if (res.status) {
        setIsDelete(true);
      }
    });
  };
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate("/blog/" + blog.id + "/edit");
  };
  if (isDelete) {
    return <></>;
  }
  return (
    <div className="border rounded-2xl shadow  p-5 flex justify-between gap-5">
      <div className="flex-1">
        <Link to={"/blog/" + blog.slug} className="font-bold line-clamp-3">
          {blog.title}
        </Link>
        <div className="flex text-sm mt-3 items-center gap-2">
          <div className="text-primary-500 flex items-center gap-2">
            {!type && (
              <div>
               {t('blog.t17')}:
                {FormMartDateAgo(blog.date_saved)}
              </div>
            )}
            {type && type == "edit" && (
              <div>{t('blog.t10')} :{FormMartDateAgo(blog.updated_at)}</div>
            )}
          </div>
          <div>·</div>
          <div className="flex gap-2 text-gray-500">
          {t('blog.t11')}
            <div className="font-bold">
              {blog.user.first_name + " " + blog.user.last_name}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Menu>
          <MenuHandler>
            <Button className="bg-transparent text-black p-0 m-0 shadow-none hover:shadow-none">
              <HiOutlineDotsHorizontal className="text-xl" />
            </Button>
          </MenuHandler>
          <MenuList>
            {!type && (
              <MenuItem onClick={handleUnsave}>{t('blog.t18')}</MenuItem>
            )}
            {type && type == "edit" && (
              <div className="flex flex-col ">
                <MenuItem onClick={handleEdit}>{t('blog.t10')}</MenuItem>
                <MenuItem onClick={handleDelete}>{t('blog.t12')} </MenuItem>
              </div>
            )}
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}

export default BlogSavedItem;
