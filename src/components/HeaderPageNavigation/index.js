import React from "react";
import { Link } from "react-router-dom";
import "./HeaderPageNavigation.style.scss";

function HeaderPageNavigation({ links }) {
  return (
    <nav className="nav-container">
      <ul>
        {links.map(({ path, title, iconClassname }) => (
          <li key={path}>
            {iconClassname && <i className={iconClassname} />}
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderPageNavigation;
