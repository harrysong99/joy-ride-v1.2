import React, { Component } from "react";
import { Link } from "react-router-dom";

class Copyright extends Component {
  render() {
    return (
      <div
        variant="body2"
        color="textSecondary"
        align="center"
        style={{ paddingTop: "30px", paddingBottom: "70px" }}
      >
        {"Copyright © "}
        <Link color="inherit" to="/dashboard">
          Joy Ride
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </div>
    );
  }
}
export default Copyright;
