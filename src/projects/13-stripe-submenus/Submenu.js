import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
  } = useGlobalContext();

  const [columns, setColumns] = useState("col2");
  useEffect(() => {
    setColumns("col2");
    if (links.length === 3) {
      setColumns("col3");
    }
    if (links.length > 3) {
      setColumns("col4");
    }
  }, [links]);
  return (
    <aside className={`${isSubmenuOpen ? "submenu show-submenu" : "submenu"}`}>
      <h4 className="page">{page}</h4>
      <ul className={`submenu-list ${columns}`}>
        {links.map((link, index) => {
          const { icon, label, url } = link;
          return (
            <li key={index}>
              <a href={url} className="submenu-link">
                {icon} {label}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Submenu;
