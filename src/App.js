import React, { Component } from 'react';
import "./App.css";
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personInfo:{
        name: "Zh Rimel",
        occupation: "Data Scientist"
      },
      contactInfo: {
        email: "abc@gmail.com",
        web: "abc.github.io/abc",
        mobile: "01234567890"
      },
      titles: {
        pp: "Personal Profile",
        we: "Work Experience",
      },
      description: {
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
      },
      experiences: {
        exp1: "Job Title at Company (August 2022 – December 2023)",
        exp2: "Job Title 2 at Company 2 (August 2020 – December 2021)",
      }
    }
  }
  render() {
    return (
      <div>
        <Header personInfo={this.state.personInfo} contactInfo={this.state.contactInfo}></Header>
        <div className="yellowDiv"></div>
        <PersonalProfile titles={this.state.titles} description={this.state.description}></PersonalProfile>
        <div className='greyDiv'></div>
        <WorkExperience titles={this.state.titles} description={this.state.description} experiences={this.state.experiences}></WorkExperience>
      </div>
    );
  }
}
export default App;