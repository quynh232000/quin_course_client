import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { BlogTag } from "../../types/app";
import { SDeleteTagEdit } from "../../services/CommonService";
import { useState } from "react";

type props = {
  blogtag: BlogTag;
};
function TagItemEdit({ blogtag }: props) {
  const [isDelete, setIsDelete] = useState(false);
  const handleDelete = () => {
    SDeleteTagEdit(blogtag.blog_id,blogtag.tag.id).then((res) => {
      if (res.status) {
        setIsDelete(true);
      }
    });
  };
  if (isDelete) {
    return <></>;
  }
  return (
    <Menu>
      <MenuHandler>
        <Button className="bg-transparent text-primary-500 shadow-none p-0">
          | {blogtag.tag.name}
        </Button>
      </MenuHandler>
      <MenuList className="p-0">
        <MenuItem onClick={handleDelete} className="text-center ">
          Xóa
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default TagItemEdit;
