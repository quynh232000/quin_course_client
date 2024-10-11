import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

import { CiBookmark } from "react-icons/ci";
import { FaFacebook, FaFlag, FaLink } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoBookmark } from "react-icons/io5";
import { MBlog } from "../../types/app";
import { SSaveBlog } from "../../services/CommonService";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../contants/Contant";
import ToastMessage from "../compoment/ToastMessage";
import { useTranslation } from "react-i18next";
type props = {
  blog: MBlog;
};
function SaveShare({ blog }: props) {
  const {t} = useTranslation()
  const { isLogin } = useSelector((state: RootState) => state.authReducer);
  const [isSaved, setIsSaved] = useState<boolean>(blog.is_saved);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const shareUrl = BASE_URL + "blog/" + blog.slug;
  const handleSave = () => {
    if (blog) {
      if (isLogin) {
        SSaveBlog(blog.id).then((res) => {
          if (res.status) {
            setIsSaved(res.data == "save" ? true : false);
          }
        });
      } else {
        navigate("/login");
      }
    }
  };
  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank",
      "width=600,height=400"
    );
  };
  const handleCopyLink = () => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setMessage("Liên kết đã được sao chép");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };
  return (
    <div className="flex items-center gap-3">
      {message && <ToastMessage message={message} />}
      <div className=" cursor-pointer">
        {!isSaved ? (
          <CiBookmark onClick={handleSave} className={"text-xl "} />
        ) : (
          <IoBookmark
            onClick={handleSave}
            className="text-primary-500 text-xl"
          />
        )}
      </div>
      <div>
        <Menu placement="left-start">
          <MenuHandler>
            <Button className="bg-transparent text-black p-0 m-0 shadow-none hover:shadow-none">
              <HiOutlineDotsHorizontal className="text-xl" />
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem
              onClick={shareFacebook}
              className="flex items-center gap-4"
            >
              <FaFacebook />
              {t('share.s1')}
            </MenuItem>
            <MenuItem
              onClick={handleCopyLink}
              className="flex items-center gap-4"
            >
              <FaLink />
              {t('share.s2')}
            </MenuItem>
            <MenuItem className="flex items-center gap-4">
              <FaFlag />
              {t('share.s3')}
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}

export default SaveShare;
