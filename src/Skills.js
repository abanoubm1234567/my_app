import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="hd4">
        <div className="hd4_c1">
          <div>
            <p className="title">{this.props.titles.ks}</p>
          </div>
        </div>

        <div className="hd4_c2">
          <div>
            <p className="skill">{this.props.skills.aks}</p>
            <p className="skill">{this.props.skills.aks}</p>
            <p className="skill">{this.props.skills.aks}</p>
          </div>
        </div>
        <div className="hd4_c2">
          <div>
            <p className="skill">{this.props.skills.aks}</p>
            <p className="skill">{this.props.skills.aks}</p>
            <p className="skill">{this.props.skills.aks}</p>
          </div>
          
        </div>
        <div className="hd4_c2">
          <div>
            <p className="skill">{this.props.skills.aks}</p>
            <p className="skill">{this.props.skills.aks}</p>
            <p className="skill">{this.props.skills.aks}</p>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Skills;