import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <button className="btn-close-sidebar" onClick={closeSidebar}>
        <FaTimes />
      </button>
      <div className="sidebar-menu">
        {sublinks.map((sublink, index) => {
          const { page, links } = sublink;
          return (
            <article className="page" key={index}>
              <h4 className="page-title">{page}</h4>
              <ul className="list">
                {links.map((link, index) => {
                  const { label, icon, url } = link;
                  return (
                    <li className="link-item" key={index}>
                      <a href={url} className="link">
                        {icon} {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
