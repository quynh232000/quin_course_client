import { Outlet } from "react-router-dom";
import Header from "../components/shared/headers/Header";

const HeaderLayout = () => {
  return (
    <div className="flex flex-col w-full text-grey-900 min-h-[100vh]">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
     
    </div>
  );
};

export default HeaderLayout;
