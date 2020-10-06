import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/dashboard"
              style={{
                fontFamily: "Geneva",
              }}
              className="col s5 brand-logo center black-text"
            >
              JOY RIDE
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
