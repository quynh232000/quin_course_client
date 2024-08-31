import { createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../../types/user";

interface SomeState {
  user: UserModel;
  isLogin: boolean;
}
const getUser = localStorage.getItem("CURRENT_USER");
const user = getUser
  ? JSON.parse(getUser)
  : {
      id: "",
      uuid: "",
      first_name: "",
      last_name: "",
      birthday: "",
      email: "",
      email_verified_at: "",
      avatar: "",
      thumbnail: "",
      gender: "",
      phone_number: "",
      relationship: "",
      location: "",
      address: "",
      description: "",
      is_private: false,
      is_banned: false,
      created_at: "",
      updated_at: "",
    };
const initialState: SomeState = {
  user: user,
  isLogin: localStorage.getItem("IS_LOGIN")
    ? JSON.parse(localStorage.getItem("IS_LOGIN")!)
    : false,
};
const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, data) {
      state.user = data.payload;
    },
    setIsLogin(state, data) {
      state.isLogin = data.payload;
      localStorage.setItem("IS_LOGIN", JSON.stringify(data.payload));
    },
  },
});

export const { setUser, setIsLogin } = authReducer.actions;
export default authReducer.reducer;
