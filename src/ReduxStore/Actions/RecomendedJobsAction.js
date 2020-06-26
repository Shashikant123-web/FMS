import axios from "axios";
import {
  USERLOGIN_SUCCESS,
  NEW_JOBS,
  RECOMENDED_JOBS,
  APPLIED_JOBS,
  SAVED_JOBS,
} from "../ActionTypes/actionTypes";

const header = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};
export const handleSave = (id) => {
  return (dispatch, getState) => {
    console.log("yes", id);
    console.log("yes", id.userId);
    // axios
    //   .post(
    //     "/stskFmsApi/jobseeker/saveJobs",
    //     {
    //       id: 41,
    //       saveJobs: [
    //         {
    //           id,
    //         },
    //       ],
    //     },
    //     { headers: header }
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     console.log(res);
    //   });
    // axios
    //   .get("/stskFmsApi/jobseeker/RecommendedJobsWithStatus/" + 41, {
    //     headers: header,
    //   })
    //   .then((res) => {
    //     console.log(res.data.data);

    //     if (res.data.success === 1) {
    //       dispatch({
    //         type: RECOMENDED_JOBS,
    //         payLoad: res.data.data,
    //       });
    //     }
    //   });
  };
};
