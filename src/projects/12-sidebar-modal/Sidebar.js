import React from "react";
import { FaTimes } from "react-icons/fa";
import logo from "./logo.svg";
import { links, social } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="coding addict" />
        <button className="btn-close-sidebar" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="sidebar-links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li className="link" key={id}>
              <a href={url} className="link-content">
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {social.map((socialLink) => {
          const { id, url, icon } = socialLink;
          return (
            <li className="social-link" key={id}>
              <a href={url} className="social-link-icon">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
