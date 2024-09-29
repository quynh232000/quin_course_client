import { Button, Drawer, IconButton } from "@material-tailwind/react";
import { GiCheckMark } from "react-icons/gi";
import CommentItem from "../items/CommentItem";
type props = {
  isOpenComment: boolean;
  setIsOpenComment: (isOpen: boolean) => void;
};
function ModalComment({ isOpenComment, setIsOpenComment }: props) {
  const closeDrawerRight = () => setIsOpenComment(false);
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
                <div className="w-[38px] h-[38px]">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src="https://files.fullstack.edu.vn/f8-prod/user_avatars/133037/626b5c324b733.jpg"
                    alt=""
                  />
                </div>
                <div className="flex-1">
                  <textarea
                    className="w-full border p-3 rounded-lg "
                    rows={2}
                    name=""
                    id=""
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end gap-2 my-3">
                <Button className="min-w-[120px] bg-transparent border bg-primary-50 bg-clip-padding  border-primary-100 text-primary-500 py-2">
                  Hủy
                </Button>
                <Button className="min-w-[120px] bg-primary-500 py-2">
                  Bình luận
                </Button>
              </div>
            </div>

            <div className="flex justify-between items-center py-5">
              <div className="font-bold text-gray-700">18 Bình luận</div>
              <div className="text-sm font-sm text-gray-500">
                Nếu thấy bình luận spam, các bạn bấm report giúp admin nhé
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2  overflow-y-scroll flex-1 px-5  scrollbar_custom pb-32">
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />

          <div className="flex justify-center mt-5 text-sm text-gray-500 items-center gap-2 border-t pt-5">
          <GiCheckMark  className="text-green-500 text-lg"/> Đã tải hết bình luận
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default ModalComment;
