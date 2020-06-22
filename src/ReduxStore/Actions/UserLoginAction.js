import axios from "axios";
import {
  USERLOGIN_SUCCESS,
  USERLOGIN_FAILUR,
  USERLOGIN_INIT,
  EYE,
} from "../ActionTypes/actionTypes";
import { createBrowserHistory } from "history";
import { withRouter, Redirect } from "react-router-dom";
const history = createBrowserHistory();

const header = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};
export const userLoginAction = (userLogin) => {
  const { email, email1, password } = userLogin;
  console.log(email);
  return (dispatch, getState) => {
    dispatch({
      type: USERLOGIN_INIT,
    });
    // axios
    //   .get("/stskFmsApi/jobseeker/getByEmailid/" + email, {
    //     headers: header,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     console.log(res.data.data);
    //     if (res.data.data === null) {
    //       axios
    //         .get("stskFmsApi/userLogin/getByEmailid/" + email, {
    //           headers: header,
    //         })
    //         .then((res) => {
    //           if (res.data.success === 1) {
    //             this.setState({
    //               mobileNumber: res.data.data.mob,
    //             });
    //           } else {
    //             // this.setState({
    //             //   error: "Opps! email id does not registered",
    //             // });
    //             dispatch({
    //               type: USERLOGIN_FAILUR,
    //               error: "Opps! email id does not registered",
    //             });
    //           }
    //         });
    //     } else {
    //       dispatch({
    //         type: USERLOGIN_SUCCESS,
    //         payLoad: res.data.data,
    //       });
    //     }
    //   });
    axios
      .post(
        "/stskFmsApi/userLogin/verifyUser",
        {
          email: email1,
          password: password,
        },
        { headers: header }
      )
      .then((Response) => {
        console.log(Response.data);
        console.log(Response.data.success);
        if (Response.data.success === 1) {
          axios
            .get("/stskFmsApi/jobseeker/getByEmailid/" + email, {
              headers: header,
            })
            .then((res) => {
              console.log(res.data);
              console.log(res.data.data);
              if (res.data.data === null) {
                this.props.history.push({
                  pathname: "/userDetails",
                  state: {
                    mobileNumber: this.state,
                  },
                });
              } else {
                dispatch({
                  type: USERLOGIN_SUCCESS,
                  payLoad: res.data.data,
                });
                // this.props.history.push({
                //   pathname: "/dashboard",
                // state: {
                //   mobileNumber: this.state,
                //   userId: this.state.userId,
                // },
                //});
              }
            });
        } else if (Response.data.message === "User ID or Password error") {
          // this.setState({
          //   error: "User ID or Password error",
          //   loading: false,
          // });
          dispatch({
            type: USERLOGIN_FAILUR,
            error: "User ID or Password error",
          });
        } else {
          // this.setState({
          //   error: "Opps! email id does not registered",
          //   loading: false,
          // });
          dispatch({
            type: USERLOGIN_FAILUR,
            error: "Opps! email id does not registered",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
// export default withRouter(VerifyAction);
