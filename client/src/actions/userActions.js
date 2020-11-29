import axios from "axios";

// update user didSurvey
export const updateDidSurvey = (userID, didSurvey, history) => {
  return axios
    .put("/api/users/didSurvey/" + userID + "/" + didSurvey)
    .then((res) => history.push("/dashboard/thanks")); // re-direct to thanks page on successful submit
};
// get user data
export const getUser = (userID) => {
  return axios.get("/api/users/id/" + userID);
};
// reset didSurvey
export const everyDidSurvey = () => {
  return axios.put("/api/users/everyDidSurvey");
};
// update user info
export const updateUser = (userData, history) => {
  return axios
    .put("/api/users/update", userData)
    .then((res) => history.push("/dashboard/profile"));
};
