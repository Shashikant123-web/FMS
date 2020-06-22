import axios from "axios";
import React, { Component } from "react";
import { browserHistory, Router } from "react-router";
import {
  VERIFY_SUCCESS,
  VERIFY_INIT,
  VERIFY_FAILUR,
} from "../ActionTypes/actionTypes";
import SendOtp from "../../components/SendOtp";
import { createBrowserHistory } from "history";
import { withRouter, Redirect } from "react-router-dom";
import UserLogin from "../../components/UserLogin";
const history = createBrowserHistory();

const header = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};
export const VerifyAction = (verifyOtp) => {
  return (dispatch, getState) => {
    dispatch({
      type: VERIFY_INIT,
    });
    return <Redirect to="/" />;

    //history.push("/dashboard");
    //make api call
    // const { mobileNumber } = verifyOtp;
    axios
      .post(
        "/stskFmsApi/otpServices/verifyOtpBySMS",
        {
          countryCode: 91,
          mobileNumber: verifyOtp.mobileNumber,
          otp_input: verifyOtp.otp,
        },
        { headers: header }
      )
      .then((Response) => {
        console.log(Response);
        console.log(Response.data);

        if (Response.data.type === "success") {
          axios
            .get("/stskFmsApi/userLogin/getByMob/" + verifyOtp.mobileNumber, {
              headers: header,
            })
            .then((Response) => {
              console.log(Response.data);
              if (Response.data.success === 1) {
                console.log("Dashboard");
                axios
                  .get(
                    "/stskFmsApi/jobseeker/getByMob/" + verifyOtp.mobileNumber,
                    { headers: header }
                  )
                  .then((res) => {
                    if (res.data.success === 1) {
                      this.props.history.push({
                        pathname: "/dashboard",
                      });
                    } else {
                      this.props.history.push({
                        pathname: "/userDetails",
                      });
                    }
                  });
              } else {
                this.props.history.push({
                  pathname: "/preregister",
                });
              }
            });
        } else {
          console.log("error");

          dispatch({
            type: VERIFY_FAILUR,
            error: "OTP miss match",
          });
          // this.setState({
          //   error: "otp miss-match",
          //   loading: false,
          // });
          // this.props.history.push("./verify");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
//export default withRouter(VerifyAction);
