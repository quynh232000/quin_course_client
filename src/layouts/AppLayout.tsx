import { Outlet } from "react-router-dom";
import Header from "../components/shared/headers/Header";
import Footer from "../components/shared/footers/Footer";

const AppLayout = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
