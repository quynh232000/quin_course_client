import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function CommentItem() {
  return (
    <div className="py-4  ">
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

      {/* more reply comment */}
      <div className="pl-5 border-l-2 border-dashed border-gray-300  mt-3">
        {/* <CommentItem/> */}
        <div className="py-4 ">
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
          <div>{/* <CommentItem/> */}</div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default CommentItem;
