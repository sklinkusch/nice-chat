import React from "react";
import avatar from "../avatar.png";

const ContactCard = props => (
  <div className="contact-card flex-row" key={props.item}>
    <Avatar file={avatar} />
    <div className="person-container">
      <Name name={props.name} />
      <Description desc={props.desc} />
    </div>
    <Dot color="bluey-purple" />
  </div>
);

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

export default ContactCard;
