import { FaCartPlus, FaStar, FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductItem() {
  return (
    <div className="border shadow-sm rounded-lg">
      <div className="h-[246px] w-full overflow-hidden rounded-t-lg relative">
        <span className=" absolute top-0 bg-orange-400 text-white py-0 px-5 rounded-br-xl">
          30%
        </span>
        <img
          className="w-full h-full object-cover rounded-t-lg "
          src="https://www.ketchum.edu/sites/default/files/2022-08/First%20%28Top%29%20Image%20.jpeg"
          alt=""
        />
      </div>
      <div className="p-3 pb-4 flex flex-col gap-2">
        <Link to={"/detail"}>
          <h4 className=" line-clamp-2 font-bold">
            Lập tình Javascript Nâng cao
          </h4>
        </Link>
        <div>
          <div className="flex gap-2 items-center">
            <div className="w-[24px] h-[24px] border rounded-full">
              <img
                className="w-full h-full object-cover rounded-full "
                src="https://imgcdn.stablediffusionweb.com/2024/4/20/79162520-69b0-4eb3-a4ac-11684a88a82e.jpg"
                alt=""
              />
            </div>
            <div>Mr Quynh</div>
          </div>
          <div className="flex justify-between text-gray-500 mt-1">
            <div className="flex items-center text-sm gap-2">
              <FaStar className="text-yellow-800" />
              <span>(4.6)</span>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <FaUserCheck />
              <span>1.2k</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center py-1">
          <span className="font-bold text-primary-500 text-xl">399.000đ</span>
          <del className="text-gray-500">499.000đ</del>
        </div>
        <div>
          <div className="flex gap-2">
            <Link to={'/cart'}>
              <button className="text-primary-500 border hover:bg-primary-50 border-primary-500 rounded-lg px-7 py-2 ">
                <FaCartPlus className="" />
              </button>
            </Link>
            <Link to={"/cart"} className="bg-primary-500 text-center flex items-center justify-center text-white hover:bg-primary-600 flex-1 rounded-lg">
              Mua ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
