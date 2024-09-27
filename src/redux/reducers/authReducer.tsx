import { createSlice } from "@reduxjs/toolkit";
import { MUser } from "../../types/app";
// import { User } from "../../types/formData";

interface SomeState {
  user: MUser;
  isLogin: boolean;
}
const getUser = localStorage.getItem("CURRENT_USER");
const user = getUser
  ? JSON.parse(getUser):
  null;
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
    },
  },
});

export const { setUser, setIsLogin } = authReducer.actions;
export default authReducer.reducer;
