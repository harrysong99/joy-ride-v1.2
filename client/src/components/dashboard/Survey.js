import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateDidSurvey } from "../../actions/userActions";

const didSurveyOption = [
  { label: "Yes", value: "true" },
  { label: "No", value: "false" },
];
class Survey extends Component {
  constructor() {
    super();
    this.state = {
      didSurvey: "false",
    };
  }
  onChange = (e) => {
    this.setState({
      didSurvey: e.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userDidSurvey = this.state.didSurvey;
    const { user } = this.props.auth;
    updateDidSurvey(user.id, userDidSurvey, this.props.history);
  };
  render() {
    console.log(this.props.auth);
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
                <b>Ride Survey for:</b> Sunday{" "}
                {new Date(
                  new Date().setDate(
                    new Date().getDate() -
                      new Date().getDay() +
                      (new Date().getDay() === 0 ? -6 : 7)
                  )
                ).toLocaleDateString()}
              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <Select
                  required={true}
                  onChange={this.onChange}
                  id="didSurvey"
                  options={didSurveyOption}
                  value={didSurveyOption.find(
                    (obj) => obj.value === this.state.didSurvey
                  )}
                  placeholder="Are you going?"
                  searchable={false}
                  menuPlacement="top"
                />
              </div>
              <div className="input-field col s12">
                <input id="name" type="text" />
                <label htmlFor="comments"> Comments </label>
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Survey.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Survey);
