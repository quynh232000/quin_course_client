import AppLayout from "../layouts/AppLayout";
import HeaderLayout from "../layouts/HeaderLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import StudyLayout from "../layouts/StudyLayout";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import CheckoutError from "../pages/CheckoutError";
import CheckoutSuccess from "../pages/CheckoutSuccess";
import Collection from "../pages/Collection";
import Detail from "../pages/Detail";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Learning from "../pages/learning/Learning";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Teacher from "../pages/Teacher";
import ChangePassword from "../pages/user/ChangePassword";
import MyCourse from "../pages/user/MyCourse";
import OrderHistory from "../pages/user/OrderHistory";
import Profile from "../pages/user/Profile";
const publicRoutes = [
  {
    layout: AppLayout,
    routes: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/collection",
        component: Collection,
      },
      {
        path: "/detail",
        component: Detail,
      },
      {
        path: "/teacher",
        component: Teacher,
      },
      {
        path: "/cart",
        component: Cart,
      },
      {
        path: "/checkout",
        component: Checkout,
      },
      {
        path: "/login",
        component: Login,
      },
      {
        path: "/register",
        component: Register,
      },
      {
        path: "/forgot-password",
        component: ForgotPassword,
      },
    ],
  },
  {
    layout: HeaderLayout,
    routes: [
      {
        path: "/checkout-success",
        component: CheckoutSuccess,
      },
      {
        path: "/checkout-error",
        component: CheckoutError,
      },
    ],
  },
  {
    layout: ProfileLayout,
    routes: [
      {
        path: "/profile",
        component: Profile,
      },
      {
        path: "/user/course",
        component: MyCourse,
      },
      {
        path: "/user/orderhistory",
        component: OrderHistory,
      },
      {
        path: "/user/sercurity",
        component: ChangePassword,
      },
      
    ],
  },
  {
    layout: StudyLayout,
    routes: [
      {
        path: "/learning",
        component: Learning,
      },
     
    ],
  },
];
const privateRoutes = [
  {
    layout: AppLayout,
    routes: [
      {
        path: "/admin",
        component: Home,
      },
    ],
  },
];
export { publicRoutes, privateRoutes };
