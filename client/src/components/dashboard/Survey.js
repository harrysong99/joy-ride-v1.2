// survey page
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Select from "react-select";
import classnames from "classnames";
import { updateDidSurvey } from "../../actions/userActions";

const didSurveyOption = [
  { label: "Yes", value: "true" },
  { label: "No", value: "false" },
];

class Survey extends Component {
  constructor() {
    super();
    this.state = {
      didSurvey: "",
    };
  }

  onChange = (e) => {
    this.setState({
      didSurvey: e.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    updateDidSurvey(this.state.didSurvey);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <Link to="/" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> Back
                to home
              </Link>
              <h4>
                <b>Survey for</b>{" "}
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

export default Survey;
