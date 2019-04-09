import React from "react";
import ContactCard from "./ContactCard";

const Sidebar = props => (
  <div className="sidebar fullHeight">
    {[1, 2, 3, 4, 5].map(item => (
      <ContactCard name="Person Name" desc="LMAO ROFL...IPSUM" item={item} />
    ))}
  </div>
);

export default Sidebar;
