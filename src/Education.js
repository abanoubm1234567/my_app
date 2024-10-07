import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div className="hd2">
        <div className="hd2_c1">
          <div>
            <p className="title">{this.props.titles.ed}</p>
          </div>
        </div>
        <div className="hd2_c2">
          <div>
            <p className="title">{this.props.schools.njit}</p>
            <p className="edu">{this.props.education.bs}</p>
            <p className="edu">{this.props.education.year1}</p>
            <p className="edu">{this.props.education.gpa1}</p>
            <p className="title">{this.props.schools.njit}</p>
            <p className="edu">{this.props.education.ms}</p>
            <p className="edu">{this.props.education.year2}</p>
            <p className="edu">{this.props.education.gpa2}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;