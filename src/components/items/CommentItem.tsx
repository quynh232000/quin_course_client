import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MComment, MReaction } from "../../types/app";
import { Link, useNavigate } from "react-router-dom";
import { FormMartDateAgo } from "../functions/tool";
// import { BiSolidLike } from "react-icons/bi";
import {
  SDeleteComment,
  SReactionComment,
  SUpdateComment,
} from "../../services/CommonService";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

import icon_wow from "../../assets/icons/icon_woa.svg";
import icon_like from "../../assets/icons/icon_like.svg";
import icon_heart from "../../assets/icons/icon_heart.svg";
import icon_haha from "../../assets/icons/icon_haha.svg";
import { useTranslation } from "react-i18next";
type props = {
  comment: MComment;
  setTotalCmt: (t: number) => void;
  totalCmt: number;
};

function CommentItem({ comment, setTotalCmt, totalCmt }: props) {
  const {t} = useTranslation()
  const menuIcons = [
    {
      id: 1,
      icon: icon_like,
      title: "Like",
      type: "like",
      label: t('comment.t11'),
      color: "#0093fc",
    },
    {
      id: 2,
      icon: icon_heart,
      title: "Love",
      type: "love",
      label: t('comment.t5'),
      color: "#f33e58",
    },
    {
      id: 3,
      icon: icon_haha,
      title: "Haha",
      type: "haha",
      label: "Haha",
      color: "#f7b125",
    },
    {
      id: 4,
      icon: icon_wow,
      title: "Wow",
      type: "wow",
      label: "Wow",
      color: "#f7b125",
    },
  ];
  const { user, isLogin } = useSelector(
    (state: RootState) => state.authReducer
  );
  const [hasReaction, setHasReaction] = useState<MReaction | null>(null);
  useEffect(() => {
    if (comment.is_reaction) {
      setHasReaction(comment.type_reaction);
    }
  }, []);

  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [textComment, setTextComment] = useState(comment.comment);
  const [textEditComment, setTextEditComment] = useState(comment.comment);
  const [reactionCount, setReactionCount] = useState(comment.reaction_count);
  const [isDelete, setIsDelete] = useState(false);
  const handleDelete = () => {
    SDeleteComment(comment.id).then((res) => {
      if (res.status) {
        setIsDelete(true);
        setTotalCmt(totalCmt - 1);
      }
    });
  };
  const handleEdit = () => {
    if (textEditComment != "" && textComment != textEditComment) {
      setLoading(true);
      SUpdateComment(comment.id, textEditComment).then((res) => {
        setLoading(false);
        if (res.status) {
          setTextComment(textEditComment);
          setIsEdit(false);
        }
      });
    }
  };
  const navigate = useNavigate();
  const [loadingLike, setLoadingLike] = useState(false);
  const handleLike = (type: string) => {
    if (isLogin) {
      if (!loadingLike) {
        setLoadingLike(true);
        SReactionComment(comment.id, type, 'comment').then((res) => {
          setLoadingLike(false);
          if (res.status) {
            if (res.data) {
              if (hasReaction == null) {
                setReactionCount(reactionCount + 1);
              }
              setHasReaction(res.data);
            } else {
              setReactionCount(reactionCount - 1);
              setHasReaction(null);
            }
          }
        });
      }
    } else {
      navigate("/login");
    }
  };
  if (isDelete) {
    return <></>;
  }
  return (
    <div className="py-4  ">
      <div className="flex items-center gap-2">
        <div className="w-[38px] h-[38px]">
          <img
            className="w-full h-full rounded-full object-cover"
            src={comment.commentor.avatar_url}
            alt=""
          />
        </div>
        <div className="flex items-center gap-2">
          <Link
            to={"/account/@" + comment.commentor.username}
            className="font-bold text-primary-800 text-sm"
          >
            {comment.commentor.first_name + " " + comment.commentor.last_name}
          </Link>
          <div className="text-sm text-gray-500">
            {FormMartDateAgo(comment.updated_at)}
          </div>
        </div>
      </div>
      {!isEdit && <div className="py-3  text-primary-900">{textComment}</div>}
      {isEdit && (
        <div className="py-3">
          <textarea
            name=""
            className="w-full border rounded-lg p-3 focus:border-primary-500"
            value={textEditComment}
            onChange={(e) => setTextEditComment(e.target.value)}
          ></textarea>
          <div className="flex gap-4 justify-end mt-2">
            <button
              onClick={() => setIsEdit(false)}
              className="py-2 px-8 bg-orange-50 hover:bg-orange-100 rounded-full border border-orange-500 text-sm"
            >
             {t('comment.t12')}
            </button>
            {loading ? (
              <button className="py-2 px-5 bg-green-300 cursor-not-allowed  text-white rounded-full text-sm">
                {t('comment.t13')}
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="py-2 px-5 bg-green-500 hover:bg-green-600 text-white rounded-full text-sm"
              >
               {t('comment.t13')}
              </button>
            )}
          </div>
        </div>
      )}
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <div className="text-primary-500 font-bold text-sm group cursor-pointer relative">
            {!hasReaction && (
              <div onClick={() => handleLike("like")}> {t('comment.t4')}</div>
            )}
            {hasReaction && (
              <div
                onClick={() =>
                  handleLike(
                    menuIcons.find((i) => i.type == hasReaction.type)?.type ??
                      "like"
                  )
                }
                style={{
                  color: `${
                    menuIcons.find((i) => i.type == hasReaction.type)?.color
                  }`,
                }}
              >
                {menuIcons.find((i) => i.type == hasReaction.type)?.label}
              </div>
            )}
            <div className="hidden  group-hover:flex absolute bottom-full left-[-20px]  bg-white shadow-lg p-2 px-3 rounded-full transition-all gap-2 border">
              {menuIcons.map((item) => {
                return (
                  <div
                    onClick={() => handleLike(item.type)}
                    key={item.id}
                    className="w-[30px] h-[30px] rounded-full"
                    title={item.title}
                  >
                    <img
                      className="w-full h-full rounded-full hover:scale-125"
                      src={item.icon}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div className="text-primary-500 font-bold text-sm">Phản hồi</div> */}
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="flex gap-[2px]">
              {comment.all_reaction_type.length == 0 && (
                <div className="w-[20px] h-[20px]">
                  <img className="w-full h-full" src={icon_like} alt="" />
                </div>
              )}
              {comment.all_reaction_type.length > 0 &&
                comment.all_reaction_type.map((item, index) => {
                  return (
                    <div key={index} className="w-[20px] h-[20px] ml-[-5px]">
                      <img
                        className="w-full h-full"
                        src={menuIcons.find((i) => i.type == item.type)?.icon}
                        alt=""
                      />
                    </div>
                  );
                })}
            </div>
            <div className="text-gray-500">{reactionCount}</div>
          </div>
          <Menu placement="bottom-end">
            <MenuHandler>
              <Button className="bg-transparent text-primary-500 p-0 m-0 shadow-none hover:shadow-none">
                <HiOutlineDotsHorizontal className="text-xl" />
              </Button>
            </MenuHandler>
            <MenuList>
              {comment.commentor.id == user.id && (
                <>
                  <MenuItem
                    onClick={() => setIsEdit(true)}
                    className="flex items-center gap-4"
                  >
                   {t('comment.t6')}
                  </MenuItem>
                  <MenuItem
                    onClick={handleDelete}
                    className="flex items-center gap-4"
                  >
                   {t('comment.t7')}
                  </MenuItem>
                </>
              )}

              <MenuItem className="flex items-center gap-4">
              {t('comment.t8')}
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      {/* <div className="pl-8 mt-3">
        <div>
          <div className="flex gap-2">
            <div className="w-[38px] h-[38px]">
              <img
                className="w-full h-full rounded-full"
                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/133037/626b5c324b733.jpg"
                alt=""
              />
            </div>
            <div className="flex-1">
              <textarea className="w-full rounded-lg border p-3 focus:border-primary-500 border-gray-300" name="" id=""></textarea>
            </div>
          </div>
          <div className="flex justify-end mt-2 gap-2">
            <Button className="py-1 text-sm bg-transparent text-primary-500 border border-primary-500">Hủy</Button>
            <Button className="bg-primary-500 py-1 text-sm">Bình luận</Button>
          </div>
        </div>
      </div> */}
      {comment.replies_count > 0 && (
        <div className="text-sm mt-2 text-gray-500 hover:text-primary-500 hover:underline cursor-pointer w-fit">
          Xem thêm 1 câu trả lời
        </div>
      )}
      {/* show form submit */}
      {/* more reply comment */}
      <div className="pl-5 border-l-2 border-dashed border-gray-300  mt-3">
        {/* <div className="py-4 ">
          <div className="flex items-center gap-2">
            <div className="w-[38px] h-[38px]">
              <img
                className="w-full h-full rounded-full object-cover"
                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/57919/6534ab0aee317.jpg"
                alt=""
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="font-bold text-primary-800 text-sm">Nguyen Quynh</div>
              <div className="text-sm text-gray-500">2 thang truoc</div>
            </div>
          </div>
          <div className="py-3  text-primary-900">
            anh ơi chứng chỉ bị lỗi rùi em chưa học xong mà vẫn nhận đc
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-5">
              <div className="text-primary-500 font-bold text-sm">Thích</div>
              <div className="text-primary-500 font-bold text-sm">Phản hồi</div>
            </div>
            <div>
              <Menu placement="bottom-end">
                <MenuHandler>
                  <Button className="bg-transparent text-primary-500 p-0 m-0 shadow-none hover:shadow-none">
                    <HiOutlineDotsHorizontal className="text-xl" />
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="flex items-center gap-4">
                    Chia sẻ lên Facebook
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        
        </div> */}
      </div>
    </div>
  );
}

export default CommentItem;
