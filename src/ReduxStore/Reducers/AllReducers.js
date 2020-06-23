import {
  SEND_OTP,
  DASHBOARD,
  USERLOGIN_FAILUR,
  USERLOGIN_SUCCESS,
} from "../ActionTypes/actionTypes";
import {
  VERIFY_SUCCESS,
  VERIFY_INIT,
  VERIFY_FAILUR,
} from "../ActionTypes/actionTypes";
import { USERLOGIN_INIT, EYE } from "../ActionTypes/actionTypes";
import SendOtp from "../../components/SendOtp";

const intialState = {
  SendOtp: {
    countryCode: "91",
    mobileNumber: "",
    loading: false,
    otp_input: "",
    error: "",
    otp: "",
    userId: "",
  },
  // verify: {
  //   countryCode: "",
  //   mobileNumber: "",
  //   otp_input: "",
  //   error: "",
  //   otp: "",
  //   userId: "",
  //   dash: "",
  //   loading: false,
  // },
  userLogin: {
    isPasswordShown: "false",
    email: "",
    email1: "",
    password: "",
    userId: "",
    error: "",
    mobileNumber: "",
    loading: false,
    payLoad: {},
  },
};
const sendotpReducer = (state = intialState, action) => {
  switch (action.type) {
    case SEND_OTP:
      return {
        ...state,
        SendOtp: {
          ...state.SendOtp,
          loading: action.loading,
          mobileNumber: action.project.mobileNumber,
        },
      };
    case VERIFY_INIT:
      return {
        ...state,
        SendOtp: {
          ...state.SendOtp,
          loading: true,
          error: "",
        },
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        SendOtp: {
          ...state.SendOtp,
          loading: false,
        },
      };
    case VERIFY_FAILUR:
      return {
        ...state,
        SendOtp: {
          ...state.SendOtp,
          loading: false,
          error: action.error,
        },
      };
    case USERLOGIN_INIT:
      return {
        ...state,
        userLogin: {
          ...state.userLogin,
          loading: true,
          error: "",
        },
      };
    case USERLOGIN_SUCCESS:
      return {
        ...state,
        userLogin: {
          ...state.userLogin,
          payLoad: action.payLoad,
        },
      };
    case USERLOGIN_FAILUR:
      return {
        ...state,
        userLogin: {
          ...state.userLogin,
          loading: false,
          error: action.error,
        },
      };
    case EYE:
      return {
        ...state,
        userLogin: {
          ...state.userLogin,
          isPasswordShown: !state.userLogin.isPasswordShown,
        },
      };
    // case DASHBOARD:
    //   return {
    //     ...state,
    //     dash: action.dash,
    //   };
  }
  return state;
};
export const verify = (state = intialState, action) => {
  console.log(action.verify);
  switch (action.type) {
    case VERIFY_INIT:
      return {
        sendOtp: action.loading,
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        verify: action.project,
      };
    case VERIFY_FAILUR:
      return {
        ...state,
        verify: action.verifyOtp,
        verify: {
          loading: true,
        },
      };
  }
  return state;
};
export default sendotpReducer;
