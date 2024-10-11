import * as request from "../utils/HttpRequest";
import {
  ResendEmail,
  UpdateSocial,
  UserLogin,
  UserRegister,
  UserToken,
  uuid,
} from "../types/user";
export const register = async (data: UserRegister) => {
  try {
    const res = await request.POST(`register`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const verifyEmail = async (token: UserToken) => {
  try {
    const res = await request.POST(`verifyEmail`, token);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const login = async (data: UserLogin) => {
  try {
    const res = await request.POST(`login`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const resendEmail = async (email: ResendEmail) => {
  try {
    const res = await request.POST(`resend_email`, email);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const me = async () => {
  try {
    const res = await request.GET(`auth/me`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getUserInfo = async (uuid: uuid) => {
  try {
    const res = await request.GET(`get_user_info/` + uuid);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getListUsers = async () => {
  try {
    const res = await request.GET(`user/list`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const addFriendRequest = async (friend_id: number) => {
  try {
    const res = await request.GET(`user/add_friend?friend_id=` + friend_id);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getRequestFriend = async () => {
  try {
    const res = await request.GET(`user/request_friend`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const cancelSendRequestFriend = async (friend_id: number) => {
  try {
    const res = await request.GET(
      `user/cancel_send_request_friend?friend_id=` + friend_id
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const cancelRequestFriend = async (friend_id: number) => {
  try {
    const res = await request.GET(
      `user/cancel_request_friend?friend_id=` + friend_id
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const AcceptFriendRequest = async (friend_id: number) => {
  try {
    const res = await request.GET(`user/accept_friend?friend_id=` + friend_id);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getMediaUser = async (
  user_uuid: string,
  type: string | "image"
) => {
  try {
    const res = await request.GET(`user/get_media_user/${user_uuid}/${type}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getListFriend = async (user_uuid: string) => {
  try {
    const res = await request.GET(`user/get_list_friend/` + user_uuid);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const updateThumbnailUser = async (data: FormData) => {
  try {
    const res = await request.POST(`user/update_thumbnail`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const changeAvatarUser = async (data: FormData) => {
  try {
    const res = await request.POST(`user/change_avatar`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const updateDescription = async (data: FormData) => {
  try {
    const res = await request.POST(`user/update/description`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const deleteMediaUser = async (media_uuid: string, index: number) => {
  try {
    const res = await request.GET(`user/delete_media/${media_uuid}/${index}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const setAvatarUser = async (media_uuid: string, index: number) => {
  try {
    const res = await request.GET(`user/set_avatar/${media_uuid}/${index}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const setThumnailUser = async (media_uuid: string, index: number) => {
  try {
    const res = await request.GET(`user/set_thumbnail/${media_uuid}/${index}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const sLoginWithGoogle = async (token: string) => {
  try {
    const res = await request.POST(`auth/withgoogle`, {id_token:token});
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SForgotPassword = async (email: string) => {
  try {
    const res = await request.POST(`auth/forgotpassword`, {email});
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SChangeNewPassword = async (password: string,token:string) => {
  try {
    const res = await request.POST(`auth/changenewpassword`, {password,token});
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SUpdateProfile = async (data:FormData) => {
  try {
    const res = await request.POST(`auth/update-profile`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const SUpdateSocial = async (data:UpdateSocial) => {
  try {
    const res = await request.POST(`auth/update-social`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

