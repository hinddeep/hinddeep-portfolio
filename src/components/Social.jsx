import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/hinddeep/",
  },
  {
    iconName: "fa fa-github",
    link: "https://github.com/hinddeep/",
  },
  {
    iconName: "fa fa-book",
    link: "https://blogs.hinddeep.appstasy.in",
  },
  {
    iconName: "fa fa-youtube",
    link: "https://www.youtube.com/hinddeep",
  },
  {
    iconName: "fa fa-code",
    link: "https://leetcode.com/u/hinddeep/",
  },
  {
    iconName: "fa fa-stack-overflow",
    link: "https://stackoverflow.com/users/12862910/hinddeep-s-purohit",
  }
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
