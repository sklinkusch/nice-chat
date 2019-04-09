import React from "react";
import avatar from "../avatar.png";

const Sidebar = props => (
  <div className="sidebar fullHeight">
    {[1, 2, 3, 4, 5].map(item => (
      <div className="contact-card flex-row" key={item}>
        <Avatar file={avatar} />
        <div className="person-container">
          <Name name="Person Name" />
          <Description desc="LMAO ROFL...IPSUM" />
        </div>
        <Dot color="bluey-purple" />
      </div>
    ))}
  </div>
);

// Sidebar

const Avatar = props => {
  if (props.file) {
    return (
      <div className="avatar">
        <img src={props.file} alt="avatar" />
      </div>
    );
  }
  return <div className="avatar" />;
};

const Name = props => {
  return <div className="personname">{props.name}</div>;
};

const Description = props => {
  return <div className="description">{props.desc}</div>;
};

const Dot = props => {
  const klasse = `dot ${props.color}`;
  return <div className={klasse} />;
};

export default Sidebar;
