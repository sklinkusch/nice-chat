import React from "react";
import ContactCard from "./ContactCard";
import avatar from "../avatar.png";

const Sidebar = props => (
  <div className="sidebar fullHeight">
    {[1, 2, 3, 4, 5].map(item => (
      <ContactCard
        file={avatar}
        name="Person Name"
        desc="LMAO ROFL...IPSUM"
        item={item}
      />
    ))}
  </div>
);

export default Sidebar;
