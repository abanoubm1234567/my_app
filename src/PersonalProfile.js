import React, { Component } from "react";

class PersonalProfile extends Component {
  render() {
    return (
      <div className="hd1">
        <div className="hd1_c1">
          <div>
            <p>{this.props.titles.pp}</p>
          </div>
        </div>
        <div className="hd1_c2">
          <div>
            <p>{this.props.description.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalProfile;