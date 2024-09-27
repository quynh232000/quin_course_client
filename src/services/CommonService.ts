import {  FormLogin, FormRegister } from "../types/formData";
import * as request from "../utils/HttpRequest";
export const SGetBanners = async (params?:string) => {
    try {
      const res = await request.GET(`banners`+params);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SGetVouchers = async (params?:string) => {
    try {
      const res = await request.GET(`voucher`+params);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SGetCourses = async (params?:string) => {
    try {
      const res = await request.GET(`course/filter`+params);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SGetCourseCollection = async (params?:string) => {
    try {
      const res = await request.GET(`course/collection`+params);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SGetCourseJoin = async (params?:string) => {
    try {
      const res = await request.GET(`course/course_join_username`+params);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SGetTeachers = async (params?:string) => {
    try {
      const res = await request.GET(`user/teachers`+params);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SGetBlogs = async (params?:string) => {
    try {
      const res = await request.GET(`blogs/all`+params);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SGetLevels = async () => {
    try {
      const res = await request.GET(`common/levels`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SGetCourseSlug = async (slug:string) => {
    try {
      const res = await request.GET(`course/detail/`+slug);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SGetTeacherInfo = async (username:string) => {
    try {
      const res = await request.GET(`user/teacher_info/`+username);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SCheckEmail = async (email:string) => {
    try {
      const res = await request.POST(`auth/check-email`,{email:email});
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SVerifyEmail = async (email:string) => {
    try {
      const res = await request.POST(`auth/verify-email`,{email:email});
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SRegister = async (data:FormRegister) => {
    try {
      const res = await request.POST(`auth/register`,data);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SLogin = async (data:FormLogin) => {
    try {
      const res = await request.POST(`auth/login`,data);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SGetUserInfo = async (username:string) => {
    try {
      const res = await request.GET(`user/user_info/`+username);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SEnrollCourse = async (id:number) => {
    try {
      const res = await request.POST(`course/enroll/`+id);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SAsynCart = async (ids:number[],token:string) => {
    try {
      const res = await request.POSTASYNC(`cart/asyn_cart`,{id:ids},token);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  export const SAddCart = async (id:number) => {
    try {
      const res = await request.POST(`cart/addcart/`+id);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SDeleteItemCart = async (id:number) => {
    try {
      const res = await request.POST(`cart/deletecart/`+id);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SCreateOrder = async (params:string) => {
    try {
      const res = await request.POST(`order/create`+params);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SConfirmPayment = async (order_id:number,order_code:string) => {
    try {
      const res = await request.POST(`order/confirmpayment/${order_id}/${order_code}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SCheckAmount = async (order_code:string) => {
    try {
      const res = await request.POST(`order/${order_code}/check_amount`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SGetLearningCourse = async (slug:string) => {
    try {
      const res = await request.GET(`course/learning/${slug}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SGetLearningStep = async (course_slug:number,step_uuid:string) => {
    try {
      const res = await request.GET(`course/step/${course_slug}/${step_uuid}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SSaveUserProgress = async (course_id:number,step_uuid:string) => {
    try {
      const res = await request.POST(`course/user_progress/${course_id}/${step_uuid}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SUserQuiz = async (id:number) => {
    try {
      const res = await request.POST(`course/user_quiz/${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const SGetSertificate = async (slug:string) => {
    try {
      const res = await request.GET(`course/certificate/${slug}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };