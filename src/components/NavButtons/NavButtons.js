import React from "react";
import "./NavButtons.style.css";

function NavButtons() {
  return (
    <div className="buttons">
      <ul>
        <li>
          <a href="#">Home</a>
          <a href="#">Links</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default NavButtons;
