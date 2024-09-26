import React from "react";
import { FormattedMessage } from 'react-intl'

const experienceContent = [
  {
    year: "2022 - 2024",
    position: "Mitacs Research Intern",
    compnayName: "Ericsson",
    details: `Responsibilities: Develop blackbox solutions to research problems in 5G network security`,
  },
  {
    year: "2020 - 2022",
    position: "Co-Founder",
    compnayName: "Appstasy LLP",
    details: `Responsibilities: Find and manage projects and clients, analyze projects, plan, architect, develop, deploy and maintain solutions`,
  },
  {
    year: "2018",
    position: "Cybersecurity Intern",
    compnayName: "Tata Consultancy Services",
    details: `Responsibilities: Dynamic and Static Application Security Testing of web apps`,
  },
];

const Experience = () => {
  return (
    <ul>
      <li key={0}>
        <div className="icon">
          <i className="fa fa-briefcase"></i>
        </div>
        <span className="time open-sans-font text-uppercase"> {experienceContent[0].year} </span>
        <h5 className="poppins-font text-uppercase">
          <FormattedMessage
            description="ExperiencePos1"
            id="Experience.pos1"
            defaultMessage="Mitacs Research Intern"
          />
          <span className="place open-sans-font">{experienceContent[0].compnayName}</span>
        </h5>
        <p className="open-sans-font"> <FormattedMessage
            description="ExperienceDetails1"
            id="Experience.details1"
            defaultMessage="Responsibilities: Develop blackbox solutions to research problems in 5G network security"
          /></p>
      </li>

      <li key={1}>
        <div className="icon">
          <i className="fa fa-briefcase"></i>
        </div>
        <span className="time open-sans-font text-uppercase"> {experienceContent[1].year} </span>
        <h5 className="poppins-font text-uppercase">
          <FormattedMessage
            description="ExperiencePos0"
            id="Experience.pos0"
            defaultMessage="Co-Founder"
          />
          <span className="place open-sans-font">{experienceContent[1].compnayName}</span>
        </h5>
        <p className="open-sans-font"> <FormattedMessage
            description="ExperienceDetails0"
            id="Experience.details0"
            defaultMessage="Responsibilities: Find and manage projects and clients, analyze projects, plan, architect, develop, deploy and maintain solutions"
          /></p>
      </li>
      
      <li key={2}>
        <div className="icon">
          <i className="fa fa-briefcase"></i>
        </div>
        <span className="time open-sans-font text-uppercase"> {experienceContent[2].year} </span>
        <h5 className="poppins-font text-uppercase">
          <FormattedMessage
            description="ExperiencePos2"
            id="Experience.pos2"
            defaultMessage="Cybersecurity Intern"
          />
          <span className="place open-sans-font">{experienceContent[2].compnayName}</span>
        </h5>
        <p className="open-sans-font"> <FormattedMessage
            description="ExperienceDetails2"
            id="Experience.details2"
            defaultMessage="Responsibilities: Dynamic and Static Application Security Testing of web apps"
          /></p>
      </li>
    </ul>
  );
};

export default Experience;
