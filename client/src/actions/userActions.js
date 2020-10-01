import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";
// update user didSurvey field
export const updateDidSurvey = (userEmail, didSurvey) => {
  console.log("requesting update: " + userEmail);
  axios.put("/api/users/didSurvey/" + userEmail + "/" + didSurvey);
};
// get user data by email
export const getUserByEmail = (userEmail) => {
  console.log("requesting data: " + userEmail);
  axios.get("/api/users/" + userEmail);
};
