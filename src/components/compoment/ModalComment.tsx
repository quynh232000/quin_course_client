import { Button, Drawer, IconButton } from "@material-tailwind/react";
import { GiCheckMark } from "react-icons/gi";
import CommentItem from "../items/CommentItem";
import { useEffect, useState } from "react";
import { MBlog, MComment, MStep } from "../../types/app";
import { SComment, SGetComment } from "../../services/CommonService";
import CmtItemSke from "../skeleton/CmtItemSke";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type props = {
  isOpenComment: boolean;
  setIsOpenComment: (isOpen: boolean) => void;
  step: MStep | MBlog;
  type?: "blog" | "comment" | string;
};
function ModalComment({
  isOpenComment,
  setIsOpenComment,
  step,
  type = "step",
}: props) {
  const {t} = useTranslation()
  const { user, isLogin } = useSelector(
    (state: RootState) => state.authReducer
  );
  const typeCmt = type ? type : "step";
  const closeDrawerRight = () => setIsOpenComment(false);
  const [loading, setLoading] = useState(true);
  const [totalCmt, setTotalCmt] = useState(0);
  const [listComment, setListComment] = useState<MComment[]>([]);
  useEffect(() => {
    setLoading(true);

    SGetComment(step.id, `?page=1&type=${typeCmt}&limit=20`).then((res) => {
      setLoading(false);
      if (res.status) {
        setListComment(res.data);
        setTotalCmt(res.meta.total);
      }
    });
  }, []);

  //   handle comment
  const [comment, setComment] = useState("");
  const [cmtLoading, setCmtLoading] = useState(false);
  const navigate = useNavigate();
  const handleComment = () => {
    if (!isLogin) {
      navigate("/login");
      return;
    }
    setCmtLoading(true);
    SComment(comment, step.id, typeCmt).then((res) => {
      if (res.status) {
        setCmtLoading(false);
        setComment("");
        setListComment([res.data, ...listComment]);
        setTotalCmt(totalCmt + 1);
      }
    });
  };
  return (
    <div className=" fixed top-0 left-0 right-0 bottom-0 z-10">
      <Drawer
        size={780}
        placement="right"
        open={isOpenComment}
        onClose={closeDrawerRight}
        className="p-4   w-full max-w-full flex flex-col"
      >
        <div>
          <div className="flex justify-end mb-3">
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={() => setIsOpenComment(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <div className="px-5">
            <div>
              <div className="flex  gap-2">
                {isLogin && (
                  <div className="w-[38px] h-[38px]">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={user.avatar_url}
                      alt=""
                    />
                  </div>
                )}
                <div className="flex-1">
                  <textarea
                    className="w-full border p-3 rounded-lg focus:border-primary-500"
                    rows={2}
                    placeholder={t('comment.t1')}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end gap-2 my-3">
                {/* <Button className="min-w-[120px] bg-transparent border bg-primary-50 bg-clip-padding  border-primary-100 text-primary-500 py-2">
                  Hủy
                </Button> */}
                {comment == "" || cmtLoading ? (
                  <Button className="min-w-[120px] bg-primary-300 cursor-not-allowed py-2">
                    {t('comment.t2')}
                  </Button>
                ) : (
                  <Button
                    onClick={handleComment}
                    className="min-w-[120px] bg-primary-500 py-2"
                  >
                    {t('comment.t2')}
                  </Button>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center py-5">
              <div className="font-bold text-gray-700">
                {totalCmt} {t('comment.t2')}
              </div>
              <div className="text-sm font-sm text-gray-500">
              {t('comment.t3')}
              </div>
            </div>
          </div>
        </div>
        {loading && (
          <div className="flex flex-col gap-2  overflow-y-scroll flex-1 px-5  scrollbar_custom pb-32">
            <CmtItemSke />
            <CmtItemSke />
          </div>
        )}
        {!loading && (
          <div className="flex flex-col gap-2  overflow-y-scroll flex-1 px-5  scrollbar_custom pb-32">
            {listComment.length > 0 ? (
              listComment.map((item) => {
                return (
                  <CommentItem
                    key={item.id}
                    comment={item}
                    setTotalCmt={setTotalCmt}
                    totalCmt={totalCmt}
                  />
                );
              })
            ) : (
              <div className="text-center text-gray-500 mt-5">
                {t('comment.t10')}
              </div>
            )}
            {listComment.length > 0 && (
              <div className="flex justify-center mt-5 text-sm text-gray-500 items-center gap-2 border-t pt-5">
                <GiCheckMark className="text-green-500 text-lg" />{t('comment.t9')}
              </div>
            )}
          </div>
        )}
      </Drawer>
    </div>
  );
}

export default ModalComment;
