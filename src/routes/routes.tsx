import AppLayout from "../layouts/AppLayout";
import HeaderLayout from "../layouts/HeaderLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import StudyLayout from "../layouts/StudyLayout";
import BlogDetail from "../pages/blog/BlogDetail";
import BlogTag from "../pages/blog/BlogTag";
import Cart from "../pages/Cart";
import ChangeNewPassword from "../pages/ChangeNewPassword";
import Checkout from "../pages/Checkout";
import CheckoutError from "../pages/CheckoutError";
import CheckoutSuccess from "../pages/CheckoutSuccess";
import Collection from "../pages/Collection";
import Detail from "../pages/Detail";
import Error from "../pages/Error";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import CompletedCourse from "../pages/learning/CompletedCourse";
import Learning from "../pages/learning/Learning";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Teacher from "../pages/Teacher";
import ChangePassword from "../pages/user/ChangePassword";
import MyBlogs from "../pages/user/MyBlogs";
import MyCourse from "../pages/user/MyCourse";
import NewPost from "../pages/user/NewPost";
import OrderHistory from "../pages/user/OrderHistory";
import Profile from "../pages/user/Profile";
import SavedBlog from "../pages/user/SavedBlog";
const publicRoutes = [
  {
    layout: AppLayout,
    routes: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/collection/:slug",
        component: Collection,
      },
      {
        path: "/search",
        component: Collection,
      },
      {
        path: "/course/:slug",
        component: Detail,
      },
      {
        path: "/teacher/:username",
        component: Teacher,
      },
      {
        path: "/cart",
        component: Cart,
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
      {
        path: "/forgot-password/:token",
        component: ChangeNewPassword,
      },
      {
        path: "/blogs",
        component: BlogTag,
      },
      {
        path: "/blog/:slug",
        component: BlogDetail,
      },
      {
        path: "/blogs/tag/:slug",
        component: BlogTag,
      },



      {
        path: "/error",
        component: Error,
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
  
 
];
const privateRoutes = [
  {
    layout: ProfileLayout,
    routes: [
      {
        path: "/account/:username",
        component: Profile,
      },
      {
        path: "/account/:username/courses",
        component: MyCourse,
      },
      {
        path: "/account/orderhistory",
        component: OrderHistory,
      },
      {
        path: "/account/sercurity",
        component: ChangePassword,
      },
      
    ],
  },
  {
    layout: AppLayout,
    routes: [
      {
        path: "/checkout",
        component: Checkout,
      },
      {
        path: "/certificate/:slug",
        component: CompletedCourse,
      },
      {
        path: "/me/bookmark",
        component: SavedBlog,
      },
      {
        path: "/me/my-blogs",
        component: MyBlogs,
      },
      {
        path: "/blog/create",
        component: NewPost,
      },
      {
        path: "/blog/:id/edit",
        component: NewPost,
      },
    ],
  },
  {
    layout: StudyLayout,
    routes: [
      {
        path: "/learning/:slug",
        component: Learning,
      },
     
     
    ],
  },
];
export { publicRoutes, privateRoutes };
