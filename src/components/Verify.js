import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import image from "./Images/Background.png";
import logo from "./Images/Mainlogo.png";
import OtpInput from "react-otp-input";
import "./css/Verify.css";

import { connect } from "react-redux";
import { userLoginAction } from "../ReduxStore/Actions/UserLoginAction";

const header = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};

class Verify extends Component {
  state = {
    countryCode: this.props.sendOtp.countryCode,
    mobileNumber: this.props.sendOtp.mobileNumber,
    email1: "",
    userId: "",
    error: "",
    otp: "",
    userId: "",
    loading: false,
  };
  handleChange = (otp) => {
    this.setState({
      otp,
    });
  };
  handleResend = (e) => {
    axios
      .post(
        "/stskFmsApi/otpServices/resendOtpBySMS",
        {
          countryCode: this.state.countryCode,
          mobileNumber: this.state.mobileNumber,
        },
        { headers: header }
      )
      .then((res) => {
        console.log(res);
      });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      error: "",
      loading: true,
    });

    axios
      .post(
        "/stskFmsApi/otpServices/verifyOtpBySMS",
        {
          countryCode: 91,
          mobileNumber: this.state.mobileNumber,
          otp_input: this.state.otp,
        },
        { headers: header }
      )
      .then((Response) => {
        console.log(Response);
        console.log(Response.data);

        if (Response.data.type === "success") {
          axios
            .get("/stskFmsApi/userLogin/getByMob/" + this.state.mobileNumber, {
              headers: header,
            })
            .then((Response) => {
              console.log(Response.data);
              console.log(Response.data);
              this.setState({
                email1: Response.data.data.email,
                mobileNumber: Response.data.data.mob,
              });
              if (Response.data.success === 1) {
                console.log("Dashboard");
                axios
                  .get(
                    "/stskFmsApi/jobseeker/getByMob/" + this.state.mobileNumber,
                    {
                      headers: header,
                    }
                  )
                  .then((res) => {
                    console.log(res.data);

                    if (res.data.success === 1) {
                      this.setState({
                        userId: res.data.data.id,
                        details: res.data.data,
                      });
                      const time = setTimeout(() => {
                        this.props.userLoginAction(this.state);
                      }, 1000);
                      this.props.history.push({
                        pathname: "/dashboard",
                      });
                    } else {
                      this.props.userLoginAction(this.state);
                      this.props.history.push({
                        pathname: "/userDetails",
                      });
                    }
                  });
              } else {
                this.props.userLoginAction(this.state);
                this.props.history.push({
                  pathname: "/preregister",
                });
              }
            });
        } else {
          console.log("error");
          this.setState({
            error: "otp miss-match",
            loading: false,
          });
          this.props.history.push("./verify");
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(this.props.number);
      });
  };
  render() {
    const { loading } = this.state;
    // console.log(this.props);
    console.log(this.state);
    console.log(this.props.sendOtp.loading);

    //console.log(this.props.sendOtp.mobileNumber);

    return (
      <div id="body">
        <div className="row" id="main1">
          <center id="center">
            <img
              className="center"
              id="logo"
              src={logo}
              width="70"
              height="70"
            ></img>
            <h4 className="center" id="otpheader">
              Enter OTP
            </h4>
            <form id="frm" onSubmit={this.handleSubmit}>
              <h6 id="enterHere">Enter Otp Here</h6>
              <div className="input-field">
                <OtpInput
                  inputStyle={{
                    width: "3rem",
                    height: "3rem",
                    fontSize: "24px",
                    color: "#707070",
                    borderRadius: 4,
                    margin: "4px",
                    border: "none",
                    background: "#EEEAEA",
                  }}
                  onChange={(otp) => this.handleChange(otp)}
                  value={this.state.otp}
                  numInputs={6}
                />
                <h6 className="red-text">{this.props.sendOtp.error}</h6>
              </div>
              <h6 className="center" id="resendotp" onClick={this.handleResend}>
                Resend OTP
              </h6>
              <button id="input-type3">
                {this.props.sendOtp.loading && (
                  <i className="fa fa-spinner fa-spin"></i>
                )}
                Verify
              </button>
            </form>
            <div id="hr" className="separator">
              or
            </div>
            <button onClick={this.handleResend} id="verifymisscall">
              Give missed call to verify
            </button>
          </center>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sendOtp: state.SendOtp.SendOtp,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLoginAction: (UserLogin) => dispatch(userLoginAction(UserLogin)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Verify);
