import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="hd1">
        <div className="hd1_c1">
          <div>
            <p className="name">{this.props.personInfo.name}</p>
            <p className="occupation">{this.props.personInfo.occupation}</p>
          </div>
        </div>
        <div className="hd1_c2">
          <div>
            <p className="contactInformation">Email: {this.props.contactInfo.email}</p>
            <p className="contactInformation">Web: {this.props.contactInfo.web}</p>
            <p className="contactInformation">Mobile: {this.props.contactInfo.mobile}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;