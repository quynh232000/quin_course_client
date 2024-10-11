import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GetCategoriesService } from "../../services/CategorySevice";
import { MCategory } from "../../types/app";
import { useTranslation } from "react-i18next";

function CateHeader() {
  const {t} = useTranslation() 
    const [cates, setCates] = useState([]);
  useEffect(() => {
    GetCategoriesService().then((res) => {
      if (res.status) {
        setCates(res.data);
      }
    });
  }, []);

  const showMore = (id: number) => {
    return cates
      .filter((i: MCategory) => i.parent_id == id)
      .map((cate: MCategory) => {
        if (cate.haschild) {
          return (
            <Menu key={cate.id} placement="right-start" allowHover offset={15}>
              <MenuHandler className="flex items-center justify-between">
                <MenuItem>
                  <Link
                    to={"/collection/" + cate.slug}
                    className="flex justify-between items-center w-full"
                  >
                    {cate.name}
                    <FaAngleRight className="text-gray-500" />
                  </Link>
                </MenuItem>
              </MenuHandler>
              <MenuList>{showMore(cate.id)}</MenuList>
            </Menu>
          );
        } else {
          return (
            <MenuItem key={cate.id} >
              <Link to={"/collection/" + cate.slug}>{cate.name}</Link>
            </MenuItem>
          );
        }
      });
  };
  return (
    <Menu>
      <MenuHandler>
        <Button className="bg-transparent shadow-none hover:shadow-none ">
          <div className="flex gap-2 items-center text-[16px] text-primary-900 font-normal">
            <div className="text-[30px] font-normal">
              <BiCategory />
            </div>
            <div>{t('header.collection')}</div>
          </div>
        </Button>
      </MenuHandler>
      <MenuList className="text-primary-900 z-50">
        {cates
          .filter((item: MCategory) => item.parent_id == 0)
          .map((cate: MCategory, index) => {
            if (cate.haschild) {
              return (
                <Menu
                  key={index}
                  placement="right-start"
                  allowHover
                  offset={15}
                >
                  <MenuHandler className="flex items-center justify-between">
                    <MenuItem>
                      <Link
                        to={"/collection/" + cate.slug}
                        className="flex justify-between items-center w-full"
                      >
                        {cate.name}
                        <FaAngleRight className="text-gray-500" />
                      </Link>
                    </MenuItem>
                  </MenuHandler>
                  <MenuList>{showMore(cate.id)}</MenuList>
                </Menu>
              );
            } else {
              return (
                <MenuItem key={index} >
                  <Link to={"/collection/" + cate.slug}>{cate.name}</Link>
                </MenuItem>
              );
            }
          })}
      </MenuList>
    </Menu>
  );
}

export default CateHeader;
