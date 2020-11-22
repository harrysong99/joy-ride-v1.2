import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser } from "../../actions/userActions";

const serviceOption = [
  { label: "1부 찬양/미디어 (7:45AM)", value: "1" },
  { label: "1부 섬김이 예배 (8:00AM)", value: "2" },
  { label: "2부 찬양/미디어 (9:30AM)", value: "3" },
  { label: "2부 (10:10AM)", value: "4" },
];
const locationOption = [
  {
    label: "1,2: Downtown Berkeley Bart Station (2160 Shattuck Ave)",
    value: "1",
  },
  { label: "3,4: Alzheimer's Center (2320 Channing Way)", value: "2" },
  { label: "5,6: Crossroads (2415 Bowditch St)", value: "3" },
  { label: "7: Clark Kerr (2601 Warring St)", value: "4" },
  { label: "8: Foothill (2700 Hearst Ave)", value: "5" },
  { label: "Other", value: "6" },
];

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

      let driver = "No";
      let surveyCompleted = "No";
      if (userInfo.driver === true) {
        driver = "Yes";
      }
      if (userInfo.didSurvey === true) {
        surveyCompleted = "Yes";
      }

      this.setState({
        name: userInfo.name,
        email: userInfo.email,
        location: locationOption[userInfo.location].label,
        serviceTime: serviceOption[userInfo.serviceTime].label,
        driver: driver,
        surveyCompleted: surveyCompleted,
      });
    }
  };
  onSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    const { errors } = this.state;
    console.log(this.state);
    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/dashboard/profile" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              profile
            </Link>
          </div>
        </div>
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
