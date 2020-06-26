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

export const handleSave = (save) => {
  const { id, userId } = save;
  console.log(id);
  console.log(userId);
  return (dispatch, getState) => {
    axios
      .post(
        "/stskFmsApi/jobseeker/saveJobs",
        {
          id: userId,
          saveJobs: [
            {
              id,
            },
          ],
        },
        { headers: header }
      )
      .then((res) => {
        console.log(res.data);
        console.log(res);
      });
    axios
      .get("/stskFmsApi/jobseeker/RecommendedJobsWithStatus/" + userId, {
        headers: header,
      })
      .then((res) => {
        console.log(res.data.data);
        if (res.data.success === 1) {
          dispatch({
            type: RECOMENDED_JOBS,
            payLoad: res.data.data,
          });
        }
      });
    axios
      .get("/stskFmsApi/jobseeker/getSavedJobs/" + userId, {
        headers: header,
      })
      .then((res) => {
        if (res.data.success === 1) {
          dispatch({
            type: SAVED_JOBS,
            payLoad: res.data.data,
          });
        }
      });
  };
};
export const handleUnsave = (save) => {
  const { id, userId } = save;

  return (dispatch, getState) => {
    axios
      .post("/stskFmsApi/jobseeker/unSaveJobs/" + userId + "/" + id, {
        headers: header,
      })
      .then((res) => {
        console.log(res.data);
        console.log(res);
      });
    axios
      .get("/stskFmsApi/jobseeker/RecommendedJobsWithStatus/" + userId, {
        headers: header,
      })
      .then((res) => {
        console.log(res.data.data);

        if (res.data.success === 1) {
          dispatch({
            type: RECOMENDED_JOBS,
            payLoad: res.data.data,
          });
        }
      });
  };
};
export const handleApply = (save) => {
  const { id, userId } = save;

  console.log("shashi");
  return (dispatch, getState) => {
    axios
      .post(
        "/stskFmsApi/jobseeker/applyJobs",
        {
          id: userId,
          jobs: [
            {
              id,
            },
          ],
        },
        { headers: header }
      )
      .then((res) => {
        console.log(res.data);
        console.log(res);
      });
    axios
      .get("/stskFmsApi/jobseeker/RecommendedJobsWithStatus/" + userId, {
        headers: header,
      })
      .then((res) => {
        console.log(res.data.data);

        if (res.data.success === 1) {
          dispatch({
            type: RECOMENDED_JOBS,
            payLoad: res.data.data,
          });
        }
      });
    axios
      .get("/stskFmsApi/jobseeker/getSavedJobsWithStatus/" + userId, {
        headers: header,
      })
      .then((res) => {
        if (res.data.success === 1) {
          dispatch({
            type: SAVED_JOBS,
            payLoad: res.data.data,
          });
        }
      });
  };
};
