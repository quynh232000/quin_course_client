import { createSlice } from "@reduxjs/toolkit";
import { MCourse, MLearningLog, MStep, MUser } from "../../types/app";

interface SomeState {
  currentUser: MUser;
  isNotify: boolean;
  dataNotify: {
    type: string;
    message: string;
  };
  cart: MCourse[];
  checkout: {
    paymentMethod: string | null;
    name: string | null;
    voucher_id: number | null;
    isOrder: boolean;
  };
  currentCourse: MCourse | null;
  studyLog: {
    learningLog: MLearningLog | null;
    previousStep: string | null;
    currentStep:string|null
    nextStep: string | null;
    stepInfo:MStep|null
  };
}

const cartLocal = sessionStorage.getItem("cart");

const initialState: SomeState = {
  currentUser: {
    id: 0,
    uuid: "",
    first_name: "",
    last_name: "",
    full_name: "",
    username: "",
    email: "",
    phone_number: "",
    avatar_url: "",
    thumbnail_url: "",
    birthday: "",
    address: "",
    is_blocked: 0,
    is_pro: 0,
    is_comment_blocked: 0,
    comment_blocked_at: "",
    is_learn_tour_completed: null,
    is_onboarding_completed: null,
    bio: "",
    email_verified_at: "",
    created_at: "",
    updated_at: "",
    failed_attempts: 0,
    blocked_until: "",
    roles: [],
    socials: [],
  },
  isNotify: false,
  dataNotify: {
    type: "success",
    message: "Thành công!",
  },
  cart: cartLocal ? JSON.parse(cartLocal) : [],
  checkout: {
    paymentMethod: "",
    name: "",
    voucher_id: null,
    isOrder: false,
  },
  currentCourse: null,
  studyLog:{learningLog:null,previousStep:null,currentStep:null,nextStep:null,stepInfo:null}
};
const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentUser(state, data) {
      state.currentUser = { ...state.currentUser, ...data.payload };
    },
    updateCurrentUser(state, data) {
      state.currentUser = { ...state.currentUser, ...data.payload };
    },
    closeNotify(state) {
      state.isNotify = false;
      state.dataNotify.type = "";
      state.dataNotify.message = "";
    },
    setNotify(state, data) {
      state.isNotify = true;
      state.dataNotify.type = data.payload.type;
      state.dataNotify.message = data.payload.message;
    },
    addToCart(state, data) {
      const courseExist = state.cart.find(
        (item) => item.id === data.payload.id
      );
      if (!courseExist) {
        state.cart.push(data.payload);
      }
      sessionStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart(state, data) {
      const index = state.cart.findIndex((item) => item.id === data.payload.id);
      if (index > -1) {
        state.cart.splice(index, 1);
      }
      sessionStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart(state) {
      state.cart = [];
      sessionStorage.removeItem("cart");
    },
    asyncCart(state, data) {
      state.cart = data.payload;
      sessionStorage.setItem("cart", JSON.stringify(data.payload));
    },
    setCreateOrder(state, data) {
      state.checkout = {
        paymentMethod: data.payload.paymentMethod,
        voucher_id: data.payload.voucher_id,
        name: data.payload.name,
        isOrder: data.payload.isOrder,
      };
    },
    setCurrentCourse(state, data) {
      state.currentCourse = data.payload;
    },
    setStudyLog(state, data) {
      state.studyLog = data.payload;
    }
  },
});

export const {
  setCurrentUser,
  setNotify,
  closeNotify,
  updateCurrentUser,
  addToCart,
  removeFromCart,
  clearCart,
  asyncCart,
  setCreateOrder,
  setCurrentCourse,
  setStudyLog
} = appReducer.actions;
export default appReducer.reducer;
