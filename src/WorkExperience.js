import React, { Component } from "react";

class WorkExperience extends Component {
  render() {
    return (
      <div className="hd2">
        <div className="hd2_c1">
          <div>
            <p className="title">{this.props.titles.we}</p>
          </div>
        </div>
        <div className="hd2_c2">
          <div>
            <p className="title">{this.props.experiences.exp1}</p>
            <p>{this.props.description.desc}</p>
            <p className="title">{this.props.experiences.exp2}</p>
            <p>{this.props.description.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkExperience;