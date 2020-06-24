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
  const { email1, userId, mobileNumber, details } = userLogin;
  return (dispatch, getState) => {
    dispatch({
      type: USERLOGIN_SUCCESS,
      payLoad: {
        mobileNumber,
        email1,
        userId,
        details,
      },
    });
  };
};
// export default withRouter(VerifyAction);
