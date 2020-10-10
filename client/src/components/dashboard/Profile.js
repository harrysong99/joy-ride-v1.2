import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }
  onChange = (e) => {};
  onSubmit = (e) => {};
  render() {
    return (
      <div className="container">
        <h1>Hello World</h1>
      </div>
    );
  }
}
Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Profile);
