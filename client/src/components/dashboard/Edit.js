import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser } from "../../actions/userActions";

import Select from "react-select";

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
const driverOption = [
  { label: "Yes", value: "true" },
  { label: "No", value: "false" },
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
        location: locations[userInfo.location].label,
        serviceTime: services[userInfo.serviceTime].label,
        driver: driver,
        surveyCompleted: surveyCompleted,
      });
    }
  };
  onSubmit = (e) => {
    e.preventDefault();
  };
  onChange = (e) => {
    if (locations.includes(e)) {
      this.setState({
        location: e.value,
      });
    } else if (services.includes(e)) {
      this.setState({
        serviceTime: e.value,
      });
    } else if (driverOption.includes(e)) {
      this.setState({
        driver: e.value,
      });
    } else {
      this.setState({
        [e.target.id]: e.target.value,
      });
    }
  };
  render() {
    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/dashboard/profile" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              profile
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>Edit Profile</h4>
              <form noValidate onSubmit={this.onSubmit}>
                <div id="edit-profile-form" class="dialog-box">
                  <p>
                    <label for="username">Full Name:</label>
                    <input
                      onChange={this.onChange}
                      type="text"
                      id="name"
                      value={this.state.name}
                    ></input>
                  </p>
                  <p>
                    <label for="email">Email:</label>
                    <input
                      onChange={this.onChange}
                      type="email"
                      id="email"
                      value={this.state.email}
                    ></input>
                  </p>
                  <p>
                    <p>
                      <label for="location">Location:</label>
                    </p>
                    <Select
                      required={true}
                      onChange={this.onChange}
                      id="location"
                      options={locations}
                      value={locations.find(
                        (obj) => obj.value === this.state.serviceTime
                      )}
                      placeholder={this.state.location}
                      searchable={false}
                      menuPlacement="auto"
                    />
                  </p>
                  <p>
                    <p>
                      <label for="serviceTime">Service Time:</label>
                    </p>
                    <Select
                      required={true}
                      onChange={this.handleSerivce}
                      id="serviceTime"
                      options={services}
                      value={services.find(
                        (obj) => obj.value === this.state.serviceTime
                      )}
                      placeholder={this.state.serviceTime}
                      searchable={false}
                      menuPlacement="top"
                    />
                  </p>
                  <p>
                    <p>
                      <label for="driver">Driver:</label>
                    </p>
                    <Select
                      required={true}
                      onChange={this.handleSerivce}
                      id="driver"
                      options={driverOption}
                      value={driverOption.find(
                        (obj) => obj.value === this.state.serviceTime
                      )}
                      placeholder={this.state.driver}
                      searchable={false}
                      menuPlacement="top"
                    />
                  </p>
                  <Link
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem",
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Save Changes
                  </Link>
                </div>
              </form>
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
