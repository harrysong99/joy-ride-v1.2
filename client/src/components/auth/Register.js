import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Popup from "./Popup";

const serviceOption = [
  { label: "1부 찬양/미디어 (7:45AM)", value: "1" },
  { label: "1부 섬김이 예배 (8:00AM)", value: "2" },
  { label: "2부 찬양/미디어 (9:30AM)", value: "3" },
  { label: "2부 (10:10AM)", value: "4" },
];

const driverOption = [
  { label: "Yes", value: "true" },
  { label: "No", value: "false" },
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

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      serviceTime: "",
      driver: "",
      location: "",
      errors: {},
      showPopup: false,
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  handleChange = (e) => {
    this.setState({ [e.id]: e.value });
  };
  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      serviceTime: this.state.serviceTime,
      driver: this.state.driver,
      location: this.state.location,
    };
    console.log(newUser);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                />
                <label htmlFor="password2">Confirm Password</label>
              </div>
              <div className="input-field col s12">
                <Select
                  required={true}
                  onChange={this.handleChange}
                  id="serviceTime"
                  options={serviceOption}
                  value={serviceOption.find(
                    (obj) => obj.value === this.state.serviceTime
                  )}
                  error={errors.serviceTime}
                  placeholder="Service Time"
                  searchable={false}
                  menuPlacement="auto"
                />
              </div>
              <div className="input-field col s12">
                <Select
                  required={true}
                  onChange={this.handleChange}
                  id="driver"
                  options={driverOption}
                  value={driverOption.find(
                    (obj) => obj.value === this.state.driver
                  )}
                  error={errors.driver}
                  placeholder="Driver?"
                  searchable={false}
                  menuPlacement="auto"
                />
              </div>
              <div className="input-field col s12">
                <Select
                  required={true}
                  onChange={this.handleChange}
                  id="location"
                  options={locationOption}
                  value={locationOption.find(
                    (obj) => obj.value === this.state.location
                  )}
                  error={errors.location}
                  placeholder="Location"
                  searchable={false}
                  menuPlacement="top"
                />
                <div>
                  <p className="grey-text text-darken-1">
                    Click{" "}
                    <Link onClick={this.togglePopup.bind(this)}>here</Link> find
                    your location number
                  </p>
                  {this.state.showPopup ? (
                    <Popup closePopup={this.togglePopup.bind(this)} />
                  ) : null}
                </div>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
