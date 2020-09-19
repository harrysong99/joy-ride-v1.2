import React, { Component } from "react";
import "./style.css";
import Location from "../../images/map.png";
import CloseIcon from "@material-ui/icons/Close";

class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="exit_icon">
            <CloseIcon onClick={this.props.closePopup} />
          </div>
          <img src={Location} alt="location_map" height="445px" />
        </div>
      </div>
    );
  }
}

export default Popup;
