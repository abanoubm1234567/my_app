import React, { Component } from "react";

class PersonalProfile extends Component {
  render() {
    return (
      <div className="hd2">
        <div className="hd2_c1">
          <div>
            <p className="title">{this.props.titles.pp}</p>
          </div>
        </div>
        <div className="hd2_c2">
          <div>
            <p>{this.props.description.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalProfile;