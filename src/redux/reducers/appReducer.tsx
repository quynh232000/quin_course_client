import { createSlice } from "@reduxjs/toolkit";
import { GroupModel } from "../../types/app";
import { UserModel } from "../../types/user";

interface SomeState {
  currentUser: UserModel|null;
  isNotify: boolean;
  dataNotify:{
    type:string,
    message:string
  };
  currentGroup:GroupModel|null;
}

const initialState: SomeState = {
  currentUser: null,
  isNotify: false,
  dataNotify:{
    type:"success",
    message:"Thành công!"
  },
  currentGroup:null,
};
const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentUser(state, data) {
      state.currentUser = {...state.currentUser,...data.payload};
    },
    updateCurrentUser(state, data) {
      state.currentUser = {...state.currentUser,...data.payload};
    },
    closeNotify(state){
      state.isNotify = false;
      state.dataNotify.type = "";
      state.dataNotify.message = "";

    },
    setNotify(state, data) {
      state.isNotify = true;
      state.dataNotify.type = data.payload.type;
      state.dataNotify.message = data.payload.message;
    },
    setCurrentGroup(state, data) {
      state.currentGroup = data.payload;
    },

  },
});

export const { setCurrentUser,setNotify ,closeNotify,setCurrentGroup,updateCurrentUser} = appReducer.actions;
export default appReducer.reducer;
