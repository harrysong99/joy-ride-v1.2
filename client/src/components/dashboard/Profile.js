import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser } from "../../actions/userActions";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      location: "",
      serviceTime: "",
      driver: "",
      surveyCompleted: "",
    };
  }
  componentDidMount = async () => {
    const { user } = this.props.auth;
    const { data } = await getUser(user.id);
    if (data.success) {
      const userInfo = data.userData;
      this.setState({
        name: userInfo.name,
        email: userInfo.email,
        location: userInfo.location,
        serviceTime: userInfo.serviceTime,
        driver: userInfo.driver,
        surveyCompleted: userInfo.didSurvey,
      })
    }
  }
  onChange = (e) => {};
  onSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <h1>Hello {this.state.name}</h1>
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
