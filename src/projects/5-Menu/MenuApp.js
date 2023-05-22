import React, { useState } from "react";
import Categories from "./Categories";
import items from "./data";
import Menu from "./Menu";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

// console.log(allCategories);

const MenuApp = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <main className="menu">
        <header className="menu__title">
          <h1 className="menu__title-text">
            Our Menu <div className="menu__underline"></div>
          </h1>
        </header>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu menuItems={menuItems} />
      </main>
    </>
  );
};

export default MenuApp;
