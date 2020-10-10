import axios from "axios";

// update user didSurvey
export const updateDidSurvey = (userID, didSurvey, history) => {
  axios
    .put("/api/users/didSurvey/" + userID + "/" + didSurvey)
    .then((res) => history.push("/dashboard/thanks")); // re-direct to thanks page on successful submit
};
// get user data
export const getUser = (userID) => {
  axios.get("/api/users/id/" + userID);
};
