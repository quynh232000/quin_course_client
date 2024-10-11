import { ChangeEvent, useEffect, useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { Button, Spinner } from "@material-tailwind/react";
import BtnBack from "../../components/compoment/BtnBack";
import { MdOutlineFileUpload } from "react-icons/md";
import img from "../../assets/icons/img-icon.jpg";
import {
  SCreateBlog,
  SGetBlogById,
  SGetTags,
  SUpdateBlog,
} from "../../services/CommonService";
import { BlogTag, Tag } from "../../types/app";
import ToastMessage from "../../components/compoment/ToastMessage";
import { useNavigate, useParams } from "react-router-dom";
import TagItemEdit from "../../components/items/TagItemEdit";
import { useTranslation } from "react-i18next";
type TypeEditor = {
  html: string;
  text: string;
};

function NewPost() {
  const {t} = useTranslation()
  const navigate = useNavigate();
  const { id } = useParams();
  const [contentMarkdown, setContentMarkdown] = useState("");
  const [contentHTML, setContentHTML] = useState("");
  const [title, setTittle] = useState("");
  const [subtitle, setSubTittle] = useState("");
  const [selectTag, setSelectTag] = useState("");
  const mdParser = new MarkdownIt();
  const [tags, setTags] = useState<Tag[]>([]);

  const [blogTags, setBlogTags] = useState<BlogTag[]>([]);

  const handleEditorChange = ({ html, text }: TypeEditor) => {
    setContentMarkdown(text);
    setContentHTML(html);
  };
  useEffect(() => {
    document.title = t('blog.t1');
    SGetTags().then((res) => {
      if (res.status) {
        setTags(res.data);
      }
    });
  }, []);
  useEffect(() => {
    if (id) {
      SGetBlogById(id).then((res) => {
        if (res.status) {
          // asd
          document.title =res.data.title
          setTittle(res.data.title);
          setSubTittle(res.data.subtitle);
          setImagePreview(res.data.thumbnail_url);
          setContentMarkdown(res.data.content_markdown);
          setContentHTML(res.data.content);
          setBlogTags(res.data.tags);
        }
      });
    }
  }, [id]);
  //   preview img
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
      setImagePreview(null);
    }
  };
  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTittle(e.target.value);
    document.title = e.target.value;
    if (e.target.value == "") {
      document.title = "Tạo bài viết";
    }
  };
  //   submit
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageToast, setMessageToast] = useState<{
    title: string;
    message: string;
    type: "success" | "error" | "warning" | "info";
  }>({
    title: "Thành công!",
    message: "",
    type: "success",
  });
  const handleSubmit = () => {
    if (
      title == "" ||
      subtitle == "" ||
      contentHTML == null ||
      contentMarkdown == null ||
      selectTag == ""
    ) {
      setMessageToast({
        title: "Lỗi!",
        message: "Vui lòng nhập đầy đủ thông tin!",
        type: "error",
      });
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("content", contentHTML);
    formData.append("content_markdown", contentMarkdown);
    formData.append("tag_id", selectTag);
    if (selectedFile) {
      formData.append("thumbnail_url", selectedFile);
    }
    setLoading(true);
    SCreateBlog(formData).then((res) => {
      setLoading(false);
      if (res.status) {
        setMessageToast({
          title: "Thành công!",
          message: "Bài viết đã được tạo thành công!",
          type: "success",
        });
        setTimeout(() => {
          navigate("/me/my-blogs");
        }, 2500);
      } else {
        setMessageToast({
          title: "Lỗi!",
          message: res.message,
          type: "error",
        });
      }
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    });
  };
  const handleUpdate = () => {
    if (title == "" || subtitle == "" || contentHTML == "") {
      setMessageToast({
        title: "Lỗi!",
        message: "Vui lòng nhập đầy đủ thông tin!",
        type: "error",
      });
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("content", contentHTML);
    formData.append("content_markdown", contentMarkdown);
    if (selectTag) {
      formData.append("tag_id", selectTag);
    }
    if (selectedFile) {
      formData.append("thumbnail_url", selectedFile);
    }
    if (id) {
      setLoading(true);
      SUpdateBlog(formData, id).then((res) => {
        setLoading(false);
        if (res.status) {
          setMessageToast({
            title: "Thành công!",
            message: "Bài viết đã được cập nhật thành công!",
            type: "success",
          });
          setTimeout(() => {
            navigate("/me/my-blogs");
          }, 2500);
        } else {
          setMessageToast({
            title: "Lỗi!",
            message: res.message,
            type: "error",
          });
        }
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 5000);
      });
    }
  };
  return (
    <div className="w-full px-5 xl:px-0 xl:w-content m-auto py-8">
      {showToast && (
        <ToastMessage
          title={messageToast.title}
          message={messageToast.message}
          type={messageToast.type}
        />
      )}
      <div className="">
        <BtnBack />
        <div className="flex items-center justify-between py-8 ">
          <div className="font-bold text-4xl">
            {id ? "Cập nhật bài viết" : "Tạo bài viết"}
          </div>

          {loading ? (
            <Button className=" flex items-center bg-primary-300 gap-2 cursor-not-allowed ">
              <Spinner className="h-4 w-4" />
              Đang xử lý...
            </Button>
          ) : (
            <Button
              onClick={id ? handleUpdate : handleSubmit}
              className="bg-primary-500"
            >
              {id ? t('blog.t7') : t('blog.t6')}
            </Button>
          )}
        </div>
      </div>
      <div className="mb-5 flex flex-col md:flex-row gap-5 md:gap-0">
        <div className="flex-1 border">
          <div className="pt-3">
            <input
              type="text"
              value={title}
              onChange={handleChangeTitle}
              placeholder={t('blog.t3')}
              className="w-full text-2xl px-3"
            />
          </div>
          <div className="mt-3 border-t pt-3">
            <textarea
              name=""
              value={subtitle}
              onChange={(e) => setSubTittle(e.target.value)}
              className="w-full text-xl px-3"
              placeholder={t('blog.t2=4')}
            ></textarea>
          </div>
          <div className="mt-3 border-t pt-3 px-3">
            <div className="mb-1 font-bold">Tags</div>
            <div className="flex gap-5 items-center">
              <select
                name=""
                id=""
                className="w-40 border p-2 rounded-lg"
                value={selectTag}
                onChange={(e) => setSelectTag(e.target.value)}
              >
                <option value="">--{t('blog.t5')}--</option>
                {tags.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
              <div className="flex items-center gap-2">
                {blogTags.map((item) => {
                  return (
                    <TagItemEdit key={item.id} blogtag={item}/>
                   
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-40 border-l md:pl-5">
          <label
            htmlFor="image"
            className="h-[260px] border rounded-lg shadow-lg block"
          >
            <img
              className="w-full h-full rounded-lg object-cover"
              src={imagePreview ? imagePreview : img}
              alt=""
            />
            <input type="file" hidden id="image" onChange={handleFileChange} />
          </label>
          <div className="flex justify-center mt-3">
            <label
              htmlFor="image"
              className="flex hover:shadow-none hover:bg-gray-200 items-center justify-center py-2 px-5 rounded-lg shadow-lg cursor-pointer bg-gray-100 w-fit"
            >
              <MdOutlineFileUpload />{t('blog.t2')}
            </label>
          </div>
        </div>
      </div>
      <MdEditor
        style={{ height: "400px" }}
        value={contentMarkdown}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
      <div className="flex mb-12 mt-5  justify-end"></div>
    </div>
  );
}

export default NewPost;
