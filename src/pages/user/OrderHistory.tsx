import { IoIosSearch, IoIosTimer } from "react-icons/io";
// import ProductCollectItem from "../../components/items/ProductCollectItem";
// import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Spinner,
} from "@material-tailwind/react";
import { MOrder } from "../../types/app";
import { SGetMyOrder } from "../../services/CommonService";
import { FormatPrice, FormMartDateAgo } from "../../components/functions/tool";
import { CiGift } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
type propsicon = {
  id: number;
  open: number;
};
function Icon({ id, open }: propsicon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
type typeNav = {
  id: number;
  key: string;
  title: string;
};
function OrderHistory() {
  const {t} = useTranslation()
  const menuNavs: typeNav[] = [
    { id: 1, key: "all", title: t('profile.o.t2') },
    { id: 2, key: "completed", title: t('profile.o.t3') },
    { id: 3, key: "penđing", title: t('profile.o.t4') },
    { id: 4, key: "cancel", title: t('profile.o.t5') },
  ];
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  const [orders, setOrders] = useState<MOrder[]>([]);
  const [ordersAll, setOrdersAll] = useState<MOrder[]>([]);
  const [navActive, setNavActive] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    SGetMyOrder().then((res) => {
      setLoading(false);
      if (res.status) {
        setOrders(res.data);
        setOrdersAll(res.data);
      }
    });
  }, []);
  const handleActiveNav = (item: typeNav) => {
    setNavActive(item.id);
    switch (item.key) {
      case "completed":
        setOrders(ordersAll.filter((i) => i.status == "completed"));
        break;
      case "pending":
        setOrders(ordersAll.filter((i) => i.status == "new"));
        break;
      case "cancel":
        setOrders(ordersAll.filter((i) => i.status == "cancel"));
        break;

      default:
        setOrders(ordersAll);
        break;
    }
  };
  return (
    <div className="">
      <div className="font-bold text-xl"> {t('profile.o.t1')}</div>

      <div className="bg-gray-50 p-4 rounded-lg my-4 flex gap-4 items-center">
        <div className="flex gap-1 flex-1">
          {menuNavs.map((item) => {
            return (
              <div
              key={item.id}
                onClick={() => handleActiveNav(item)}
                className={
                  "   px-6 py-1  hover:bg-primary-50 cursor-pointer w-fit rounded-lg " +
                  (navActive == item.id ? "bg-white border shadow-sm" : "")
                }
              >
                {item.title}
              </div>
            );
          })}

          {/* <div className=" hover:shadow-sm  px-6 py-1 border border-transparent hover:border-gray-100 hover:bg-primary-50 cursor-pointer w-fit rounded-lg">
            Đã hoàn thành
          </div>
          <div className=" hover:shadow-sm  px-6 py-1 border border-transparent hover:border-gray-100 hover:bg-primary-50 cursor-pointer w-fit rounded-lg">
            Chưa hoàn thành
          </div>
          <div className=" hover:shadow-sm  px-6 py-1 border border-transparent hover:border-gray-100 hover:bg-primary-50 cursor-pointer w-fit rounded-lg">
            Đang xử lý
          </div> */}
        </div>
        <div className=" hidden md:flex relative">
          <input
            type="text"
            placeholder="Tìm kiếm.."
            className="border bg-white px-2 py-1 rounded-lg focus:border-primary-500 shadow-sm"
          />
          <div className=" absolute top-[50%] right-2 translate-y-[-50%] text-xl text-gray-500">
            <IoIosSearch />
          </div>
        </div>
      </div>

      <div>
        <div className="flex-1">
          {loading ? (
            <div className="flex justify-center mt-16 items-center gap-2">
              <Spinner color="purple" />
              Đang tải...
            </div>
          ) : orders && orders.length > 0 ? (
            orders.map((item, index) => {
              return (
                <Accordion
                  key={index}
                  open={open === index}
                  icon={<Icon id={index} open={open} />}
                >
                  <AccordionHeader onClick={() => handleOpen(1)}>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex gap-4 items-center">
                        <div className="text-primary-600 text-lg font-bold flex items-center gap-2">
                          <CiGift />{t('profile.o.t14')}
                          <i className="text-lg">#{item.order_code}</i>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 font-normal">
                        {t('profile.o.t6')}:{" "}
                          <div>{FormMartDateAgo(item.created_at)}</div>
                        </div>
                      </div>
                      <div className=" grid grid-cols-4  text-sm">
                        <div className="flex items-center">
                        {t('profile.o.t7')}:{" "}
                          <i className="text-lg ml-2 text-orange-500 font-bold">
                            {FormatPrice(item.total)}
                          </i>
                        </div>
                        <div className="flex items-center">
                        {t('profile.o.t8')}:{" "}
                          <i className="text-lg ml-2 text-orange-500 font-bold">
                            {item.order_details.length}
                          </i>
                        </div>
                        <div className="flex items-center">
                        {t('profile.o.t9')}:
                          <div
                            className={
                              "text-sm ml-2 flex items-center gap-1  font-bold " +
                              (item.status == "new"
                                ? "text-orange-500"
                                : "text-success-500")
                            }
                          >
                            {item.status == "new" ? (
                              <>
                                <IoIosTimer />
                                {t('profile.o.t11')}
                              </>
                            ) : (
                              <>
                                <IoCheckmark /> {t('profile.o.t12')}
                              </>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center">
                          Trạng thái:{" "}
                          <div
                            className={
                              "text-sm ml-2 flex items-center gap-1 text-orange-500 font-bold " +
                              (item.status == "new"
                                ? "text-orange-500"
                                : "text-success-500")
                            }
                          >
                            {item.status == "new" ? (
                              <>
                                <IoIosTimer />
                                {t('profile.o.t11')}
                              </>
                            ) : (
                              <>
                                <IoCheckmark /> {t('profile.o.t3')}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="flex flex-col gap-3 bg-gray-100 p-3 rounded-lg">
                      {item.order_details.map((detail) => {
                        return (
                          <div
                            key={detail.id}
                            className="flex gap-4 border-b py-2"
                          >
                            <div className="w-[120px] h-[86px]">
                              <img
                                className="w-full h-full rounded-lg object-cover"
                                src={detail.course.image_url}
                                alt=""
                              />
                            </div>
                            <div>
                              <Link
                                to={"/course/" + detail.course.slug}
                                className="text-lg line-clamp-2 h-[46px] text-gray-700 font-bold"
                              >
                                {detail.course.title}
                              </Link>
                              <div>
                                <div className=" font-bold text-gray-500">
                                  {FormatPrice(detail.price)}
                                </div>
                                <div>X1</div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </AccordionBody>
                </Accordion>
              );
            })
          ) : (
            <div className="text-center mt-5 text-red-500">
             {t('profile.o.no_data')}
            </div>
          )}
        
        </div>
       
      </div>
    </div>
  );
}

export default OrderHistory;
