import {  ChangePasswordObj, FormLogin, FormRegister } from "../types/formData";
import * as request from "../utils/HttpRequest";
export const SGetBanners = async (params?: string) => {
  try {
    const res = await request.GET(`banners` + params);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SGetVouchers = async (params?: string) => {
  try {
    const res = await request.GET(`voucher` + params);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SGetCourses = async (params?: string) => {
  try {
    const res = await request.GET(`course/filter` + params);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SGetCourseCollection = async (params?: string) => {
  try {
    const res = await request.GET(`course/collection` + params);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SGetCourseJoin = async (params?: string) => {
  try {
    const res = await request.GET(`course/course_join_username` + params);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SGetTeachers = async (params?: string) => {
  try {
    const res = await request.GET(`user/teachers` + params);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SGetBlogs = async (params?: string) => {
  try {
    const res = await request.GET(`blogs/all` + params);
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
export const SGetCourseSlug = async (slug: string) => {
  try {
    const res = await request.GET(`course/detail/` + slug);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SGetTeacherInfo = async (username: string) => {
  try {
    const res = await request.GET(`user/teacher_info/` + username);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SCheckEmail = async (email: string) => {
  try {
    const res = await request.POST(`auth/check-email`, { email: email });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SVerifyEmail = async (email: string) => {
  try {
    const res = await request.POST(`auth/verify-email`, { email: email });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SRegister = async (data: FormRegister) => {
  try {
    const res = await request.POST(`auth/register`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SLogin = async (data: FormLogin) => {
  try {
    const res = await request.POST(`auth/login`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SGetUserInfo = async (username: string) => {
  try {
    const res = await request.GET(`user/user_info/` + username);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SEnrollCourse = async (id: number) => {
  try {
    const res = await request.POST(`course/enroll/` + id);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SAsynCart = async (ids: number[], token: string) => {
  try {
    const res = await request.POSTASYNC(`cart/asyn_cart`, { id: ids }, token);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const SAddCart = async (id: number) => {
  try {
    const res = await request.POST(`cart/addcart/` + id);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SDeleteItemCart = async (id: number) => {
  try {
    const res = await request.POST(`cart/deletecart/` + id);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SCreateOrder = async (params: string) => {
  try {
    const res = await request.POST(`order/create` + params);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SConfirmPayment = async (order_id: number, order_code: string) => {
  try {
    const res = await request.POST(
      `order/confirmpayment/${order_id}/${order_code}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SCheckAmount = async (order_code: string) => {
  try {
    const res = await request.POST(`order/${order_code}/check_amount`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SGetLearningCourse = async (slug: string) => {
  try {
    const res = await request.GET(`course/learning/${slug}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SGetLearningStep = async (
  course_slug: number,
  step_uuid: string
) => {
  try {
    const res = await request.GET(`course/step/${course_slug}/${step_uuid}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SSaveUserProgress = async (
  course_id: number,
  step_uuid: string
) => {
  try {
    const res = await request.POST(
      `course/user_progress/${course_id}/${step_uuid}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SUserQuiz = async (id: number) => {
  try {
    const res = await request.POST(`course/user_quiz/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SGetSertificate = async (slug: string) => {
  try {
    const res = await request.GET(`course/certificate/${slug}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SGetBlogDetail = async (slug: string) => {
  try {
    const res = await request.GET(`blogs/${slug}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SGetBlogSameAuthor = async (blog_id: number) => {
  try {
    const res = await request.GET(`blogs/${blog_id}/same_author`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SGetBlogByTag = async (slug: string) => {
  try {
    const res = await request.GET(`blogs/tag/${slug}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SGetTags = async () => {
  try {
    const res = await request.GET(`tags/all`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SLoveBlog = async (id: number) => {
  try {
    const res = await request.POST(`blog/${id}/love`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SSaveBlog = async (id: number) => {
  try {
    const res = await request.POST(`blog/${id}/save`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SMyBlogSaved = async () => {
  try {
    const res = await request.GET(`blog/mysaved`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SMyBlogs = async (params?: string) => {
  try {
    const res = await request.GET(`blogs/my_blogs` + params);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SDeleteBlog = async (id?: number) => {
  try {
    const res = await request.POST(`blogs/delete_blog/` + id);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SCreateBlog = async (data: FormData) => {
  try {
    const res = await request.POST(`blogs/create`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SUpdateBlog = async (data: FormData, id: string) => {
  try {
    const res = await request.POST(`blogs/update/${id}`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SGetBlogById = async (id: string) => {
  try {
    const res = await request.GET(`blog/${id}/info`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SCreateNote = async (step_id: number, note: string) => {
  try {
    const res = await request.POST(`notes/create`, { step_id, note });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SDeleteTagEdit = async (blog_id: number, tag_id: number) => {
  try {
    const res = await request.POST(
      `blogs/${blog_id}/delete_tag_blog/${tag_id}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SGetNotes = async (step_id: number, params?: string) => {
  try {
    params = params ? params : "";
    const res = await request.GET(`notes/my_notes/${step_id}${params}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SDeleteNote = async (note_id: number) => {
  try {
    const res = await request.POST(`notes/delete/${note_id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const SUpdateNote = async (note_id: number, note: string) => {
  try {
    const res = await request.POST(`notes/update/${note_id}`, { note });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SComment = async (
  comment: string,
  commentable_id: number,
  type: string
) => {
  try {
    const res = await request.POST(`comments/create`, {
      comment,
      commentable_id,
      type,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SGetComment = async (commentable_id: number, params: string) => {
  try {
    params = params ? params : "";
    const res = await request.GET(`comments/list/${commentable_id}${params}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SDeleteComment = async (id: number) => {
  try {
    const res = await request.POST(`comments/delete/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SReactionComment = async (
  id: number,
  type: "like" | "love" | "haha" | "wow" | string,
  commentable_type: string
) => {
  try {
    const res = await request.POST(`reaction/${id}`, {
      type,
      commentable_type,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SUpdateComment = async (id: number, comment: string) => {
  try {
    const res = await request.POST(`comments/update/${id}`, { comment });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SChangePassword = async (data: ChangePasswordObj) => {
  try {
    const res = await request.POST(`auth/change_password`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SGetMyOrder = async () => {
  try {
    const res = await request.GET(`order/my_order`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const SSendReviewCourse = async (course_id:number,content:string,rating:number) => {
  try {
    const res = await request.POST(`reviews/create`,{course_id,content,rating});
    return res;
  } catch (error) {
    console.log(error);
  }
};
