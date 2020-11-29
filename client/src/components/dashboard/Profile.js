import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser } from "../../actions/userActions";

const services = [
  { label: "1부 찬양/미디어 (7:45AM)", value: "1" },
  { label: "1부 섬김이 예배 (8:00AM)", value: "2" },
  { label: "2부 찬양/미디어 (9:30AM)", value: "3" },
  { label: "2부 (10:10AM)", value: "4" },
];
const locations = [
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
        location: locations[userInfo.location - 1].label,
        serviceTime: services[userInfo.serviceTime - 1].label,
        driver: driver,
        surveyCompleted: surveyCompleted,
      });
    }
  };
  onSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/dashboard" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                {this.state.name.split(" ")[0]}
                {", "} here's what you've told us
              </h4>
              <div id="edit-profile-form" class="dialog-box">
                <p>
                  <label for="name">Full Name:</label>
                  <input type="text" id="name" value={this.state.name}></input>
                </p>
                <p>
                  <label for="email">Email:</label>
                  <input
                    type="text"
                    id="email"
                    value={this.state.email}
                  ></input>
                </p>
                <p>
                  <label for="location">Location:</label>
                  <input
                    type="text"
                    id="location"
                    value={this.state.location}
                  ></input>
                </p>
                <p>
                  <label for="serviceTime">Service Time:</label>
                  <input
                    type="text"
                    id="serviceTime"
                    value={this.state.serviceTime}
                  ></input>
                </p>
                <p>
                  <label for="driver">Driver:</label>
                  <input
                    type="text"
                    id="driver"
                    value={this.state.driver}
                  ></input>
                </p>
                <p>
                  <label for="surveyCompleted">Survey Completed:</label>
                  <input
                    type="text"
                    id="surveyCompleted"
                    value={this.state.surveyCompleted}
                  ></input>
                </p>
                <Link
                  to="/dashboard/profile/edit"
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Edit Info
                </Link>
              </div>
            </div>
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
